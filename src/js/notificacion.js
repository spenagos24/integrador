var down = false;

function toggleNotifi() {
    var box = document.getElementById('box');  // Asegúrate de que box está definido correctamente
    if (down) {
        box.style.height  = '0px';
        box.style.opacity = 0;
        box.style.display = 'none';  // Oculta la caja
        down = false;
    } else {
        box.style.height  = 'auto';
        box.style.opacity = 1;
        box.style.display = 'block';  // Muestra la caja
        down = true;
    }
}
