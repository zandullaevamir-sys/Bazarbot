let toastTimer;
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#f3f8fe');
  tg.setBackgroundColor('#f3f8fe');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 1500);
}

function closeApp() {
  if (tg) tg.close();
  else showToast('Xush kelibsiz!');
}

function toggleLanguage() {
  const buttons = [...document.querySelectorAll('.language-switcher button')];
  const active = buttons.findIndex(button => button.classList.contains('active'));
  const next = (active + 1) % buttons.length;
  buttons.forEach((button, index) => button.classList.toggle('active', index === next));
  showToast('Til o‘zgardi');
}

function setLanguage(language, button) {
  document.querySelectorAll('.language-switcher button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  showToast(`${language} tanlandi`);
}

function activateNav(button) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  showToast('Bo‘lim tanlandi');
}
