import { isEscapeKey } from './utils.js';
const uploadForm = document.querySelector('.img-upload__form');
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
}

function closeEditForm() {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  closeEditFormButton.removeEventListener('click', closeEditForm);
  document.removeEventListener('keydown', onEscapeKeydown);
  inputUploadFile.value = '';
}

inputUploadFile.addEventListener('change', openEditForm);
