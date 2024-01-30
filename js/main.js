const productos = [
    { id: 1, nombre: 'Producto 1', precio: 20 },
    { id: 2, nombre: 'Producto 2', precio: 30 },
    // Agrega más productos 
  ];
  
  document.addEventListener('DOMContentLoaded', cargarProductos);
  
  function cargarProductos() {
    const productosContainer = document.getElementById('productos');
  
    productos.forEach(producto => {
      const card = document.createElement('div');
      card.classList.add('producto-card');
      card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
      productosContainer.appendChild(card);
    });
  }
  
  let carrito = [];
  
  function agregarAlCarrito(idProducto) {
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);
    carrito.push(productoSeleccionado);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
  
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      listaCarrito.appendChild(li);
    });
  
    actualizarTotal();
  }
  
  function actualizarTotal() {
    const totalSpan = document.getElementById('total');
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalSpan.textContent = total;
  }
  
  function procesarTransaccion() {
    // Lógica para procesar la transacción, puede ser una llamada a una API, por ejemplo.
    console.log('Transacción procesada. Productos:', carrito);
    carrito = []; // Limpiar carrito después de la compra
    actualizarCarrito();
  }