function showToast(message){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function setLanguage(label, btn){
  document.querySelectorAll('.language-switcher button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showToast('Til: ' + label);
}

function toggleLanguage(){
  const buttons = Array.from(document.querySelectorAll('.language-switcher button'));
  const activeIndex = buttons.findIndex(b => b.classList.contains('active'));
  const next = buttons[(activeIndex + 1) % buttons.length];
  setLanguage(next.textContent, next);
}

function activateNav(btn){
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
