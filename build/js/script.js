'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
var popupOpenButton = document.querySelector('.open-popup');
var popup = document.querySelector('.popup');
var popupCloseButton = document.querySelector('.popup__close');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

if (popupOpenButton) {
  popupOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
  });
}

if (popupCloseButton) {
  popupCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--opened');
    popup.classList.add('popup--closed');
  });
}
