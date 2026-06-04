// Funciones de búsqueda avanzada

// Búsqueda simple
function busquedaSimple(termino) {
    termino = termino.toLowerCase();
    return productosEjemplo.filter(p => 
        p.titulo.toLowerCase().includes(termino) ||
        p.autor.toLowerCase().includes(termino)
    );
}

// Búsqueda avanzada
function busquedaAvanzada(criterios) {
    return productosEjemplo.filter(p => {
        let cumple = true;

        if (criterios.titulo) {
            cumple = cumple && p.titulo.toLowerCase().includes(criterios.titulo.toLowerCase());
        }

        if (criterios.autor) {
            cumple = cumple && p.autor.toLowerCase().includes(criterios.autor.toLowerCase());
        }

        if (criterios.categoria) {
            cumple = cumple && p.categoria === criterios.categoria;
        }

        if (criterios.precioMin) {
            cumple = cumple && p.precio >= parseFloat(criterios.precioMin);
        }

        if (criterios.precioMax) {
            cumple = cumple && p.precio <= parseFloat(criterios.precioMax);
        }

        return cumple;
    });
}

// Autocompletado de búsqueda
function obtenerSugerencias(termino) {
    termino = termino.toLowerCase();
    const sugerencias = new Set();

    productosEjemplo.forEach(p => {
        if (p.titulo.toLowerCase().includes(termino)) {
            sugerencias.add(p.titulo);
        }
        if (p.autor.toLowerCase().includes(termino)) {
            sugerencias.add(p.autor);
        }
    });

    return Array.from(sugerencias).slice(0, 5);
}

// Búsqueda por rango de precios
function buscarPorRango(precioMin, precioMax) {
    return productosEjemplo.filter(p => 
        p.precio >= precioMin && p.precio <= precioMax
    );
}

// Búsqueda por categoría
function buscarPorCategoria(categoria) {
    return productosEjemplo.filter(p => p.categoria === categoria);
}

// Búsqueda con múltiples criterios
function busquedaMultiple(termino, categoria, precioMin, precioMax) {
    return productosEjemplo.filter(p => {
        const cumpleBusqueda = !termino || 
            p.titulo.toLowerCase().includes(termino.toLowerCase()) ||
            p.autor.toLowerCase().includes(termino.toLowerCase());
        
        const cumpleCategoria = !categoria || p.categoria === categoria;
        
        const cumplePrecio = (!precioMin || p.precio >= precioMin) &&
                            (!precioMax || p.precio <= precioMax);
        
        return cumpleBusqueda && cumpleCategoria && cumplePrecio;
    });
}
