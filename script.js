document.addEventListener('DOMContentLoaded', () => {
    
    // Timeline Data
    const timelineData = [
        {
            year: '1920s',
            title: 'The Roaring Twenties',
            description: 'Flapper dresses, jazz, and liberation. Women abandoned corsets for loose-fitting drop-waist dresses.',
            images: [
                'https://images.unsplash.com/photo-1569388330-29f5b61c7136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            year: '1950s',
            title: 'Post-War Glamour',
            description: 'The New Look by Dior. Full skirts, cinched waists, and a return to traditional femininity.',
            images: [
                'https://images.unsplash.com/photo-1583345227708-3b3d1b7a2d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1596700772733-149fa5ebc693?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            year: '1980s',
            title: 'Bold & Excess',
            description: 'Power suits, neon colors, spandex, and big hair. Fashion became a statement of status and individuality.',
            images: [
                'https://images.unsplash.com/photo-1605763240004-7e93b172d754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            year: '2000s',
            title: 'Y2K Era',
            description: 'Low-rise jeans, tracksuits, metallics, and pop culture influence. A blend of futuristic optimism and retro styles.',
            images: [
                'https://images.unsplash.com/photo-1529139574466-a302d2d3f524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1629827054694-81e3a6a12cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            year: 'Present',
            title: 'Modern Minimalism',
            description: 'Sustainability, comfort, and inclusivity. Fast fashion vs. slow fashion, with a focus on personal expression.',
            images: [
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            ]
        }
    ];

    const timelineList = document.querySelector('.timeline-list');
    const eraTitle = document.getElementById('era-title');
    const eraDescription = document.getElementById('era-description');
    const galleryGrid = document.getElementById('gallery-grid');
    const startButton = document.getElementById('start-journey');
    const timelineSection = document.getElementById('timeline');
    const musicToogle = document.getElementById('music-toggle');
    const musicStatus = document.querySelector('.music-status');
    
    let isMusicPlaying = false; // Placeholder state

    // Initialize Timeline
    timelineData.forEach((era, index) => {
        const li = document.createElement('li');
        li.classList.add('timeline-item');
        li.textContent = era.year;
        li.dataset.index = index;
        li.addEventListener('click', () => loadEra(index));
        timelineList.appendChild(li);
    });

    // Load Era Content
    function loadEra(index) {
        // Update Active Class
        document.querySelectorAll('.timeline-item').forEach(item => item.classList.remove('active'));
        timelineList.children[index].classList.add('active');

        // Update Text
        const era = timelineData[index];
        eraTitle.style.opacity = 0;
        eraDescription.style.opacity = 0;
        
        setTimeout(() => {
            eraTitle.textContent = era.title;
            eraDescription.textContent = era.description;
            eraTitle.style.animation = 'fadeInDown 0.5s forwards';
            eraDescription.style.animation = 'fadeInUp 0.5s forwards';
        }, 300);

        // Update Gallery
        galleryGrid.innerHTML = '';
        era.images.forEach((imgSrc, i) => {
            const card = document.createElement('div');
            card.classList.add('gallery-card');
            card.style.animationDelay = `${i * 0.1}s`;
            
            card.innerHTML = `
                <img src="${imgSrc}" alt="${era.title} Fashion" class="card-image" loading="lazy">
                <div class="card-info">
                    <h3>${era.title} Style</h3>
                    <p>iconic look from the ${era.year}</p>
                </div>
            `;
            galleryGrid.appendChild(card);
        });
    }

    // Smooth Scroll
    startButton.addEventListener('click', () => {
        timelineSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Music Toggle (Placeholder)
    musicToogle.addEventListener('click', () => {
        isMusicPlaying = !isMusicPlaying;
        const icon = musicToogle.querySelector('i');
        if (isMusicPlaying) {
            icon.classList.remove('fa-music');
            icon.classList.add('fa-volume-mute');
            musicStatus.textContent = "Ambience Playing...";
            // Here you would play actual audio: audio.play();
        } else {
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-music');
            musicStatus.textContent = "Background Ambience";
            // Here you would pause actual audio: audio.pause();
        }
    });

    // Load first era by default
    loadEra(0);
});
