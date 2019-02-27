'use strict';

(function(){
  const ESQ = 27;

  const subscribeBtn = document.querySelector('.header__subcribe');
  const subscribeForm = document.querySelector('.subscribe');


  const showModal = function () {
    subscribeForm.classList.remove('hidden');
    subscribeForm.classList.add('show');
  }
  const hideModal = function () {
    subscribeForm.classList.remove('show');
    subscribeForm.classList.add('hidden');
  }

  const toggleModal = function () {
    subscribeForm.classList.contains('hidden') ? showModal() : hideModal();
  }

  subscribeBtn.addEventListener('click', toggleModal);


  window.addEventListener('keydown', (evt) => {
    console.log(evt.keyCode);
    if(evt.keyCode === ESQ) {
      evt.preventDefault();
      hideModal();
    }
  });

})();
