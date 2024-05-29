// ? ACTIVE ATTACKS
const activeAttacks = document.querySelector('.active-attacks');

const activeAttacksRows = activeAttacks.querySelectorAll('.active-attacks__row');

activeAttacksRows.forEach(row => {
  const switchButton = row.querySelector('.active-attacks__switch-button');

  if (switchButton) {
    switchButton.addEventListener('click', () => {
      row.classList.toggle('active-attacks__row--active');
      switchButton.innerHTML = row.classList.contains('active-attacks__row--active') ? 'On' : 'Off';
    })
  }
});