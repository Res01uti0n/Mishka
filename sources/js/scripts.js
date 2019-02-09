'use strict';


/*открытие модального окна*/
var headerBlock = document.querySelector('.header__block');
var btnBuyTovat = document.querySelector('.btn--buy');
var modalCart = document.querySelector('.modal__overlay');
var burgerBtn = headerBlock.querySelector('.btn--burger');
var menuBlock = headerBlock.querySelector('.menu__block');

var openModal = function (btn, modal) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
    if (btn == burgerBtn) {
      burgerBtn.classList.add('btn--close');
      headerBlock.classList.add('header--menu');
    }
  });
}

if (headerBlock.classList.contains('header--menu')) {
  burgerBtn.classList.add('btn--close');
} else {
  burgerBtn.classList.remove('btn--close');
}

openModal(btnBuyTovat, modalCart);
openModal(burgerBtn, menuBlock);

/*закрытие модального окна*/
var ESC_BTN = 27;
var btnCart = modalCart.querySelector('.btn--cart');

btnCart.addEventListener('click', function() {
  modalCart.classList.remove('modal--show');
});

var closeModalEsc = function(modal) {
  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ESC_BTN) {
      modal.classList.remove('modal--show');
    }
  });
}

closeModalEsc(modalCart);

/*выбор размера */
var sizeS = modalCart.querySelector('.size--s');
var sizeM = modalCart.querySelector('.size--m');
var sizeL = modalCart.querySelector('.size--l');

var changeSize = function(sizeAct, size2, size3) {
  sizeAct.addEventListener('click', function() {
    sizeAct.classList.add('size--active');
    size2.classList.remove('size--active');
    size3.classList.remove('size--active');
  });
}

changeSize(sizeS, sizeM, sizeL);
changeSize(sizeM, sizeS, sizeL);
changeSize(sizeL, sizeM, sizeS);
