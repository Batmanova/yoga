const modalButtons = document.querySelectorAll('[data-modal-button');
const modalClosebattons = document.querySelectorAll('[data-modal-button]');
const allModals = document.querySelectorAll('[data-modal]');

//Кнопки - открыть модальное окно
modalButtons.forEach(function(item){
  item.addEventListener('click', function(){
  const modalId = this.dataset.modalButton;
  const modal = document.querySelector('#' + modalId);
  modal.classList.remove('hidden');
// Находим внути открываемого модального окна блок .modal-window и запрещаем ему передавать клики наверх
 modal.querySelector('.modal-window').addEventListener('clik', function(e){
    e.stopPropagation();
 });
})
})

//кнопки - закрыть модальное окно
modalClosebattons.forEach(function(item){
 item.addEventListener('click', function(){
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
       })
    })
//Закрытие модалок
allModals.forEach(function(item){
 item.addEventListener('click', function(){
    this.classList.add('hidden');
 })
})