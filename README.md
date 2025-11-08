# 🎬 Responsive Movie Website

A slick, fully responsive (well… mostly responsive, we’re working on it) movie-showcase website built to mimic that “modern streaming platform” flavor. Built with pure HTML, CSS, and JavaScript — no frameworks, just vibes and DOM manipulation.

## 🚀 Features

*   **Fully Designed Landing Page**:
    *   Hero section with title, release date, trailer button, and background poster.
*   **Search Bar**:
    *   Basic UI search input (functionality can be built on top of it later).
*   **Popular Movies Slider**: Built using Swiper.js with:
    *   Autoplay
    *   Prev/Next navigation
    *   Pagination bullets
    *   Responsive breakpoints
*   **Movies Section**: Grid layout displaying movies & shows with:
    *   Poster
    *   Title
    *   Genre tags
    *   “Play” buttons
*   **Individual Play Page**:
    *   Autoplay video player
    *   Custom play/open/close behavior
    *   Cast images
    *   Background image
    *   Clean layout for viewing content
*   **Responsive Navigation Bar**: Includes:
    *   Home
    *   Trending
    *   Explore
    *   Movies
    *   Favourite
*   **Local Assets Only**: All images, videos, and icons are stored within the repo — no external media hosting required.

## 🗂️ Project Structure

```
.
├── css
│   ├── styles.css
│   └── swiper-bundle.min.css
│
├── img
│   ├── profile pic.jpg
│   ├── home-background.png
│   ├── movie-*.jpg
│   └── popular-movie-*.jpg
│
├── main
│   ├── main.js
│   └── swiper-bundle.min.js
│
├── play-page
│   ├── Jumanji.mp4
│   ├── cast1.jpg ... cast6.jpg
│   └── play-background.jpg
│
├── index.html
├── play-page.html
└── README.md
```

## 📽️ How the Player Works

The `play-page` script handles:

*   Showing the video container
*   Autoplaying the movie clip
*   Closing and navigating back to `play-page.html`

Example snippet:
```javascript
playButton.addEventListener('click', () => {
    videoContainer.classList.add('show-video');
    myVideo.play();
});
```


## 🛠️ Tech Stack

*   HTML5
*   CSS3
*   JavaScript (Vanilla)
*   Swiper.js
*   Boxicons

No frameworks. No build tools. No nonsense.

## 📦 How to Run

It’s static, so just:

1.  **Download** the repository.
2.  **Extract** the contents.
3.  **Open `index.html`** in your web browser.

Or use a live server extension if you’re fancy.


## 📌 Future Improvements

*   Full mobile responsiveness
*   Search function
*   Separate pages for each movie
*   Movie data storage using JSON / API
*   Better animation transitions
*   Dark/light theme toggle

## 🖼️ Page Previews
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d4b52d25-e9cb-49ff-b678-5b3d4681e707" />


