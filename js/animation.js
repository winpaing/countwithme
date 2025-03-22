document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.querySelector('.background-animations');
    const items = ['balloon', 'star', 'cake', 'diamond'];
    
    function createFloatingItem() {
        const item = document.createElement('div');
        const itemType = items[Math.floor(Math.random() * items.length)];
        
        item.className = `floating-item ${itemType}`;
        item.style.left = `${Math.random() * 100}vw`;
        item.style.animationDuration = `${15 + Math.random() * 10}s`;
        item.style.opacity = '0.6';
        
        animationContainer.appendChild(item);
        
        item.addEventListener('animationend', () => {
            item.remove();
        });
    }

    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        
        animationContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    // Create floating items periodically
    setInterval(createFloatingItem, 3000);

    // Create fireworks if it's birthday
    if (new Date().getMonth() === 2 && new Date().getDate() === 22) {
        setInterval(createFirework, 2000);
    }

    // Create sparkles
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        
        animationContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    setInterval(createSparkle, 1000);
});