const searchInput = document.getElementById('searchInput');
const productCards = [...document.querySelectorAll('.product-card')];
const addButtons = [...document.querySelectorAll('.add-btn')];
const toast = document.getElementById('toast');
const cartCount = document.querySelector('.cart-count');

let cartTotal = Number(cartCount.textContent || 0);

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1200);
};

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.trim().toLowerCase();

  productCards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const match = name.includes(value);
    card.style.display = match ? 'block' : 'none';
  });
});

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartTotal += 1;
    cartCount.textContent = String(cartTotal);
    showToast(`${button.dataset.name} savatga qo‘shildi`);
  });
});

const chips = [...document.querySelectorAll('.chip')];
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
  });
});

const navItems = [...document.querySelectorAll('.nav-item')];
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((nav) => nav.classList.remove('active'));
    if (!item.classList.contains('add-item')) {
      item.classList.add('active');
    }
  });
});
