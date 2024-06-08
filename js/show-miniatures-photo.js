// По ТЗ в проекте необходимо отрисовать миниатюры с использованием шаблона из разметки
import { createDescriptionPhoto } from './generate-data.js';
import { openBigPhoto } from './show-big-photo.js';

const picturesContainer = document.querySelector('.pictures');
const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const miniaturesPictures = createDescriptionPhoto();

const miniaturesListFragment = document.createDocumentFragment();

miniaturesPictures.forEach((pictures) => {
  const {
    url,
    likes,
    comments: { message },
  } = pictures;

  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = message.length;

  picture.addEventListener('click', () => {
    openBigPhoto(pictures);
  });

  miniaturesListFragment.append(picture);
});

picturesContainer.append(miniaturesListFragment);

// eslint-disable-next-line no-console
console.log(miniaturesPictures);
