//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const MAX_LENGTH_MESSAGE = 140;

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

//Функция для проверки максимальной длины строки
const checkStringLength = (string, length) => string.length <= length;
checkStringLength('Проверка строки', MAX_LENGTH_MESSAGE);

const ID = 25;
const URL = 25;
const DESCRIPTION = 'Какой хороший день!';
const MIN_LIKES = 15;
const MAX_LIKES = 250;
const AVATAR = 6;
const DESCRIPTION_PHOTO_COUNT = 25;
const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME_USER = [
  'Валентина',
  'Петр',
  'Владимир',
  'Мария',
  'Иван',
  'Константин',
];

//функция по получению случайного элемента из массива
const getRandomArrayElement = (element) =>
  element[getRandomPositiveInteger(0, element.length - 1)];

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

const createDescriptionPhoto = Array.from(
  { length: DESCRIPTION_PHOTO_COUNT },
  generateDescriptionOfPhoto
);

generateCommentsOfPhoto();
generateDescriptionOfPhoto();

// eslint-disable-next-line no-console
console.log(createDescriptionPhoto);
