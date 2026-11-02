
        function toggleMenu(forceClose) {
            var menu = document.getElementById('menuContainer');
            var button = document.getElementById('menuToggle');
            var isOpen = !menu.hidden;
            menu.hidden = forceClose === true ? true : isOpen;
            button.setAttribute('aria-expanded', String(!menu.hidden));
            button.setAttribute('aria-label', menu.hidden ? 'Open menu' : 'Close menu');
        }

        function shareContent() {
            var domain = window.location.hostname;
            var metaElement = document.querySelector("meta[name=description]");
            var metaDescription = metaElement ? metaElement.getAttribute("content") : "";
            var shareText = document.title + "\n\n" + domain + (metaDescription ? " - " + metaDescription : "") + "\n" + "» ";

            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: shareText,
                    url: window.location.href
                }).catch(function(e) {
                    console.log(e);
                });
            } else {
                alert('Web Share API is not supported in your browser.');
            }
        }

        function showTab(selectedTab) {
            var tabs = document.querySelectorAll(".tabs .tab");
            var contents = document.querySelectorAll(".content");

            tabs.forEach(function(tab) {
                if (tab.id === selectedTab + "Tab") {
                    tab.classList.add("active");
                } else {
                    tab.classList.remove("active");
                }
            });

            contents.forEach(function(content) {
                if (content.id === selectedTab) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Default tab
            showTab('new');

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') toggleMenu(true);
            });
            document.querySelectorAll('#menuContainer a').forEach(function(link) {
                link.addEventListener('click', function() { toggleMenu(true); });
            });
            // FAQ toggle
            const questions = document.querySelectorAll('.question8262');
            questions.forEach((question) => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    answer.classList.toggle('show');
                    question.setAttribute('aria-expanded', String(answer.classList.contains('show')));
                });
            });
        });