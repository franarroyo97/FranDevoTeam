
//alert("hola Mundo");

$(document).ready(function () {
    var menuDesplegado = false;
    ocultarMensjaeCokies();
    efectoHoverPaginaPrincipal();
    ocultarBarraDeNavegacionMovil();
    controlDeFondo()
    $(".botonMovil").click(function () { mostrarMenu(); })

    function mostrarMenu() {
        if (menuDesplegado == false) {
            $(".barraDeNavegacionMovil").css("display", "block");
            menuDesplegado = true;
        }
        else {
            $(".barraDeNavegacionMovil").css("display", "none");

            menuDesplegado = false;
        }
    }
    function ocultarMensjaeCokies() {
        var micookie = Cookies.get('micookie');

        if (micookie == 'yainiciado') {
            cookie1.style.display = 'none';

        }
    }
    function efectoHoverPaginaPrincipal() {
        $(".targetas").mouseover(function () {
            $(this).css("max-width", "100%");
        })
        $(".targetas").mouseout(function () {
            $(this).css("max-width", "50%");
        })
        
    }
    function ocultarBarraDeNavegacionMovil() {
        $("main").mouseover(function () {
            $(".barraDeNavegacionMovil").hide();
        })
        $("section").mouseover(function () {
            $(".barraDeNavegacionMovil").hide();
        })

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
function controlDeFondo() {
    var pathname = window.location.pathname;
    switch (pathname) {
        case "/contacto":
            $("body").css("background-image", "none");
            $("body").css("background-color", "#FAFAFA");
            break;
        case "/":
            $("body").css("background-image", "url('../images/FondoPrincipal.jpg')");
            

            break;

    }
    console.log(pathname);
}