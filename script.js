const products = [
  { id: 'ciotola', name: 'Ciotola', price: 15 },
  { id: 'targhetta', name: 'Targhetta', price: 10 },
  { id: 'completo', name: 'Pacchetto Completo', price: 22 }
];

const cart = [];

function renderProducts() {
  const container = document.querySelector('.products');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <img src="https://via.placeholder.com/150" alt="${p.name}">
      <p>${p.price.toFixed(2)}€</p>
      <button onclick="addToCart('${p.id}')">Aggiungi al Carrello</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
    list.appendChild(li);
  });
  document.getElementById('total').textContent = cart.reduce((sum, i) => sum + i.price, 0).toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  const form = document.getElementById('order-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(cart.length === 0) {
      alert('Il carrello è vuoto');
      return;
    }
    alert('Ordine inviato!');
    form.reset();
    cart.length = 0;
    renderCart();
  });
});
