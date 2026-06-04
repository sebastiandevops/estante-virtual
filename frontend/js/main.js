// Configuración de la API
const API_URL = 'http://localhost:5000/api';

// Datos de ejemplo de productos
const productosEjemplo = [
    {
        id: 1,
        titulo: 'El Quijote',
        autor: 'Miguel de Cervantes',
        descripcion: 'La novela más famosa de la literatura española',
        precio: 25.99,
        categoria: 'ficcion',
        emoji: '🐴'
    },
    {
        id: 2,
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        descripcion: 'Una obra maestra del realismo mágico',
        precio: 22.50,
        categoria: 'ficcion',
        emoji: '✨'
    },
    {
        id: 3,
        titulo: 'Python para principiantes',
        autor: 'John Smith',
        descripcion: 'Aprende Python desde cero',
        precio: 45.00,
        categoria: 'tecnologia',
        emoji: '🐍'
    },
    {
        id: 4,
        titulo: 'Sapiens',
        autor: 'Yuval Noah Harari',
        descripcion: 'Una breve historia de la humanidad',
        precio: 35.99,
        categoria: 'noficcion',
        emoji: '🧬'
    },
    {
        id: 5,
        titulo: 'Hábitos atómicos',
        autor: 'James Clear',
        descripcion: 'Cambios pequeños, resultados extraordinarios',
        precio: 28.00,
        categoria: 'autoayuda',
        emoji: '⚛️'
    },
    {
        id: 6,
        titulo: 'Clean Code',
        autor: 'Robert C. Martin',
        descripcion: 'Una guía práctica para escribir código limpio',
        precio: 52.99,
        categoria: 'tecnologia',
        emoji: '💻'
    },
    {
        id: 7,
        titulo: 'El Príncipe',
        autor: 'Nicolás Maquiavelo',
        descripcion: 'Tratado clásico sobre el poder político',
        precio: 18.50,
        categoria: 'noficcion',
        emoji: '👑'
    },
    {
        id: 8,
        titulo: 'Cracking the Coding Interview',
        autor: 'Gayle Laakmann McDowell',
        descripcion: 'Preparación para entrevistas técnicas',
        precio: 55.00,
        categoria: 'tecnologia',
        emoji: '🔧'
    }
];

let productosActuales = [...productosEjemplo];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    configurarEventos();
    cargarCarrito();
});

// Cargar y mostrar productos
function cargarProductos() {
    const container = document.getElementById('productosContainer');
    container.innerHTML = '';

    if (productosActuales.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>No se encontraron productos.</p></div>';
        return;
    }

    productosActuales.forEach(producto => {
        const productoHTML = `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="product-card">
                    <div class="product-image">${producto.emoji}</div>
                    <div class="product-info">
                        <h5 class="product-title">${producto.titulo}</h5>
                        <p class="product-author">por ${producto.autor}</p>
                        <p class="product-description">${producto.descripcion}</p>
                        <div class="product-footer">
                            <span class="product-price">$${producto.precio.toFixed(2)}</span>
                            <button class="btn btn-primary btn-sm btn-add-cart" 
                                    onclick="agregarAlCarrito(${producto.id}, '${producto.titulo}', ${producto.precio})">
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productoHTML;
    });
}

// Configurar eventos
function configurarEventos() {
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', function(e) {
        buscarProductos(e.target.value);
    });

    // Filtros
    document.getElementById('filterCategoria').addEventListener('change', aplicarFiltros);
    document.getElementById('filterPrecio').addEventListener('change', aplicarFiltros);
    document.getElementById('sortBy').addEventListener('change', aplicarOrdenamiento);

    // Usuario
    document.getElementById('usuarioLink').addEventListener('click', function(e) {
        e.preventDefault();
        mostrarAutenticacion();
    });
}

// Búsqueda de productos
function buscarProductos(termino) {
    termino = termino.toLowerCase();
    
    productosActuales = productosEjemplo.filter(p => 
        p.titulo.toLowerCase().includes(termino) ||
        p.autor.toLowerCase().includes(termino) ||
        p.descripcion.toLowerCase().includes(termino)
    );
    
    cargarProductos();
}

// Aplicar filtros
function aplicarFiltros() {
    const categoria = document.getElementById('filterCategoria').value;
    const rango = document.getElementById('filterPrecio').value;

    productosActuales = productosEjemplo.filter(p => {
        let cumpleCategoria = !categoria || p.categoria === categoria;
        let cumplePrecio = true;

        if (rango) {
            const [min, max] = rango.split('-').map(Number);
            cumplePrecio = p.precio >= min && p.precio <= max;
        }

        return cumpleCategoria && cumplePrecio;
    });

    cargarProductos();
}

// Ordenamiento
function aplicarOrdenamiento() {
    const orden = document.getElementById('sortBy').value;

    switch (orden) {
        case 'titulo':
            productosActuales.sort((a, b) => a.titulo.localeCompare(b.titulo));
            break;
        case 'precio-asc':
            productosActuales.sort((a, b) => a.precio - b.precio);
            break;
        case 'precio-desc':
            productosActuales.sort((a, b) => b.precio - a.precio);
            break;
    }

    cargarProductos();
}

// Mostrar modal de autenticación
function mostrarAutenticacion() {
    const authModal = new bootstrap.Modal(document.getElementById('authModal'));
    authModal.show();
}
