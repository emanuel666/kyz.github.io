// ---- menu movil ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

// ---- configuracion del video de YouTube ----
// Cuando tengas el video, reemplaza null por el ID de YouTube.
// Ejemplo: si el link es https://www.youtube.com/watch?v=dQw4w9WgXcQ
// el ID es: 'dQw4w9WgXcQ'
const YOUTUBE_VIDEO_ID = null;

const ytHolder = document.getElementById('yt-embed-holder');
const ytPlaceholder = document.getElementById('videoPlaceholder');

if (YOUTUBE_VIDEO_ID && ytHolder && ytPlaceholder) {
  ytHolder.innerHTML = '<iframe src="https://www.youtube.com/embed/' + YOUTUBE_VIDEO_ID +
    '" title="KYZ - Video explicativo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  ytHolder.style.display = 'block';
  ytPlaceholder.style.display = 'none';
}
