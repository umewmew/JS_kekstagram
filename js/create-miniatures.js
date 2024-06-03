// По ТЗ в проекте необходимо отрисовать миниатюры с использованием шаблона из разметки
import { createDescriptionPhoto, DESCRIPTION_PHOTO_COUNT } from  './generate-data.js';

const picturesContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');


const miniaturesPictures = createDescriptionPhoto(DESCRIPTION_PHOTO_COUNT);
const miniaturesListFragment = document.createDocumentFragment();

miniaturesPictures.forEach(({url, likes, comments:{message}}) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = message.length;
  miniaturesListFragment.append(picture);
});

picturesContainer.append(miniaturesListFragment);

