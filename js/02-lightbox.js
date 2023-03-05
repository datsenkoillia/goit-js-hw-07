import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li>
          <a class="gallery__item" href="${original}">
            <img style="display: block" class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </li>
  `;
    })
    .join('');
}

const galleryMarkup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
