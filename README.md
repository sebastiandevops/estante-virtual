# Estante Virtual - Catálogo Web de Libros

## 📚 Descripción del Proyecto

**Estante Virtual** es una plataforma web que funciona como un catálogo virtual para la visualización, búsqueda y compra de libros. Los usuarios pueden registrarse, iniciar sesión, consultar un catálogo de más de 20 productos, realizar búsquedas básicas y avanzadas, y gestionar un carrito de compras de manera intuitiva y sencilla.

## 🎯 Objetivos del Proyecto

### Objetivo General
Crear un catálogo web virtual que facilite a los clientes registrarse, buscar y ver productos, además de manejar un carrito de compras.

### Objetivos Específicos
- Determinar las bases arquitectónicas, los roles dentro del equipo y la planificación inicial del proyecto.
- Vigilar el progreso del proyecto, administrando las modificaciones en la planificación y consolidando los informes de calidad y tiempo.
- Examinar el rendimiento completo del equipo y respaldar, a través de pruebas y un análisis reflexivo, el prototipo final del catálogo virtual.

## 📋 Información Institucional

| Campo | Descripción |
|-------|-------------|
| **Universidad** | Politécnico Grancolombiano |
| **Materia** | Desarrollo de Software en Equipo |
| **Profesora** | Margarita Avellaneda Vargas |
| **Fecha de Entrega** | 26 de mayo de 2026 |

## 👥 Equipo de Desarrollo

| # | Nombre |
|---|--------|
| 1 | Sebastian Valencia Sierra |
| 2 | Andres Felipe Huelgos Contreras |
| 3 | John Alexander Peñaloza Rojas |
| 4 | Maria Paula Rodriguez Diaz |
| 5 | Edwin Molina Vasquez |
| 6 | Simón Santtiago Parraga Fonseca |

## 🛠️ Tecnologías Utilizadas

| Área | Tecnología | Descripción |
|------|-----------|-------------|
| **Frontend** | HTML, CSS, Bootstrap, JavaScript | Interfaz de usuario responsiva y moderna |
| **Backend** | Python Flask | API REST para la lógica de negocio |
| **Base de Datos** | MySQL | Almacenamiento de datos persistente |
| **Control de Versiones** | GitHub | Gestión colaborativa del código |

## 📁 Estructura del Proyecto

```
estante-virtual/
├── frontend/                    # Aplicación frontend
│   ├── index.html              # Página principal
│   ├── css/
│   │   ├── styles.css          # Estilos personalizados
│   │   └── bootstrap.css       # Framework Bootstrap
│   ├── js/
│   │   ├── main.js             # Lógica principal
│   │   ├── auth.js             # Autenticación
│   │   ├── cart.js             # Carrito de compras
│   │   └── search.js           # Búsquedas
│   └── assets/                 # Imágenes y recursos
├── backend/                     # Aplicación backend
│   ├── app.py                  # Aplicación principal Flask
│   ├── config.py               # Configuración del proyecto
│   ├── requirements.txt         # Dependencias Python
│   ├── routes/
│   │   ├── auth.py             # Rutas de autenticación
│   │   ├── products.py         # Rutas de productos
│   │   ├── cart.py             # Rutas de carrito
│   │   └── users.py            # Rutas de usuarios
│   └── models/
│       ├── user.py             # Modelo de usuario
│       ├── product.py          # Modelo de producto
│       └── cart.py             # Modelo de carrito
├── database/
│   └── schema.sql              # Esquema de la base de datos
├── docs/                       # Documentación del proyecto
│   └── ARQUITECTURA.md         # Documento de arquitectura
├── .gitignore                  # Archivo de configuración Git
├── proyecto.txt                # Especificación del proyecto original
└── README.md                   # Este archivo
```

## 🚀 Funcionalidades Principales

### 1. **Autenticación de Usuarios**
   - Registro de nuevos usuarios
   - Inicio de sesión
   - Gestión de perfiles

### 2. **Catálogo de Productos**
   - Visualización de libros (mínimo 20 productos)
   - Detalles completos de cada producto
   - Interfaz intuitiva y amigable

### 3. **Búsqueda y Filtrado**
   - Búsquedas simples por título o autor
   - Búsquedas avanzadas por categoría, precio, año, etc.
   - Resultados en tiempo real

### 4. **Carrito de Compras**
   - Agregar y eliminar productos
   - Modificar cantidades
   - Cálculo automático de totales

## 📝 Metodologías Aplicadas

El proyecto implementa prácticas colaborativas fundamentadas en:
- **TSP (Team Software Process)**: Para la organización del equipo y distribución de roles
- **PSP (Personal Software Process)**: Para el seguimiento y calidad individual
- **Control de cambios**: Gestión de modificaciones en la planificación
- **Reportes de calidad y tiempo**: Consolidación regular del progreso

## 🔧 Configuración y Ejecución

### Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
# Servir con un servidor local (ej: Live Server en VS Code)
```

### Base de Datos
```bash
mysql -u usuario -p < database/schema.sql
```

## 📚 Documentación Adicional

Consulta la carpeta `docs/` para:
- Documento de Arquitectura del Sistema
- Diagramas UML
- Manual de Usuario
- Guías de Desarrollo

## 📞 Contacto

Para consultas sobre el proyecto, contacta con el equipo de desarrollo a través de GitHub.

---

**Última actualización**: Junio de 2026
