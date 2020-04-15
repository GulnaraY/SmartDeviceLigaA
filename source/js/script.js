'use strict';

var popupOpenButton = document.querySelector('.open-popup');
var popup = document.querySelector('.popup');
var popupOverlay = document.querySelector('.popup-overlay');
var popupCloseButton = document.querySelector('.popup__close');
var pagePartsShow = document.querySelector('.page-parts__show');
var pagePartsList = document.querySelector('.page-parts__list');
var pagePartsHide = document.querySelector('.page-parts__hide');
var addressContent = document.querySelector('.address__content');
var addressShow = document.querySelector('.address__show');
var addressHide = document.querySelector('.address__hide');

if (popupOpenButton) {
  popupOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
    if (popupOverlay) {
      popupOverlay.classList.add('popup-overlay--opened');
    }
  });
}

if (popupCloseButton) {
  popupCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--opened');
    popup.classList.add('popup--closed');
    if (popupOverlay) {
      popupOverlay.classList.remove('popup-overlay--opened');
    }
  });
}

if (pagePartsShow) {
  pagePartsShow.addEventListener('click', function () {
    if (addressContent) {
      if (addressContent.classList.contains('address__content--shown')) {
        addressContent.classList.remove('address__content--shown');
        addressContent.classList.add('address__content--closed');
        addressHide.classList.remove('address__hide--shown');
        addressHide.classList.add('address__hide--hidden');
        if (addressShow) {
          addressShow.classList.remove('address__show--hidden');
          addressShow.classList.add('address__show--shown');
        }
      }
    }
    if (pagePartsList) {
      pagePartsList.classList.remove('page-parts__list--closed');
      pagePartsList.classList.add('page-parts__list--shown');
      pagePartsShow.classList.remove('page-parts__show--shown');
      pagePartsShow.classList.add('page-parts__show--hidden');
      if (pagePartsHide) {
        pagePartsHide.classList.remove('page-parts__hide--hidden');
        pagePartsHide.classList.add('page-parts__hide--shown');
      }
    }
  });
}

if (pagePartsHide) {
  pagePartsHide.addEventListener('click', function () {
    if (pagePartsList) {
      pagePartsList.classList.remove('page-parts__list--shown');
      pagePartsList.classList.add('page-parts__list--closed');
      pagePartsHide.classList.remove('page-parts__hide--shown');
      pagePartsHide.classList.add('page-parts__hide--hidden');
    }
    if (pagePartsShow) {
      pagePartsShow.classList.remove('page-parts__show--hidden');
      pagePartsShow.classList.add('page-parts__show--shown');
    }
  });
}

if (addressShow) {
  addressShow.addEventListener('click', function () {
    if (pagePartsList) {
      if (pagePartsList.classList.contains('page-parts__list--shown')) {
        pagePartsList.classList.remove('page-parts__list--shown');
        pagePartsList.classList.add('page-parts__list--closed');
        pagePartsHide.classList.remove('page-parts__hide--shown');
        pagePartsHide.classList.add('page-parts__hide--hidden');
        if (pagePartsShow) {
          pagePartsShow.classList.remove('page-parts__show--hidden');
          pagePartsShow.classList.add('page-parts__show--shown');
        }
      }
    }
    if (addressContent) {
      addressContent.classList.remove('address__content--closed');
      addressContent.classList.add('address__content--shown');
      addressShow.classList.remove('address__show--shown');
      addressShow.classList.add('address__show--hidden');
      if (addressHide) {
        addressHide.classList.remove('address__hide--hidden');
        addressHide.classList.add('address__hide--shown');
      }
    }
  });
}

if (addressHide) {
  addressHide.addEventListener('click', function () {
    if (addressContent) {
      addressContent.classList.remove('address__content--shown');
      addressContent.classList.add('address__content--closed');
      addressHide.classList.remove('address__hide--shown');
      addressHide.classList.add('address__hide--hidden');
    }
    if (addressShow) {
      addressShow.classList.remove('address__show--hidden');
      addressShow.classList.add('address__show--shown');
    }
  });
}
