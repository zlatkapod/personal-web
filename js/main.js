document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for the fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Play button functionality (placeholder - you can implement audio functionality)
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isPlaying = this.classList.contains('playing');
            
            // Reset all buttons
            playButtons.forEach(btn => {
                btn.classList.remove('playing');
                btn.textContent = 'PLAY';
            });
            
            if (!isPlaying) {
                this.classList.add('playing');
                this.textContent = 'PAUSE';
                // Here you would add your audio play functionality
                console.log('Playing audio...');
            }
        });
    });
    
    // Down arrow scrolling to first section
    const downArrow = document.querySelector('.down-arrow');
    if (downArrow) {
        downArrow.addEventListener('click', function() {
            const firstSection = document.querySelector('#podcast');
            if (firstSection) {
                window.scrollTo({
                    top: firstSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add active class to navigation items on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100; // Offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        });
    });
}); 