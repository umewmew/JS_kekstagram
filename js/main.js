//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const MAX_LENGTH_MESSAGE = 140;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

random(1, MAX_LENGTH_MESSAGE);
