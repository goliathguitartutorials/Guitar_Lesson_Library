document.addEventListener('DOMContentLoaded', () => {
    // Check if the lessons data exists from lessons.js
    if (typeof lessons === 'undefined') {
        console.error('Lessons data not found! Make sure lessons.js is loaded before scripts.js.');
        return;
    }

    const lessonsContainer = document.getElementById('lessons-container');
    const filterButtons = document.querySelectorAll('.filter-button');
    const mobileFilterToggles = document.querySelectorAll('.mobile-filter-toggle');
    const filterDropdowns = document.querySelectorAll('.filter-dropdown');

    let selectedSort = null;
    let selectedDecade = null;
    let selectedDifficulty = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lessonDiv = entry.target;
                lessonDiv.classList.add('slide-in');

                // --- THIS IS THE FIX ---
                // Find the image inside the element and set its src from data-src
                const img = lessonDiv.querySelector('.lazy-image');
                if (img && img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                // Once the animation and loading have happened, we can stop observing it.
                observer.unobserve(lessonDiv);
            }
        });
    }, {
        threshold: 0.1
    });

    const videoClickHandler = (event) => {
        const videoContainer = event.target.closest('.video-container');
        if (videoContainer) {
            const videoId = videoContainer.dataset.videoId;
            if (videoId) {
                const thumbnailImage = videoContainer.querySelector('.lazy-image');
                const videoIframe = videoContainer.querySelector('iframe');
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                thumbnailImage.style.display = 'none';
                videoIframe.style.display = 'block';
            }
        }
    };

    lessonsContainer.addEventListener('click', videoClickHandler);

    function renderLessons(lessonsToRender) {
        lessonsContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        lessonsToRender.forEach(lesson => {
            const lessonDiv = document.createElement('div');
            lessonDiv.className = 'lesson';
            lessonDiv.innerHTML = `
                <div class="lesson-content">
                    <div class="lesson-info">
                        <h2></h2>
                        <p><span class="genre"></span></p>
                        <p class="description"></p>
                    </div>
                    <a target="_blank">Access Full Lesson</a>
                </div>
                <div class="video-container">
                    <img class="lazy-image" alt="Video Thumbnail">
                    <div class="play-button"></div>
                    <iframe
                        src="" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen style="display: none;">
                    </iframe>
                </div>`;
            
            // Populate content using faster, direct property assignments
            lessonDiv.querySelector('h2').textContent = lesson.title;
            lessonDiv.querySelector('.genre').textContent = `Genre: ${lesson.genre}`;
            lessonDiv.querySelector('.description').textContent = lesson.description;
            lessonDiv.querySelector('a').href = lesson.patreonLink;
            
            const videoContainer = lessonDiv.querySelector('.video-container');
            videoContainer.dataset.videoId = lesson.videoId;

            const img = lessonDiv.querySelector('.lazy-image');
            img.dataset.src = `https://i.ytimg.com/vi/${lesson.videoId}/hqdefault.jpg`;
            
            // The observer will now correctly trigger the image load.
            observer.observe(lessonDiv);
            
            fragment.appendChild(lessonDiv);
        });

        lessonsContainer.appendChild(fragment);
    }

    function filterAndRender() {
        let filteredLessons = [...lessons];
        if (selectedSort) {
            switch (selectedSort) {
                case 'recent': filteredLessons.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)); break;
                case 'popular': filteredLessons.sort((a, b) => b.viewCount - a.viewCount); break;
                case 'a-z': filteredLessons.sort((a, b) => a.title.localeCompare(b.title)); break;
                case 'z-a': filteredLessons.sort((a, b) => b.title.localeCompare(a.title)); break;
            }
        }
        if (selectedDecade && selectedDecade !== "All") {
            filteredLessons = filteredLessons.filter(l => l.decade === selectedDecade);
        }
        if (selectedDifficulty && selectedDifficulty !== "All") {
            filteredLessons = filteredLessons.filter(l => l.difficulty == selectedDifficulty);
        }
        renderLessons(filteredLessons);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const parentGroup = this.closest('.filter-group');
            parentGroup.querySelectorAll('.filter-button.active').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (this.classList.contains('sort-button')) {
                selectedSort = this.dataset.sort;
            } else if (this.classList.contains('decade-button')) {
                selectedDecade = this.dataset.filter;
            } else if (this.classList.contains('difficulty-button')) {
                selectedDifficulty = this.dataset.filter;
            }
            filterAndRender();

            // Handle mobile dropdowns
            const dropdown = this.closest('.filter-dropdown');
            if (dropdown) {
                const toggle = document.querySelector(`.mobile-filter-toggle[data-dropdown="${dropdown.id}"]`);
                if(toggle) {
                    toggle.textContent = this.textContent.trim();
                }
                dropdown.style.display = 'none';
            }
        });
    });

    mobileFilterToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            const dropdownId = this.getAttribute('data-dropdown');
            const targetDropdown = document.getElementById(dropdownId);
            const isVisible = targetDropdown.style.display === 'block';

            filterDropdowns.forEach(dd => dd.style.display = 'none');
            targetDropdown.style.display = isVisible ? 'none' : 'block';
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.filter-card.mobile-filter')) {
            filterDropdowns.forEach(dropdown => dropdown.style.display = 'none');
        }
    });

    // Initial Render
    filterAndRender();
});
