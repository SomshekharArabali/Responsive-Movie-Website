var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 75500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
document.addEventListener('DOMContentLoaded', () => {
    let playButton = document.querySelector('.play-movie');
    let videoContainer = document.querySelector('.video-container');
    let myVideo = document.querySelector('#myvideo');
    let closeBtn = document.querySelector('.close-video');

    playButton.addEventListener('click', () => {
        videoContainer.classList.add('show-video');
        myVideo.play();
    });

    closeBtn.addEventListener('click', () => {
        // Navigate back to play-page.html
        window.location.href = 'play-page.html';
    });
});
