const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleButton.dataset.theme = currentTheme;
}

function switchTheme(e) {
  const newTheme = e.target.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleButton.dataset.theme = newTheme;
}

toggleButton.addEventListener('click', switchTheme, false);
