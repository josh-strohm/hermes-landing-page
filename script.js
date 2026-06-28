document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('#nav-menu');
    var navbar = document.querySelector('.navbar');
    var navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    var sections = Array.from(document.querySelectorAll('main section[id]'));
    var faqItems = Array.from(document.querySelectorAll('.faq-item'));
    var contactForm = document.querySelector('#contact-form');
    var filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
    var useCards = Array.from(document.querySelectorAll('.use-card'));
    var reveals = Array.from(document.querySelectorAll('.reveal'));

    var typingPhrases = [
        'Follow up with leads from yesterday',
        'What came in overnight?',
        'Prep me for tomorrow\'s jobs',
        'Draft review asks for last week\'s jobs'
    ];
    var typingIndex = 0;
    var typingEl = document.querySelector('#typing-text');

    function closeMenu() {
        if (!menuToggle || !navMenu) return;
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            navMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open', !isOpen);
        });

        navLinks.forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') closeMenu();
        });
    }

    window.addEventListener('scroll', function() {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });

    faqItems.forEach(function(item) {
        var button = item.querySelector('button');
        if (!button) return;

        button.addEventListener('click', function() {
            var wasOpen = item.classList.contains('active');

            faqItems.forEach(function(other) {
                var otherBtn = other.querySelector('button');
                other.classList.remove('active');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            });

            if (!wasOpen) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var filter = btn.dataset.filter;

            filterBtns.forEach(function(b) {
                var active = b === btn;
                b.classList.toggle('active', active);
                b.setAttribute('aria-selected', String(active));
            });

            useCards.forEach(function(card) {
                var category = card.dataset.category;
                var show = filter === 'all' || category === filter || (filter === 'universal' && category === 'universal');
                card.classList.toggle('hidden', !show);
            });
        });
    });

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(function(el) {
            revealObserver.observe(el);
        });

        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                var activeId = entry.target.id;
                navLinks.forEach(function(link) {
                    var href = link.getAttribute('href');
                    if (href && href.charAt(0) === '#') {
                        link.classList.toggle('active', href === '#' + activeId);
                    }
                });
            });
        }, { rootMargin: '-40% 0px -45% 0px', threshold: 0 });

        sections.forEach(function(section) {
            sectionObserver.observe(section);
        });
    } else {
        reveals.forEach(function(el) {
            el.classList.add('visible');
        });
    }

    if (typingEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setInterval(function() {
            typingIndex = (typingIndex + 1) % typingPhrases.length;
            typingEl.style.opacity = '0';
            setTimeout(function() {
                typingEl.textContent = typingPhrases[typingIndex];
                typingEl.style.opacity = '1';
            }, 200);
        }, 4000);
        typingEl.style.transition = 'opacity 0.2s ease';
    }

    var CONTACT_SUBMIT_URL = '/api/contact-submit';

    function canSubmitForm() {
        return window.location.protocol !== 'file:';
    }

    function isNetworkFetchError(error) {
        return (
            error instanceof TypeError ||
            (error && error.message && /networkerror|failed to fetch|load failed/i.test(error.message))
        );
    }

    function buildFormPayload(formData) {
        return {
            name: (formData.get('name') || '').trim(),
            businessName: (formData.get('businessName') || '').trim(),
            industry: formData.get('industry') || '',
            email: (formData.get('email') || '').trim(),
            phone: (formData.get('phone') || '').trim(),
            dailyTask: (formData.get('dailyTask') || '').trim(),
            page_url: window.location.href,
            referrer: document.referrer || null,
            website: formData.get('website') || ''
        };
    }

    function postJson(url, payload) {
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(function(response) {
            return response.text().then(function(text) {
                var data = {};

                if (text) {
                    try {
                        data = JSON.parse(text);
                    } catch (parseError) {
                        data = { message: text };
                    }
                }

                if (!response.ok) {
                    var error = new Error(data.detail || data.message || 'Submission failed');
                    error.service = data.service || null;
                    throw error;
                }

                return data;
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            if (!canSubmitForm()) {
                showFormStatus(
                    'Open this page through the dev server instead of a file on disk. Run: python dev-server.py',
                    'error'
                );
                return;
            }

            var submitButton = contactForm.querySelector('button[type="submit"]');
            var formNote = document.querySelector('#form-note');
            var originalText = submitButton ? submitButton.textContent : '';
            var formData = new FormData(contactForm);
            var payload = buildFormPayload(formData);

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending…';
            }

            if (formNote) {
                formNote.textContent = '';
                formNote.classList.remove('form-note--error', 'form-note--success');
            }

            postJson(CONTACT_SUBMIT_URL, payload)
                .then(function(data) {
                    showFormStatus(
                        data.message || 'Got it. We\'ll reach out within one business day to set up your call.',
                        'success'
                    );
                    contactForm.reset();
                })
                .catch(function(error) {
                    var message = error.message || 'Something went wrong. Try again or email us directly.';

                    if (isNetworkFetchError(error)) {
                        message =
                            'Could not reach the form relay. Run python dev-server.py and open http://127.0.0.1:8765 (not plain python -m http.server).';
                    }

                    showFormStatus(message, 'error');
                })
                .finally(function() {
                    setTimeout(function() {
                        if (submitButton) {
                            submitButton.disabled = false;
                            submitButton.textContent = originalText;
                        }
                    }, 1200);
                });
        });
    }

    function showFormStatus(text, type) {
        var note = document.querySelector('#form-note');
        if (!note) return;

        note.textContent = text;
        note.classList.remove('form-note--error', 'form-note--success');
        note.classList.add(type === 'error' ? 'form-note--error' : 'form-note--success');
    }
});