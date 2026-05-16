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
        }, 500);
    });

    // Make the "No" button evade the cursor on hover
    const moveNoButton = () => {
        if (noBtn.style.position !== 'fixed') {
            noBtn.style.position = 'fixed';
            noBtn.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        
        const margin = 40;
        const maxX = viewportWidth - btnWidth - margin;
        const maxY = viewportHeight - btnHeight - margin;
        
        const randomX = Math.max(margin, Math.random() * maxX);
        const randomY = Math.max(margin, Math.random() * maxY);
        
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    // Desktop hover and Mobile touch
    noBtn.addEventListener('mouseover', moveNoButton);
    
    // Add touchstart for mobile devices
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        moveNoButton();
    }, {passive: false});

    // Prevent click on "No" button
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // Page Transition to Page 3 (Success)
    yesBtn.addEventListener('click', () => {
        page2.classList.remove('active');
        page2.classList.add('hidden');
        
        // Hide the evading "No" button
        if (noBtn.style.position === 'fixed') {
            noBtn.style.display = 'none';
        }

        setTimeout(() => {
            page3.classList.remove('hidden');
            page3.classList.add('active');
            createConfetti();
            createRoseConfetti();
        }, 500);
    });

    // Enhanced Confetti Animation
    function createConfetti() {
        const colors = ['#c41e3a', '#e8b4c8', '#d4af37', '#8b3a3a', '#f5e6d3'];
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                
                const color = colors[Math.floor(Math.random() * colors.length)];
                const left = Math.random() * 100;
                const size = Math.random() * 6 + 4;
                const duration = Math.random() * 2.5 + 2;
                const delay = Math.random() * 0.5;
                
                confetti.style.backgroundColor = color;
                confetti.style.left = `${left}vw`;
                confetti.style.top = `-${size}px`;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                confetti.style.opacity = '1';
                
                confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, (duration + delay) * 1000);
            }, i * 30);
        }
    }

    // Rose Confetti Animation
    function createRoseConfetti() {
        const roses = ['🌹', '🌷', '💐', '🥀'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const rose = document.createElement('div');
                rose.style.position = 'fixed';
                rose.style.pointerEvents = 'none';
                rose.style.zIndex = '9998';
                rose.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`;
                
                const emoji = roses[Math.floor(Math.random() * roses.length)];
                rose.textContent = emoji;
                
                const left = Math.random() * 100;
                const duration = Math.random() * 3 + 3;
                const delay = Math.random() * 0.5;
                
                rose.style.left = `${left}vw`;
                rose.style.top = `-50px`;
                
                rose.style.animation = `fall-slow ${duration}s linear ${delay}s forwards`;
                
                document.body.appendChild(rose);
                
                setTimeout(() => {
                    rose.remove();
                }, (duration + delay) * 1000);
            }, i * 50);
        }
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotateZ(360deg);
                opacity: 0;
            }
        }
        
        @keyframes fall-slow {
            to {
                transform: translateY(100vh) rotateZ(180deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
