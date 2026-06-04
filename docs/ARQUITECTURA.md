# Arquitectura del Proyecto Estante Virtual

## 1. Descripción General

Estante Virtual es una aplicación web de comercio electrónico de libros con una arquitectura de tres capas:
- **Frontend**: Interfaz de usuario
- **Backend**: API REST y lógica de negocio
- **Base de Datos**: Almacenamiento persistente

## 2. Arquitectura de Capas

### 2.1 Capa de Presentación (Frontend)
- **Tecnologías**: HTML5, CSS3, Bootstrap, JavaScript
- **Ubicación**: `/frontend`
- **Responsabilidades**:
  - Interfaz de usuario
  - Interacción con el usuario
  - Consumo de API REST
  - Gestión de estado del cliente (localStorage)

### 2.2 Capa de Negocio (Backend)
- **Tecnologías**: Python 3, Flask
- **Ubicación**: `/backend`
- **Responsabilidades**:
  - Procesamiento de solicitudes HTTP
  - Validación de datos
  - Lógica de negocio
  - Autenticación y autorización
  - Gestión de base de datos

### 2.3 Capa de Datos
- **Tecnologías**: MySQL 8.0
- **Ubicación**: `/database`
- **Responsabilidades**:
  - Almacenamiento de datos
  - Integridad referencial
  - Optimización de consultas

## 3. Componentes Principales

### Frontend
```
frontend/
├── index.html           # Página principal
├── css/
│   └── styles.css       # Estilos personalizados
├── js/
│   ├── main.js          # Lógica principal
│   ├── auth.js          # Autenticación
│   ├── cart.js          # Carrito de compras
│   └── search.js        # Búsquedas
└── assets/              # Recursos (imágenes, iconos)
```

### Backend
```
backend/
├── app.py               # Aplicación principal
├── config.py            # Configuración
├── requirements.txt     # Dependencias
├── routes/
│   ├── auth.py          # Autenticación
│   ├── products.py      # Productos
│   ├── cart.py          # Carrito
│   └── users.py         # Usuarios
└── models/
    ├── user.py          # Modelo Usuario
    ├── product.py       # Modelo Producto
    └── cart.py          # Modelo Carrito
```

## 4. Flujo de Datos

```
Usuario
   │
   ├─> Frontend (HTML/JS)
   │       │
   │       └─> API REST (Flask)
   │           │
   │           ├─> Validación
   │           ├─> Lógica de Negocio
   │           │
   │           └─> Base de Datos (MySQL)
   │
   └─> Respuesta JSON
```

## 5. Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/logout` - Cerrar sesión

### Productos
- `GET /api/products` - Listar productos
- `GET /api/products/<id>` - Obtener producto
- `GET /api/products/search` - Buscar productos
- `GET /api/categories` - Listar categorías

### Carrito
- `GET /api/cart` - Obtener carrito
- `POST /api/cart/items` - Agregar al carrito
- `PUT /api/cart/items/<id>` - Actualizar cantidad
- `DELETE /api/cart/items/<id>` - Eliminar del carrito

### Pedidos
- `POST /api/orders` - Crear pedido
- `GET /api/orders` - Listar pedidos del usuario
- `GET /api/orders/<id>` - Obtener detalle del pedido

## 6. Modelo de Base de Datos

### Tablas Principales

#### Usuarios
```sql
- id (PK)
- nombre
- email (UNIQUE)
- contraseña (hashed)
- fecha_registro
- activo
```

#### Productos
```sql
- id (PK)
- titulo
- autor
- descripcion
- precio
- stock
- categoria_id (FK)
- fecha_publicacion
- isbn
- imagen_url
```

#### Carritos
```sql
- id (PK)
- usuario_id (FK)
- fecha_creacion
```

#### Carrito Items
```sql
- id (PK)
- carrito_id (FK)
- producto_id (FK)
- cantidad
- precio_unitario
```

#### Pedidos
```sql
- id (PK)
- usuario_id (FK)
- total
- estado
- fecha_pedido
```

## 7. Seguridad

- **Autenticación**: JWT (JSON Web Tokens)
- **Contraseñas**: Hash con bcrypt
- **CORS**: Configurado para permitir acceso desde el frontend
- **Validación**: Validación de entrada en backend
- **SQL Injection**: Uso de prepared statements

## 8. Performance

- **Índices**: En campos frecuentemente consultados
- **Caché**: Implementación en cliente con localStorage
- **Paginación**: Para listados largos
- **Lazy Loading**: Imágenes bajo demanda

## 9. Escalabilidad

- **Separación de capas**: Facilita modificaciones independientes
- **Modularidad**: Componentes reutilizables
- **API RESTful**: Permite integración con otros clientes
- **Base de datos**: Preparada para replicación y sharding

## 10. Metodologías de Desarrollo

- **TSP (Team Software Process)**: Organización del equipo
- **PSP (Personal Software Process)**: Seguimiento individual
- **Git Flow**: Gestión de ramas y versiones
- **Code Review**: Revisión de código antes de merge

---

Documento preparado para el proyecto Estante Virtual - Politécnico Grancolombiano
