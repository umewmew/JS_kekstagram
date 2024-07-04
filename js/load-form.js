import { isEscapeKey } from './utils.js';
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormHashtag = uploadForm.querySelector('.text__hashtags');
const uploadFormComments = uploadForm.querySelector('.text__description');
const inputUploadFile = uploadForm.querySelector('.img-upload__input');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const closeEditFormButton = uploadForm.querySelector('.img-upload__cancel');

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditForm();
  }
};

function openEditForm() {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeEditFormButton.addEventListener('click', closeEditForm);
  document.addEventListener('keydown', onEscapeKeydown);

  uploadFormHashtag.addEventListener('keydown', (evt) => {
    evt.stopPropagation();
  });
  uploadFormComments.addEventListener('keydown', (evt) => {
    evt.stopPropagation();
  });
}

function closeEditForm() {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  closeEditFormButton.removeEventListener('click', closeEditForm);
  document.removeEventListener('keydown', onEscapeKeydown);
  inputUploadFile.value = '';
}

inputUploadFile.addEventListener('change', openEditForm);

//валидация

// const re = /^#[A-Za-zA-Яа-яЕё0-9]{1,19}$/i;
// const pristine = new Pristine(uploadForm, {
//   classTo: 'text__hashtags',
//   errorClass: 'text__hashtags--invalid', // Класс, обозначающий невалидное поле
//   successClass: 'text__hashtags--valid', // Класс, обозначающий валидное поле
//   errorTextParent: 'text__hashtags', // Элемент, куда будет выводиться текст с ошибкой
//   errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
//   errorTextClass: 'form__error', // Класс для элемента с текстом ошибки
// });

// function validateHashtag(value) {
//   return value[0] === '#';
// }

// pristine.addValidator(
//   uploadForm.querySelector('.text__hashtags'),
//   validateHashtag,
//   'тут должна быть решетка'
// );

// uploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   pristine.vaidate();
// });
