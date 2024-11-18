var box = document.getElementById('box');
var down = false;

function toggleNotifi() {
    if (down) {
        box.style.display = 'none';  // Oculta la caja de notificaciones
        box.style.opacity = 0;
        down = false;
    } else {
        box.style.display = 'block';  // Muestra la caja de notificaciones
        setTimeout(function() {
            box.style.opacity = 1; // Aplica opacidad con un pequeño retraso
        }, 10); // Para que la transición de opacidad se vea bien
        down = true;
    }
}
