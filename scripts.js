// ? ACTIVE ATTACKS
const activeAttacksRows = document.querySelectorAll('.active-attacks__row');

activeAttacksRows.forEach(row => {
  const switchButton = row.querySelector('.active-attacks__switch-button');

  if (switchButton) {
    switchButton.addEventListener('click', () => {
      row.classList.toggle('active-attacks__row--active');
      switchButton.innerHTML = row.classList.contains('active-attacks__row--active') ? 'On' : 'Off';
    })
  }
});

// ? GRAPHS
const graphsPopupButtons = document.querySelectorAll('.graphs__popup-button');
const graphsPopupContent = document.querySelector('.graphs__popup-content');

graphsPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    graphsPopupContent.classList.toggle('graphs__popup-content--active');
  })
});

const graphsPopupValues = document.querySelectorAll('.graphs__popup-value');

graphsPopupValues.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('graphs__popup-value-checkbox--active');
  })
});