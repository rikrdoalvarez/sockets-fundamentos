var socket = io();

// ON : escucha información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// EMIT : Envía información
socket.emit('enviarMensaje', {
    usuario: 'Ricardo',
    mensaje: 'Hola mundo'
}, function(resp) {
    //console.log('Se disparó el callback');
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});