// Função para alternar entre temas
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar se há uma preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  updateToggleButton(savedTheme);
}

// Alternar tema ao clicar no botão
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleButton(newTheme);
});

// Atualizar ícone do botão
function updateToggleButton(theme) {
  themeToggle.innerHTML =
    theme === 'light'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
}
