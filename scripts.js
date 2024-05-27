const activeAttacksRows = document.querySelectorAll('.active-attacks__row');

activeAttacksRows.forEach(element => {
  const switchButton = element.lastElementChild.children[0];

  if (switchButton) {
    switchButton.addEventListener('click', () => {
      element.classList.toggle('active-attacks__row--active');
      switchButton.innerHTML = element.classList.contains('active-attacks__row--active') ? 'On' : 'Off';
    })
  }
});