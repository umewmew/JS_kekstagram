import { getRandomPositiveInteger, getRandomArrayElement } from './utils.js';
import {
  ID,
  URL,
  DESCRIPTION,
  MIN_LIKES,
  MAX_LIKES,
  AVATAR,
  DESCRIPTION_PHOTO_COUNT,
  MESSAGE_ARRAY,
  NAME_USER,
} from './data.js';

const generateCommentsOfPhoto = () => ({
  id: getRandomPositiveInteger(1, ID),
  avatar: `img-avatar-${getRandomPositiveInteger(1, AVATAR)}.svg`,
  message: getRandomArrayElement(MESSAGE_ARRAY),
  name: getRandomArrayElement(NAME_USER),
});

const generateDescriptionOfPhoto = () => ({
  id: getRandomPositiveInteger(1, ID),
  url: `photos/${getRandomPositiveInteger(1, URL)}.jpg`,
  description: `${DESCRIPTION}`,
  likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  comments: generateCommentsOfPhoto(),
});

const createDescriptionPhoto = (count) =>
  Array.from(
    { length: count+1 },
    generateDescriptionOfPhoto
  );

generateCommentsOfPhoto();
generateDescriptionOfPhoto();

// eslint-disable-next-line no-console
console.log(createDescriptionPhoto(DESCRIPTION_PHOTO_COUNT))

export { createDescriptionPhoto, DESCRIPTION_PHOTO_COUNT };
