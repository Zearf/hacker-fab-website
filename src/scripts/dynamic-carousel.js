document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel');
    const radioButtons = document.querySelectorAll('input[name="carousel-radio"]');
    let currentSlideIndex = 0;

    const tabImages = {
        slide1: [
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Sputtering_system.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Sputtering_system.jpg",
        ],
        slide2: [
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Horno_tubular.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Horno_tubular.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Horno_tubular.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Horno_tubular.jpg",
        ],
        slide3: [
            "https://epsc.wustl.edu/imse/website/spincoater.jpg",
            "https://epsc.wustl.edu/imse/website/spincoater.jpg",
            "https://epsc.wustl.edu/imse/website/spincoater.jpg",
        ],
        slide4: [
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Autostep_i-line_stepper.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Autostep_i-line_stepper.jpg",
        ],
    };

    function updateCarousel(tab) {
        carouselContainer.innerHTML = ''; // Clear existing images
        const images = tabImages[tab];
        currentSlideIndex = 0;
        if (images) {
            for (let i = 0; i < images.length; i++) {
                const slideNumber = i + 1;
                const slideId = `slide${slideNumber}`;
                const imageUrl = images[i];

                const slide = document.createElement('div');
                slide.id = slideId;
                slide.className = "carousel-item relative w-full";

                const img = document.createElement('img');
                img.src = imageUrl;
                img.className = "w-full";
                slide.appendChild(img);

                const navDiv = document.createElement('div');
                navDiv.className = "absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between";
                
                const prevSlideNumber = (slideNumber === 1) ? images.length : slideNumber - 1;
                const nextSlideNumber = (slideNumber === images.length) ? 1 : slideNumber + 1;

                navDiv.innerHTML = `
                    <a href="#slide${prevSlideNumber}" class="btn btn-circle">❮</a>
                    <a href="#slide${nextSlideNumber}" class="btn btn-circle">❯</a>
                `;
                slide.appendChild(navDiv);
                carouselContainer.appendChild(slide);
            }
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
          
            updateCarousel(event.target.value);
           const firstSlide = document.getElementById("slide1")
          firstSlide.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"});
        });
    });
    // Initial call to display the default tab's images
    updateCarousel("slide1");
});
