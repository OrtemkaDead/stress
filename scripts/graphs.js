// ? GRAPHS
const graphs = document.querySelector('.graphs');

const graphsPopupButtons = graphs.querySelectorAll('.graphs__popup-button');
const graphsPopupContent = graphs.querySelector('.graphs__popup-content');

graphsPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    graphsPopupContent.classList.toggle('graphs__popup-content--active');
  })
});

const graphsPopupValues = graphs.querySelectorAll('.graphs__popup-value');

graphsPopupValues.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('graphs__popup-value-checkbox--active');
  })
});