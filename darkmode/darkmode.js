const toggleButton = document.querySelector('.button.is-secondary');
const body = document.querySelector('body');

// Check if 'dark-mode' class was previously active
if (localStorage.getItem('isDarkMode') === 'true') {
  body.classList.add('background-color-black');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('background-color-black');
  localStorage.setItem(
    'isDarkMode',
    body.classList.contains('background-color-black')
  );
});
