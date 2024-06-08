import { closeButton, closeOnEsc } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigPictureUrl = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommentsCount = document.querySelector('.comments-count');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureLoader = document.querySelector('.comments-loader');

// const socialCommentsList = document.querySelector('.social__comments');

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

const openBigPhoto = (picture) => {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPictureLoader.classList.add('hidden');

  const { url, likes, comments, description } = picture;
  bigPictureUrl.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureCommentsCount.textContent = comments;
  bigPictureDescription.innerHTML = description;

  buttonClose.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', closeBigPhoto);
  //функция для закрытия полноформатного изображения и обработчиков
  function closeBigPhoto() {
    bigPicture.classList.add('hidden');
    commentCount.classList.add('hidden');
    document.body.classList.remove('modal-open');
    bigPictureLoader.classList.add('hidden');

    buttonClose.removeEventListener(
      'click',
      closeButton(buttonClose, bigPicture)
    );
    document.removeEventListener('keydown', closeOnEsc(bigPicture));
  }
};

export { openBigPhoto };
