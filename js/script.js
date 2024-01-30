// document.addEventListener('DOMContentLoaded', function () {
//     var botonMostrar = document.getElementById('mostrarModal');
//     var modal = document.getElementById('miModal');
//     var botonCerrar = document.getElementById('cerrarModal');

//     // Mostrar el modal al hacer clic en el botón
//     botonMostrar.addEventListener('click', function () {
//         modal.style.display = 'block';
//     });

//     // Ocultar el modal al hacer clic en la "X"
//     botonCerrar.addEventListener('click', function () {
//         modal.style.display = 'none';
//     });

//     // Ocultar el modal si se hace clic fuera de él
//     window.addEventListener('click', function (event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });

function TraerInformacion(){
    var modal = document.getElementById('miModal');
    var botonCerrar = document.getElementById('cerrarModal');

    modal.style.display = 'block';

    botonCerrar.onclick = function (){
        modal.style.display = 'none';
    }
}




function iniciarsesion(){
    alert('estas dando click')

    var modal = document.getElementById('modal');
    var botonCerrar = document.getElementById('close');

    modal.style.display = 'block';

    botonCerrar.onclick = function (){
        modal.style.display = 'none';
    }
    document.getElementById("toRegister").onclick = function() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
    }
    
    document.getElementById("toLogin").onclick = function() {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    }
}


function inicio(){
    let email = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;


    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));

}