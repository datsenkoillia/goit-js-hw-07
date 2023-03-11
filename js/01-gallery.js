import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
    })
    .join('');
}

const galleryMarkup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const showBig = showBigPictureCreate(event);
  showBig.show(() => {
    // console.log('lightbox now visible');
  });
}

function showBigPictureCreate(event) {
  const imageForModalLink = event.target.dataset.source;
  const imageForModalAlt = event.target.alt;

  const onEscPress = evt => {
    console.log(evt);
    if (evt.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscPress);
    }
  };

  const instance = basicLightbox.create(
    `<img src="${imageForModalLink}" alt="${imageForModalAlt}" >`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );
  return instance;
}

// const galleryContainer = document.querySelector('.gallery');

// addGalleryToHtml(galleryContainer);

// function createGallery(arr) {
//   return arr
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//                 <a class="gallery__link" href="${original}">
//                     <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                     />
//                 </a>
//                 </div>`;
//     })
//     .join('');
// }

// function addGalleryToHtml(container) {
//   container.innerHTML = createGallery(galleryItems);
// }

// galleryContainer.addEventListener('click', handleLargeImage);

// function handleLargeImage(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(`
// 	<img src="${evt.target.dataset.source}" width="800" height="600">
// `);

//   instance.show();

//   document.addEventListener(
//     'keydown',
//     evt => {
//       if (evt.code === 'Escape') {
//         instance.close();
//       }
//     },
//     { once: true }
//   );
// }
