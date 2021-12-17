import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkUp = galleryItems
  .map(
    img =>
      `<a class="gallery__item" href=${img.original}>
  <img class="gallery__image" src=${img.preview} alt="${img.description}" />
  </a>`,
  )
  .join('');

galleryEl.innerHTML = galleryItemsMarkUp;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
