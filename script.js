document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    
    const nextBtn = document.getElementById('nextBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Page Transition to Page 2
    nextBtn.addEventListener('click', () => {
        page1.classList.remove('active');
        page1.classList.add('hidden');
        
        setTimeout(() => {
            page2.classList.remove('hidden');
            page2.classList.add('active');
        }, 800);
    });

    // Make the "No" button evade the cursor
    const moveNoButton = () => {
        // Switch to absolute positioning relative to window
        if (noBtn.style.position !== 'fixed') {
            noBtn.style.position = 'fixed';
            noBtn.style.transition = 'all 0.25s ease-out';
        }

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        
        const margin = 20;
        const maxX = viewportWidth - btnWidth - margin;
        const maxY = viewportHeight - btnHeight - margin;
        
        const randomX = Math.max(margin, Math.random() * maxX);
        const randomY = Math.max(margin, Math.random() * maxY);
        
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    // Desktop hover and Mobile touch
    noBtn.addEventListener('mouseover', moveNoButton);
    // Add touchstart for mobile devices so it moves before they can tap it
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        moveNoButton();
    }, {passive: false});

    // In case they somehow click it (e.g. via keyboard navigation)
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // Page Transition to Page 3 (Success)
    yesBtn.addEventListener('click', () => {
        page2.classList.remove('active');
        page2.classList.add('hidden');
        
        // Ensure "No" button hides too
        noBtn.style.display = 'none';

        setTimeout(() => {
            page3.classList.remove('hidden');
            page3.classList.add('active');
            createConfetti();
        }, 800);
    });

    // Confetti generator
    function createConfetti() {
        const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
        
        // Create 150 particles iteratively
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random properties
                const color = colors[Math.floor(Math.random() * colors.length)];
                const left = Math.random() * 100; // random vw start
                const size = Math.random() * 8 + 5; // size between 5 and 13px
                const duration = Math.random() * 3 + 2; // duration 2 to 5s
                
                confetti.style.backgroundColor = color;
                confetti.style.left = `${left}vw`;
                confetti.style.top = `-20px`; // start exactly off screen
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.opacity = Math.random() + 0.5;
                if(Math.random() > 0.5) confetti.style.borderRadius = '50%'; // mix circles and squares
                
                confetti.style.animationDuration = `${duration}s`;
                
                document.body.appendChild(confetti);
                
                // Cleanup removed nodes
                setTimeout(() => {
                    confetti.remove();
                }, duration * 1000);
            }, i * 20); // create one every 20ms
        }
    }
});
