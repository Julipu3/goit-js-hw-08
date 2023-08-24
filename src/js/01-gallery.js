
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");

function createMarkup() {
    const element = galleryItems.map(item => `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </li>
    `).join("");

    gallery.innerHTML = element;
};

createMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
        lightbox.open();
    }
});

console.log(galleryItems);