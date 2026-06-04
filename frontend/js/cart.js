// Gestión del carrito de compras

let carrito = [];

// Cargar carrito del localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCountCarrito();
    }
}

// Agregar producto al carrito
function agregarAlCarrito(id, titulo, precio) {
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: id,
            titulo: titulo,
            precio: precio,
            cantidad: 1
        });
    }
    
    guardarCarrito();
    mostrarNotificacion(`${titulo} agregado al carrito`);
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCountCarrito();
}

// Actualizar contador del carrito
function actualizarCountCarrito() {
    const count = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('carritoCount').textContent = count;
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    cargarCarrito();
}

// Actualizar cantidad
function actualizarCantidad(id, cantidad) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        if (cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            item.cantidad = cantidad;
            guardarCarrito();
        }
    }
}

// Calcular total del carrito
function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

// Vaciar carrito
function vaciarCarrito() {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        carrito = [];
        guardarCarrito();
        mostrarNotificacion('Carrito vaciado');
    }
}

// Procesar compra
async function procesarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    if (!usuarioActual) {
        alert('Debes iniciar sesión para realizar una compra');
        return;
    }

    try {
        // Aquí irá la llamada real a la API
        // const response = await fetch(`${API_URL}/pedidos`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify({
        //         items: carrito,
        //         total: calcularTotal()
        //     })
        // });

        alert(`Compra realizada exitosamente. Total: $${calcularTotal().toFixed(2)}`);
        vaciarCarrito();
    } catch (error) {
        console.error('Error al procesar compra:', error);
        alert('Error al procesar la compra');
    }
}

// Cargar carrito al iniciar
document.addEventListener('DOMContentLoaded', cargarCarrito);
