-- Crear base de datos
CREATE DATABASE IF NOT EXISTS estante_virtual;
USE estante_virtual;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla de categorías
CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT
);

-- Tabla de productos (libros)
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    categoria_id INT NOT NULL,
    fecha_publicacion DATE,
    isbn VARCHAR(20) UNIQUE,
    imagen_url VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabla de carrito
CREATE TABLE carritos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de items del carrito
CREATE TABLE carrito_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (carrito_id) REFERENCES carritos(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Tabla de pedidos
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    estado ENUM('pendiente', 'procesando', 'completado', 'cancelado') DEFAULT 'pendiente',
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de items del pedido
CREATE TABLE pedido_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Índices para mejorar el rendimiento
CREATE INDEX idx_usuario_email ON usuarios(email);
CREATE INDEX idx_producto_categoria ON productos(categoria_id);
CREATE INDEX idx_carrito_usuario ON carritos(usuario_id);
CREATE INDEX idx_carrito_items_carrito ON carrito_items(carrito_id);
CREATE INDEX idx_pedido_usuario ON pedidos(usuario_id);
CREATE INDEX idx_pedido_items_pedido ON pedido_items(pedido_id);

-- Insertar categorías de ejemplo
INSERT INTO categorias (nombre, descripcion) VALUES
('Ficción', 'Novelas y literatura de ficción'),
('No Ficción', 'Libros informativos y de referencia'),
('Educación', 'Libros educativos y académicos'),
('Tecnología', 'Libros sobre programación y tecnología'),
('Autoayuda', 'Libros de desarrollo personal');
