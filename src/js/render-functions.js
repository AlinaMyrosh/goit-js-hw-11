import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

export function createMarkup(hits, gallery) {
  clearGallery(gallery);

  const markup = hits
    .map(
      hit => `
    <a class="gallery-item" href="${hit.largeImageURL}">
      <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${hit.likes}</p>
        <p><span>Views:</span> ${hit.views}</p>
        <p><span>Comments:</span> ${hit.comments}</p>
        <p><span>Downloads:</span> ${hit.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

export function showLoadingIndicator() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
}

export function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    document.body.removeChild(loader);
  }
}
