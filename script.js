// Hero Carousel
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.carousel-slide');
const heroTotalSlides = heroSlides.length;

function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroTotalSlides;
    showHeroSlide(currentHeroSlide);
}

function prevHeroSlide() {
    currentHeroSlide = (currentHeroSlide - 1 + heroTotalSlides) % heroTotalSlides;
    showHeroSlide(currentHeroSlide);
}

document.getElementById('heroNext').addEventListener('click', nextHeroSlide);
document.getElementById('heroPrev').addEventListener('click', prevHeroSlide);

// Auto-advance hero carousel
setInterval(nextHeroSlide, 5000);

// Event Calendar
const events = [
    {
        title: 'Conceição do Rio Verde 114 anos',
        location: 'Conceição do Rio Verde',
        date: 'De 27 a 31 de Agosto',
        image: 'https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjA2OTI3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        title: 'Festival de Inverno de Caxambu',
        location: 'Caxambu',
        date: 'De 15 a 20 de Julho',
        image: 'https://images.unsplash.com/photo-1598569642283-b6212ee48cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5hcyUyMGdlcmFpcyUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjA3ODg0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        title: 'Festa de São Sebastião',
        location: 'Baependi',
        date: 'De 10 a 20 de Janeiro',
        image: 'https://images.unsplash.com/photo-1544456808-7530b2d112df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMGJyYXppbCUyMGNvbG9uaWFsfGVufDF8fHx8MTc2MDc4ODQ5OHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
];

let currentEvent = 0;

function updateEvent(index) {
    const event = events[index];
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventDate').textContent = event.date;
    document.getElementById('eventImage').src = event.image;
    document.getElementById('eventImage').alt = event.title;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextEvent() {
    currentEvent = (currentEvent + 1) % events.length;
    updateEvent(currentEvent);
}

function prevEvent() {
    currentEvent = (currentEvent - 1 + events.length) % events.length;
    updateEvent(currentEvent);
}

document.getElementById('eventNext').addEventListener('click', nextEvent);
document.getElementById('eventPrev').addEventListener('click', prevEvent);

// Dot navigation
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentEvent = index;
        updateEvent(currentEvent);
    });
});

// Interactive Map
const cities = [
    { name: 'TRÊS CORAÇÕES', x: '22%', y: '15%', link: '/cidade/tres-coracoes' },
    { name: 'CAXAMBU', x: '62%', y: '42%', link: '/cidade/caxambu' },
    { name: 'SÃO LOURENÇO', x: '54%', y: '55%', link: '/cidade/sao-lourenco' },
    { name: 'SOLEDADE DE MINAS', x: '70%', y: '48%', link: '/cidade/soledade-de-minas' },
    { name: 'BAEPENDI', x: '45%', y: '32%', link: '/cidade/baependi' },
    { name: 'CRUZÍLIA', x: '82%', y: '35%', link: '/cidade/cruzilia' },
    { name: 'CARMO DE MINAS', x: '48%', y: '58%', link: '/cidade/carmo-de-minas' },
    { name: 'LAMBARI', x: '40%', y: '50%', link: '/cidade/lambari' },
    { name: 'CAMBUQUIRA', x: '48%', y: '45%', link: '/cidade/cambuquira' },
    { name: 'CONCEIÇÃO DO RIO VERDE', x: '35%', y: '28%', link: '/cidade/conceicao-do-rio-verde' },
    { name: 'HELIODORA', x: '32%', y: '48%', link: '/cidade/heliodora' },
    { name: 'JESUÂNIA', x: '38%', y: '62%', link: '/cidade/jesuania' },
    { name: 'SÃO GONÇALO DO SAPUCAÍ', x: '55%', y: '20%', link: '/cidade/sao-goncalo-do-sapucai' },
    { name: 'PASSA-VINTE', x: '75%', y: '65%', link: '/cidade/passa-vinte' },
    { name: 'AIURUOCA', x: '78%', y: '78%', link: '/cidade/aiuruoca' }
];

const mapSvg = document.getElementById('mapSvg');

// Add city markers to SVG
cities.forEach(city => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', city.x);
    circle.setAttribute('cy', city.y);
    circle.setAttribute('r', '6');
    circle.setAttribute('fill', 'white');
    circle.setAttribute('stroke', '#006BA6');
    circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'pointer';
    circle.style.transition = 'r 0.3s';

    let tooltip = null;

    circle.addEventListener('mouseenter', () => {
        circle.setAttribute('r', '8');
        
        // Create tooltip
        tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        tooltip.setAttribute('x', city.x);
        tooltip.setAttribute('y', `calc(${city.y} - 12)`);
        tooltip.setAttribute('text-anchor', 'middle');
        tooltip.setAttribute('fill', 'white');
        tooltip.setAttribute('font-size', '10');
        tooltip.style.pointerEvents = 'none';
        tooltip.textContent = city.name;
        mapSvg.appendChild(tooltip);
    });

    circle.addEventListener('mouseleave', () => {
        circle.setAttribute('r', '6');
        if (tooltip) {
            mapSvg.removeChild(tooltip);
            tooltip = null;
        }
    });

    circle.addEventListener('click', () => {
        window.location.href = city.link;
    });

    mapSvg.appendChild(circle);
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.target.reset();
});

// Mobile Menu (basic toggle)
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    alert('Menu mobile - funcionalidade a ser implementada');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
