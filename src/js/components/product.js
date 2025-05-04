function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500; 
        let start = null;

        function animationStep(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const easing = easeInOutQuad(progress / duration); 
            window.scrollTo(0, startPosition + distance * easing);

            if (progress < duration) {
                requestAnimationFrame(animationStep);
            }
        }

        requestAnimationFrame(animationStep);
    }
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
// Add event listeners to all menu links and displaying the corresponding category
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', event => {
    event.preventDefault(); 
    const targetId = link.getAttribute('data-target');
    document.querySelectorAll('.menu-category').forEach(category => {
        category.style.display = 'none'; 
    });


    const targetCategory = document.getElementById(targetId);
    if (targetCategory) {
        targetCategory.style.display = 'block'; 
    }
    });
});

// Add event listener to the menu title to show all categories when clicked
const menuTitle = document.querySelector('.menu-title');
if (menuTitle) {
    menuTitle.addEventListener('click', () => {
        
        document.querySelectorAll('.menu-category').forEach(category => {
            category.style.display = 'block'; 
        });
    });
}
