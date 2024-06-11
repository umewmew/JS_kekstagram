import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigPictureUrl = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommentsCount = document.querySelector('.comments-count');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureLoader = document.querySelector('.comments-loader');

// const socialCommentsList = document.querySelector('.social__comments');
const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

//функция по созданию комментариев
const getComment = (data) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = data.avatar;
  commentAvatar.alt = data.name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = data.message;

  comment.append(commentAvatar);
  comment.append(commentText);
  return comment;
};

function openBigPhoto() {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPictureLoader.classList.add('hidden');

  buttonClose.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onEscapeKeydown);
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureLoader.classList.add('hidden');

  document.removeEventListener('keydown', onEscapeKeydown);
}

const showBigPhoto = (picture) => {
  const { url, likes, comments, description } = picture;
  bigPictureUrl.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureCommentsCount.textContent = comments;
  bigPictureDescription.innerHTML = description;

  openBigPhoto();
};

export { showBigPhoto, getComment };
