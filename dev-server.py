#!/usr/bin/env python3
"""Local dev server: serves the landing page and relays form posts to CRM + n8n."""

from concurrent.futures import ThreadPoolExecutor, as_completed
from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import urllib.error
import urllib.request

CRM_SUBMIT_URL = (
    "https://crm.strohmpartners.com/api/public/forms/landing-contact/submit"
    "?key=vN55I-q9pVAhwUaJCv48yW_OLNY62kVm"
)
N8N_WEBHOOK_URL = (
    "https://n8n.strohmpartners.com/webhook/3e196c1a-c60b-4a3d-9ee2-0b0901186045"
)
HOST = "127.0.0.1"
PORT = 8765

INDUSTRY_LABELS = {
    "trades": "Trades / Contractor",
    "cleaning": "Cleaning / Home services",
    "auto": "Auto / Repair",
    "wellness": "Health & Wellness",
    "professional": "Professional services",
    "other": "Other",
}


def post_json(url, payload, label):
    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=body,
        method="POST",
        headers={"Content-Type": "application/json"},
    )

    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            raw = response.read().decode("utf-8")
            data = json.loads(raw) if raw else {}
            return {
                "ok": True,
                "label": label,
                "status": response.status,
                "data": data,
            }
    except urllib.error.HTTPError as error:
        raw = error.read().decode("utf-8")
        try:
            data = json.loads(raw) if raw else {}
        except json.JSONDecodeError:
            data = {"detail": raw or error.reason}
        return {
            "ok": False,
            "label": label,
            "status": error.code,
            "data": data,
        }
    except urllib.error.URLError as error:
        return {
            "ok": False,
            "label": label,
            "status": 502,
            "data": {"detail": f"{label} unreachable: {error.reason}"},
        }


def build_crm_payload(form):
    return {
        "fields": {
            "name": form.get("name", "").strip(),
            "businessName": form.get("businessName", "").strip(),
            "industry": form.get("industry", ""),
            "email": form.get("email", "").strip(),
            "phone": form.get("phone", "").strip(),
            "dailyTask": form.get("dailyTask", "").strip(),
        },
        "page_url": form.get("page_url", ""),
        "referrer": form.get("referrer"),
        "website": form.get("website", ""),
    }


def build_n8n_payload(form):
    industry = form.get("industry", "")
    return {
        "name": form.get("name", "").strip(),
        "businessName": form.get("businessName", "").strip(),
        "industry": industry,
        "industryLabel": INDUSTRY_LABELS.get(industry, industry),
        "email": form.get("email", "").strip(),
        "phone": form.get("phone", "").strip(),
        "dailyTask": form.get("dailyTask", "").strip(),
        "page_url": form.get("page_url", ""),
        "referrer": form.get("referrer"),
        "source": "hermes-agent-landing",
        "formType": "discovery-call",
    }


class DevHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/api/contact-submit":
            self.send_error(404, "Not found")
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)

        try:
            form = json.loads(body.decode("utf-8"))
        except json.JSONDecodeError:
            self._send_json(400, {"detail": "Invalid JSON body"})
            return

        crm_payload = build_crm_payload(form)
        n8n_payload = build_n8n_payload(form)

        print("[dev-server] Relaying submission to CRM and n8n...")

        with ThreadPoolExecutor(max_workers=2) as executor:
            futures = {
                executor.submit(post_json, CRM_SUBMIT_URL, crm_payload, "CRM"): "CRM",
                executor.submit(post_json, N8N_WEBHOOK_URL, n8n_payload, "n8n"): "n8n",
            }
            results = {}
            for future in as_completed(futures):
                label = futures[future]
                results[label] = future.result()

        crm_result = results["CRM"]
        n8n_result = results["n8n"]

        print(
            f"[dev-server] CRM  -> {crm_result['status']} {crm_result['data']}"
        )
        print(
            f"[dev-server] n8n  -> {n8n_result['status']} {n8n_result['data']}"
        )

        if not crm_result["ok"]:
            detail = crm_result["data"].get("detail", "CRM submission failed")
            self._send_json(crm_result["status"], {"detail": detail, "service": "CRM"})
            return

        if not n8n_result["ok"]:
            detail = n8n_result["data"].get("detail", "n8n webhook failed")
            self._send_json(
                n8n_result["status"],
                {
                    "detail": f"CRM saved, but email automation failed: {detail}",
                    "service": "n8n",
                },
            )
            return

        response = {
            "ok": True,
            "message": crm_result["data"].get(
                "message", "Thanks! We will be in touch soon."
            ),
            "crm": crm_result["data"],
            "n8n": n8n_result["data"],
        }
        self._send_json(200, response)

    def _send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format, *args):
        if args and args[1] == "POST /api/contact-submit":
            return
        print(f"[dev-server] {self.address_string()} - {format % args}")


if __name__ == "__main__":
    server = HTTPServer((HOST, PORT), DevHandler)
    print(f"Serving landing page at http://{HOST}:{PORT}/")
    print("Form submissions relay server-side to CRM + n8n via POST /api/contact-submit")
    print("Press Ctrl+C to stop.")
    server.serve_forever()