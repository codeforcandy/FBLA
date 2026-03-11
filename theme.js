function initThemeToggle(onToggle) {
  var btnTheme = document.getElementById('btnTheme');
  var themeLabel = document.getElementById('themeLabel');
  var savedTheme = localStorage.getItem('scm-tree-theme');
  if (savedTheme === 'light') {
    document.body.classList.replace('dark', 'light');
    themeLabel.textContent = 'Dark';
  }
  btnTheme.addEventListener('click', function() {
    var isLight = document.body.classList.contains('light');
    document.body.classList.replace(isLight ? 'light' : 'dark', isLight ? 'dark' : 'light');
    themeLabel.textContent = isLight ? 'Light' : 'Dark';
    localStorage.setItem('scm-tree-theme', isLight ? 'dark' : 'light');
    if (onToggle) onToggle();
  });
}
