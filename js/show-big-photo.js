import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigPictureUrl = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsCount = document.querySelector('.comments-count'); //общее количество комментариев к фотографии
const socialCommentList = document.querySelector('.social__comments');
const bigPictureCaption = document.querySelector('.social__caption');
const commentLoaderButton = document.querySelector('.comments-loader');

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

//функция по созданию комментария
const getComment = (comments) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comments.avatar;
  commentAvatar.alt = comments.name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comments.message;

  comment.append(commentAvatar);
  comment.append(commentText);
  return comment;
};

const renderComments = (picture) => {
  socialCommentList.innerHTML = '';
  for(let i = 0; i < 5; i++){
    socialCommentList.append(getComment(picture));
  }
};

function openBigPhoto() {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentLoaderButton.classList.remove('hidden');

  buttonClose.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onEscapeKeydown);
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentLoaderButton.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  commentLoaderButton.classList.add('hidden');

  document.removeEventListener('keydown', onEscapeKeydown);
}

const showBigPhoto = (picture) => {
  const {
    url,
    likes,
    comments: { message },
    description,
  } = picture;
  bigPictureUrl.src = url;
  bigPictureLikes.textContent = likes;
  commentsCount.innerHTML = message.length;
  bigPictureCaption.innerHTML = description;

  openBigPhoto();
  renderComments(picture.comments);
};

export { showBigPhoto };
