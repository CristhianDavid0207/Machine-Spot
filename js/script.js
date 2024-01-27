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