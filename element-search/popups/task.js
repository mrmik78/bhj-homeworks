const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

showSuccess.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}

const modalClose = document.querySelectorAll('.modal__close_times');
modalClose.forEach((item) => {
  item.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  }
})