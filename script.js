/**
 * 1. Site Intro Loading Mask Exit Routing
 */
window.addEventListener('load', () => {
    const siteLoaderMask = document.getElementById('site-loader');
    setTimeout(() => {
        siteLoaderMask.style.opacity = '0';
        setTimeout(() => {
            siteLoaderMask.style.display = 'none';
            const targetHeroText = document.querySelector('.hero-text-block');
            const targetHeroImg = document.querySelector('.hero-visual-frame');
            if(targetHeroText) targetHeroText.classList.add('active');
            if(targetHeroImg) targetHeroImg.classList.add('active');
        }, 600);
    }, 1800); 
});

/**
 * 2. Mobile Layout Overlay Menu Toggler Mechanics
 */
const dynamicToggleBtn = document.querySelector('.menu-hamburger');
const dropNavMenu = document.querySelector('.main-menu');

dynamicToggleBtn.addEventListener('click', () => {
    dropNavMenu.classList.toggle('active');
    const topBar = dynamicToggleBtn.querySelector('.bar-top');
    const bottomBar = dynamicToggleBtn.querySelector('.bar-bottom');
    
    if(dropNavMenu.classList.contains('active')) {
        topBar.style.transform = 'rotate(45deg) translate(5px, 4px)';
        bottomBar.style.transform = 'rotate(-45deg) translate(3px, -3px)';
    } else {
        topBar.style.transform = 'none';
        bottomBar.style.transform = 'none';
    }
});

/**
 * 3. Reading Progress Ribbon & Scroll-Triggered Parallax Image Zoom
 */
window.addEventListener('scroll', () => {
    const totalPixelsDown = document.documentElement.scrollTop || document.body.scrollTop;
    const computeMaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const finalRatioPercentage = (totalPixelsDown / computeMaxHeight) * 100;
    
    const progressTrack = document.getElementById('progress-indicator');
    if (progressTrack) progressTrack.style.width = finalRatioPercentage + '%';

    const zoomableImages = document.querySelectorAll('.smooth-scroll-zoom');
    zoomableImages.forEach(img => {
        const boundingBox = img.getBoundingClientRect();
        if (boundingBox.top < window.innerHeight && boundingBox.bottom > 0) {
            const factor = (window.innerHeight - boundingBox.top) / window.innerHeight;
            const percentageZoom = 1 + (factor * 0.08); 
            img.style.transform = `scale(${percentageZoom})`;
        }
    });
});

/**
 * 4. Micro Interaction: Mouse Interactive Dynamic Ambient Card Lighting
 */
const glowCards = document.querySelectorAll('.mouse-glow-card');
glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.classList.add('glow-active');
        card.style.background = `radial-gradient(circle 140px at ${x}px ${y}px, rgba(245, 242, 235, 1) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0) 100%), #ffffff`;
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('glow-active');
        card.style.background = '';
    });
});

/**
 * 5. Premium Smooth Structural Accordion
 */
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const parentItem = header.parentElement;
        const activeBody = parentItem.querySelector('.accordion-body');
        
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== parentItem && item.classList.contains('item-active')) {
                item.classList.remove('item-active');
                item.querySelector('.accordion-body').style.maxHeight = '0px';
            }
        });

        parentItem.classList.toggle('item-active');
        
        if (parentItem.classList.contains('item-active')) {
            activeBody.style.maxHeight = activeBody.scrollHeight + "px";
        } else {
            activeBody.style.maxHeight = "0px";
        }
    });
});

/**
 * 6. Ergonomic Magnetic Structural Buttons
 */
const magneticButtons = document.querySelectorAll('.magnetic-target');
magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const positionBox = btn.getBoundingClientRect();
        const horizontalDeltaX = e.clientX - positionBox.left - (positionBox.width / 2);
        const verticalDeltaY = e.clientY - positionBox.top - (positionBox.height / 2);
        
        btn.style.transform = `translate(${horizontalDeltaX * 0.35}px, ${verticalDeltaY * 0.35}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'none';
    });
});

/**
 * 7. Intersection Observer Scroll Motion Pipeline
 */
const viewportObservableElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

const intersectionOptionsConfig = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
};

const internalScrollEngineObserver = new IntersectionObserver((activeEntries, ongoingObserver) => {
    activeEntries.forEach(entryItem => {
        if (entryItem.isIntersecting) {
            entryItem.target.classList.add('active');
            if (entryItem.target.id === 'atelier') {
                executeMetricCounterLoops();
            }
            ongoingObserver.unobserve(entryItem.target);
        }
    });
}, intersectionOptionsConfig);

viewportObservableElements.forEach(item => internalScrollEngineObserver.observe(item));

/**
 * 8. Kinetic Numerical Digital Counter System
 */
function executeMetricCounterLoops() {
    const counterNodes = document.querySelectorAll('.metric-val');
    
    counterNodes.forEach(numberNode => {
        if(numberNode.classList.contains('counted-engaged')) return;
        numberNode.classList.add('counted-engaged');
        
        const ceilingLimit = parseInt(numberNode.getAttribute('data-max'));
        let ongoingStartVal = 0;
        const speedDuration = 1400; 
        const incrementalStep = ceilingLimit / (speedDuration / 16);
        
        const runtimeInterval = setInterval(() => {
            ongoingStartVal += incrementalStep;
            if (ongoingStartVal >= ceilingLimit) {
                numberNode.innerText = ceilingLimit + (ceilingLimit === 100 ? "%" : "");
                clearInterval(runtimeInterval);
            } else {
                numberNode.innerText = Math.floor(ongoingStartVal);
            }
        }, 16);
    });
}

/**
 * 9. Shopping Cart Total Count Incrementor
 */
let runningCartTotalCount = 0;
const visualBadgeDisplay = document.querySelector('.bag-badge');

document.querySelectorAll('.cart-add-action').forEach(btnElement => {
    btnElement.addEventListener('click', function() {
        runningCartTotalCount++;
        visualBadgeDisplay.innerText = runningCartTotalCount;
        
        visualBadgeDisplay.style.transform = 'scale(1.4)';
        const fallbackText = this.innerText;
        this.innerText = "✓ ADDED TO PROJECT EDIT";
        this.style.backgroundColor = "#8e8275";
        this.style.color = "#ffffff";
        
        setTimeout(() => { visualBadgeDisplay.style.transform = 'scale(1)'; }, 250);
        setTimeout(() => {
            this.innerText = fallbackText;
            this.style.backgroundColor = "";
            this.style.color = "";
        }, 1600);
    });
});

/**
 * 10. Soft Form Dispatch Interceptor Interface System
 */
document.getElementById('somaContact')?.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const actionFormButton = this.querySelector('.submit-organic-btn');
    const visualLabelNode = actionFormButton.querySelector('span');
    
    visualLabelNode.innerText = "PROCESSING ARCHIVE DISPATCH...";
    
    setTimeout(() => {
        visualLabelNode.innerText = "APPOINTMENT CONFIRMED VIA MAIL";
        actionFormButton.style.backgroundColor = "#8e8275";
        if(actionFormButton.tagName === 'BUTTON') actionFormButton.style.color = '#ffffff';
        this.reset();
    }, 1500);
});