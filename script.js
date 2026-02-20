const myWorks = [
    { title: "Lord Hanuman", img: "images/hanuman.jpg", type: "Drawing" },
    { title: "Lord Ganesh", img: "images/ganesh.jpg", type: "Drawing" },
    { title: "Lord Hanuman", img: "images/hanuman ji.jpg", type: "Drawing" },
    { title: "Lord Narasimha", img: "images/narasimha.jpg", type: "Drawing" },
    { title: "Lord Ganesh", img: "images/ganesh 1.jpg", type: "Drawing" },
    { title: "The Bike", img: "images/bike.jpg", type: "Drawing" },
    { title: "The Player", img: "images/player.jpg", type: "Drawing" },
    { title: "The Kid", img: "images/kid.jpg", type: "Drawing" },
    { title: "The Bike", img: "images/bullet bike.jpg", type: "Drawing" },
    { title: "The Boy", img: "images/boy.jpg", type: "Drawing" },
    { title: "The Butterfly", img: "images/butterfly.jpg", type: "Drawing" },
    { title: "The Car", img: "images/car.jpg", type: "Drawing" },
    { title: "The Girl", img: "images/cartoon 1.jpg", type: "Drawing" },
    { title: "The Cartoon", img: "images/cartoon.jpg", type: "Drawing" },
    { title: "The Deer", img: "images/deer.jpg", type: "Drawing" },
    { title: "The Squirrel", img: "images/squirrel.jpg", type: "Drawing" },
    { title: "The Smile", img: "images/smile.jpg", type: "Drawing" },
    { title: "The Cartoon", img: "images/mikkie.jpg", type: "Drawing" },
    { title: "The Nature", img: "images/nature.jpg", type: "Drawing" },
    { title: "The Love", img: "images/love.jpg", type: "Drawing" },
    { title: "The Cartoon", img: "images/jerry.jpg", type: "Drawing" },
    { title: "The Boy", img: "images/cartoon 2.jpg", type: "Drawing" },
    { title: "The Dog", img: "images/dog.jpg", type: "Drawing" },
    { title: "The Paper Flowers", img: "images/flowers.jpg", type: "Craft" },
    { title: "The Paper House", img: "images/paper house.jpg", type: "Craft" },
    { title: "The Pen Stand", img: "images/pen stand.jpg", type: "Craft" },
    { title: "The Flower Pot", img: "images/flower pot.jpg", type: "Craft" },
    { title: "The Fish", img: "images/fish.jpg", type: "Craft" },
    { title: "The Chair", img: "images/chair.jpg", type: "Craft" },
    { title: "The Heart ", img: "images/love symbol.jpg", type: "Craft" },
    { title: "The Ship", img: "images/ship.jpg", type: "Craft" },
    { title: "The Stars", img: "images/stars.jpg", type: "Craft" },
];

let filteredWorks = [...myWorks];
let currentIndex = 0;
let autoPlayInterval;

const slidesContainer = document.getElementById('slides-container');
const dotsContainer = document.getElementById('dots-container');
const playPauseCheckbox = document.getElementById('playPauseCheckbox');
const speedSlider = document.getElementById('speed-slider');
const galleryRoot = document.getElementById('CraftGallery-container');

function filterGallery(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isMatch = (category === 'All' && btn.innerText === 'All') || btn.innerText.includes(category);
        btn.classList.toggle('active', isMatch);
    });

    filteredWorks = category === 'All' ? [...myWorks] : myWorks.filter(w => w.type === category);
    currentIndex = 0;
    renderGallery();
}

function renderGallery() {
    slidesContainer.innerHTML = filteredWorks.map((work, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}">
            <div class="image-box"><img src="${work.img}" alt="${work.title}"></div>
            <div class="caption">${work.type}: ${work.title}</div>
        </div>
    `).join('');

    dotsContainer.innerHTML = filteredWorks.map((_, i) => `
        <span class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>
    `).join('');

    restartTimer();
}

function moveSlide(step) {
    if (filteredWorks.length === 0) return;
    currentIndex = (currentIndex + step + filteredWorks.length) % filteredWorks.length;
    updateUI();
    restartTimer();
}

function goToSlide(index) {
    currentIndex = index;
    updateUI();
    restartTimer();
}

function updateUI() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function startAutoplay() {
    clearInterval(autoPlayInterval);
    if (!playPauseCheckbox.checked) {
        autoPlayInterval = setInterval(() => moveSlide(1), speedSlider.value);
    }
}

function toggleAutoplay() {
    startAutoplay();
}

function restartTimer() {
    startAutoplay();
}

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") { 
        e.preventDefault(); 
        playPauseCheckbox.checked = !playPauseCheckbox.checked; 
        toggleAutoplay(); 
    }
    if (e.code === "ArrowRight") moveSlide(1);
    if (e.code === "ArrowLeft") moveSlide(-1);
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        galleryRoot.requestFullscreen().catch(err => console.log(err));
    } else {
        document.exitFullscreen();
    }
}

speedSlider.oninput = restartTimer;

filterGallery('All');
