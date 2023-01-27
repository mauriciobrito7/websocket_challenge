const socket = io();
const form = document.getElementById('form');
const title = document.getElementById('title');
const price = document.getElementById('price');
const thumbnail = document.getElementById('thumbnail');
const code = document.getElementById('code');
const stock = document.getElementById('stock');

form.onsubmit = (e) => {
  e.preventDefault();
  socket.emit('onchange', {
    title: title.value,
    price: price.value,
    thumbnail: thumbnail.value,
    code: code.value,
    stock: stock.value,
  });
}

socket.on('onupdate', (data) => {
  
})

