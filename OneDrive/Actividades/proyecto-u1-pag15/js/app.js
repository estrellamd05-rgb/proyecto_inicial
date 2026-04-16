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

        // Guardar en localStorage (simple almacenamiento)
        let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
        movimientos.push(movimiento);
        localStorage.setItem('movimientos', JSON.stringify(movimientos));

        alert('Movimiento guardado exitosamente');

        // Limpiar formulario
        document.getElementById('formulario').reset();
    } else {
        alert('Por favor, complete todos los campos');
    }
});