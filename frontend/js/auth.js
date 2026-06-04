// Gestión de autenticación

// Estado de autenticación
let usuarioActual = null;

// Configurar evento del formulario de autenticación
document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleLogin);
    }
});

// Manejar inicio de sesión
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Aquí irá la llamada real a la API
        // const response = await fetch(`${API_URL}/auth/login`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({email, password})
        // });
        
        // Por ahora, simulamos el login
        usuarioActual = {
            id: 1,
            email: email,
            nombre: email.split('@')[0]
        };

        // Guardar en localStorage
        localStorage.setItem('usuario', JSON.stringify(usuarioActual));
        
        // Actualizar UI
        actualizarUIUsuario();
        
        // Cerrar modal
        bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
        
        // Limpiar formulario
        document.getElementById('authForm').reset();
        
        alert('¡Sesión iniciada correctamente!');
    } catch (error) {
        console.error('Error en login:', error);
        alert('Error al iniciar sesión');
    }
}

// Manejar logout
function handleLogout() {
    usuarioActual = null;
    localStorage.removeItem('usuario');
    actualizarUIUsuario();
    alert('Sesión cerrada');
}

// Actualizar UI según estado de usuario
function actualizarUIUsuario() {
    const usuarioLink = document.getElementById('usuarioLink');
    
    if (usuarioActual) {
        usuarioLink.textContent = `👤 ${usuarioActual.nombre}`;
        usuarioLink.href = '#';
        usuarioLink.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    } else {
        usuarioLink.textContent = '👤 Mi Cuenta';
        usuarioLink.href = '#';
    }
}

// Cargar usuario guardado al iniciar
function cargarUsuarioGuardado() {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        usuarioActual = JSON.parse(usuarioGuardado);
        actualizarUIUsuario();
    }
}

// Llamar al cargar la página
document.addEventListener('DOMContentLoaded', cargarUsuarioGuardado);
