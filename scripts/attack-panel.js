$(document).ready(function () {
  // ? ADD SERVER FUNC
  $('.attack-panel__layer-button--add-server').click(function () {
    const name = prompt('введите название сервера', '')

    if (name) {
      // Создаём новую кнопку и добавляем обработчик событий сразу
      const element = $('<button>').addClass('attack-panel__layer-button').html(name);
      
      // Вставляем новую кнопку перед кнопкой "add server"
      element.insertBefore($(this));
      
      updateActiveClass(element[0]);  // Добавляем обработчик событий на новую кнопку (используем элемент DOM, не jQuery объект)
    }
  })
})

// ? ATTACK PANEL
const attackPanel = document.querySelector('.attack-panel');
const runAttackButton = attackPanel.querySelector('.attack-panel__layer-button--run-attack');

let activeLayer = '4';
let activeServer;

// ? SELECT LAYER
const selectLayer = attackPanel.querySelector('#attack-panel-select-layer');
// * беру все кнопки кроме кнопки "run attack"
const selectLayerButtons = selectLayer.querySelectorAll('.attack-panel__layer-button:not(.attack-panel__layer-button--run-attack)');

selectLayerButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectLayerButtons.forEach(btn => btn.classList.remove('attack-panel__layer-button--active'));
    button.classList.add('attack-panel__layer-button--active');

    activeLayer = button.textContent;
  });
});

// ? SELECT SERVER
const selectServer = attackPanel.querySelector('#attack-panel-select-server');

// * Функция для обновления активного класса
function updateActiveClass(button) {
  button.addEventListener('click', () => {
    // Удаляем активный класс у всех кнопок
    const selectServerButtons = Array.from(selectServer.querySelectorAll('.attack-panel__layer-button:not(.attack-panel__layer-button--add-server)'));
    selectServerButtons.forEach(btn => btn.classList.remove('attack-panel__layer-button--active'));
    
    // Добавляем активный класс у нажатой кнопки
    button.classList.add('attack-panel__layer-button--active');
    
    activeServer = button.textContent;
  });
}

// * беру все кнопки кроме кнопки "add server"
const selectServerButtons = Array.from(selectServer.querySelectorAll('.attack-panel__layer-button:not(.attack-panel__layer-button--add-server)'));

selectServerButtons.forEach(button => {
  updateActiveClass(button);
});

runAttackButton.addEventListener('click', () => {
  if (!activeServer) {
    alert('Сначала выберите сервер!!');
  }
});