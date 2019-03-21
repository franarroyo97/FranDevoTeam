
//alert("hola Mundo");

$(document).ready(function () {
    var menuDesplegado = false;
    var micookie = Cookies.get('micookie');

    if (micookie == 'yainiciado') {
        cookie1.style.display = 'none';
     
    }
    $(".botonMovil").click(function () { mostrarMenu(); })

    function mostrarMenu() {
        if (menuDesplegado == false) {

            var micookie = Cookies.get('micookie');
            alert(micookie);
            $(".barraDeNavegacionMovil").css("display", "block");
            menuDesplegado = true;
        }
        else {
            $(".barraDeNavegacionMovil").css("display", "none");

            menuDesplegado = false;
        }
    }
});
function controlcookies() {
    // si variable no existe se crea (al clicar en Aceptar)

    localStorage.controlcookie = (localStorage.controlcookie || 0);

    localStorage.controlcookie++; // incrementamos cuenta de la cookie
    cookie1.style.display = 'none'; // Esconde la política de cookies
    Cookies.set('micookie', 'yainiciado'); //cookie de sesión
    Cookies.set('micookie2', 'yainiciado', { expires: 1 }); //cookie que caduca a los 5 días
}