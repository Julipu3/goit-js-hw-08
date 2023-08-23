import SimpleLightbox from "simplelightbox"; 
import 'simplelightbox/dist/simple-lightbox.min.css'; 
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery"); 
 
gallery.addEventListener("click", handleClick); 
 
function createMarkup() { 
 
    const element = galleryItems.map(item => ` 
    <li class="gallery__item">  
  <a class="gallery__link" href="${item.original}"> 
    <img 
      class="gallery__image" 
      src="${item.preview}" 
      data-source="${item.original}" 
      alt="${item.description}" 
      target="_parent" 
    /> 
  </a> 
</li> 
    `).join(""); 
 
    gallery.innerHTML = element; 
}; 
 
createMarkup() 
 
function handleClick(event) { 
    event.preventDefault(); 
 
    if (event.target.nodeName === "IMG") { 
        const lightbox = new SimpleLightbox('.gallery a', { 
            captionsData: 'alt', 
            captionDelay: 250, 
        }); 
         
        lightbox.open(); 
    } 
} 
 
gallery.addEventListener("click", handleClick); 
 
console.log(galleryItems);
