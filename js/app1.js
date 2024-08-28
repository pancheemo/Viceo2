// Evento de clic en los enlaces principales

document.getElementById('platforms-link').addEventListener('click', function() {
    alert('¡Explora las plataformas de videojuegos!');
});

document.getElementById('calculator-link').addEventListener('click', function() {
    alert('¡Calcula el costo de tus juegos favoritos!');
});

// Evento de clic en los enlaces del pie de página
document.getElementById('twitter-link').addEventListener('click', function() {
    alert('¡Síguenos en Twitter!');
});

document.getElementById('facebook-link').addEventListener('click', function() {
    alert('¡Síguenos en Facebook!');

});

let scrollPosition = 0;
const scrollAmount = 300;

//mover los productos hacia la derecha
document.getElementById('moverDerecha').addEventListener('click', function() {
    const container = document.querySelector('.producto-container');
    scrollPosition -= scrollAmount;
    container.style.transform = `translateX(${scrollPosition}px)`;
});

//mover los productos hacia la izquierda
document.getElementById('moverIzquierda').addEventListener('click', function() {
    const container = document.querySelector('.producto-container');
    scrollPosition += scrollAmount;
    container.style.transform = `translateX(${scrollPosition}px)`;
});

//obtener el carrito desde localStorage
function obtenerCarrito() {
    let carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

//guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    let carrito = obtenerCarrito();
    carrito.push({ nombre: nombre, precio: precio });
    guardarCarrito(carrito);
    mostrarCarrito();
}

//mostrar el carrito en la página
function mostrarCarrito() {
    let carrito = obtenerCarrito();
    let carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';
    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        carritoElement.appendChild(li);
    });
}

//vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Mostrar el carrito al cargar la página
window.onload = mostrarCarrito;
