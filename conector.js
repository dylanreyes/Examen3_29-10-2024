const crearBtn = document.getElementById('crear');
const eliminarBtn = document.getElementById('eliminar');

crearBtn.addEventListener('click', () => {
    const usuario = document.getElementById('usuario').value;
    // Aquí realizarías una petición al servidor para crear el usuario
    fetch('/crearUsuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Actualizar la interfaz según la respuesta del servidor
    });
});

eliminarBtn.addEventListener('click', () => {
    const usuario = document.getElementById('usuario').value;
    // Aquí realizarías una petición al servidor para eliminar el usuario

});