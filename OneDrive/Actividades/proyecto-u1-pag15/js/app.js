// Función para mostrar los movimientos en pantalla
function mostrarMovimientos() {
    const lista = document.getElementById('lista-movimientos');
    lista.innerHTML = '';

    const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];

    movimientos.forEach(mov => {
        const li = document.createElement('li');
        li.textContent = `${mov.tipo} - $${mov.monto} - ${mov.descripcion}`;
        lista.appendChild(li);
    });
}

// Evento del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const monto = document.getElementById('monto').value;
    const tipo = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value;

    if (monto && tipo && descripcion) {
        const movimiento = {
            monto: parseFloat(monto),
            tipo: tipo,
            descripcion: descripcion,
            fecha: new Date().toISOString()
        };

        // Guardar en localStorage
        let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
        movimientos.push(movimiento);
        localStorage.setItem('movimientos', JSON.stringify(movimientos));

        alert('Movimiento guardado exitosamente');

        // Limpiar formulario
        document.getElementById('formulario').reset();

        // Actualizar lista en pantalla
        mostrarMovimientos();
    } else {
        alert('Por favor, complete todos los campos');
    }
});

// Mostrar movimientos al cargar la página
mostrarMovimientos();