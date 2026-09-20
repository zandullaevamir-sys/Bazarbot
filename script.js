let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}
function setLanguage(language, button) {
  document.querySelectorAll('.language-switcher button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  showToast(`${language} tili tanlandi`);
}
function toggleLanguage() {
  const switcher = document.querySelector('.language-switcher');
  switcher.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function activateNav(button) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  showToast('Bo‘lim tanlandi');
}
