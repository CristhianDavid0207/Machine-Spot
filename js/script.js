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

/*function TraerInformacion(){
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

}*/

//FUNCIONES DEL LOGIN
//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES
// Función que cambia de inicio de sesión a registro
function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(){
    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "400px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function PasarRegistro(){
    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "400px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function PasarLogin(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

// Función para abrir el cuestionario
let Login_modal = document.getElementById("Login_modal");
function Ingreso() {
    Login_modal.style.display = "block";    
}

// Función para cerrar el cuestionario
function SalirLogin(){
    Login_modal.style.display = "none";
}

// Fetch
function login() {
  let email = document.getElementById("email") 
  let password = document.getElementById("password");

    fetch("http://localhost:3000/registrados")
        .then((r) => r.json())
        .then((d) => {
            let resultado = d.filter(function (element) {
                return element.correo == email.value;
            });
            if (resultado.length > 0) {
            
                if(resultado[0].password == password.value){
                    console.log("Todo muy bien")
                }else{
                    console.log("usuario o contraseña invalidos¡")
                }
            } else {
                console.log("No hay coincidencia")
    }
    });
}

login();