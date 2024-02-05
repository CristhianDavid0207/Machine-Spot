/* traductor */
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "es" },
    "google_translate_element"
  );
}

//FUNCIONES DEL LOGIN
//Ejecutando funciones
document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES
// Función que cambia de inicio de sesión a registro
function anchoPage() {
  if (window.innerWidth > 767) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {
  if (window.innerWidth > 767) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 767) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "400px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

function PasarRegistro() {
  if (window.innerWidth > 767) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "400px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

function PasarLogin() {
  if (window.innerWidth > 767) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
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


// Fetch
let email = document.getElementById("email_LogIn");
let password = document.getElementById("password_LogIn");
let Validacion_LogIn = document.getElementById("Validacion_LogIn"); 
  function Log_In() {
    fetch("http://localhost:3000/registrados")
    .then((r) => r.json())
    .then((d) => {
      let resultado = d.filter(function (element) {
        return element.email == email.value;   
    });
    if (resultado.length > 0) {
      if(resultado[0].password == password.value){
        console.log("Todo muy bien");
        sessionStorage.setItem("nombre", resultado[0].name);
        sessionStorage.setItem("id", resultado[0].id);
        window.location.href = './login.html'

      } else {
        console.log("usuario o contraseña invalidos¡");
         Validacion_LogIn.innerHTML = `<p>¡Hay un error! vuelve a intentarlo</p>`;
      }
    }else{
      console.log("No hay coincidencia");
      Validacion_LogIn.innerHTML = `<p>¡El usuario no es existente!</p>`;
    }
    });
  }
  

  // METODO POST(CREACION DE USUARIOS)
    // Traer los id de los inputs del Sign up
  let Name_SignUp = document.getElementById("Name_SignUp");
  let Email_SignUp = document.getElementById("Email_SignUp");
  let Password_SignUp = document.getElementById("Password_SignUp");
  function Sign_Up() {
    
    Usuario_Nuevo = {
      name: Name_SignUp.value,
      email: Email_SignUp.value,
      password: Password_SignUp.value,
    };
    if (Name_SignUp.value != "" && Email_SignUp.value != "" && Password_SignUp.value != "") {
      
      fetch("http://localhost:3000/registrados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Usuario_Nuevo),
      })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        sessionStorage.setItem("nombre", Name_SignUp.value);
        sessionStorage.setItem("id", data.id);
        location.href = "./login.html";
        return data.Usuario_Nuevo;
      });
      
    } else {
      console.log("Completar todos los campos!");
      
      if(Name_SignUp.value == ""){
        Name_SignUp.classList.remove("is-valid");
        Name_SignUp.classList.add("is-invalid");   
      }else{
        Name_SignUp.classList.remove("is-invalid");
        Name_SignUp.classList.add("is-valid");  
      }
      
      if(Email_SignUp.value == ""){
        Email_SignUp.classList.remove("is-valid");
        Email_SignUp.classList.add("is-invalid");
      }else{
        Email_SignUp.classList.remove("is-invalid");
        Email_SignUp.classList.add("is-valid");  
      }
      
      if(Password_SignUp.value == ""){
        Password_SignUp.classList.remove("is-valid");
        Password_SignUp.classList.add("is-invalid");
      }else{
        Password_SignUp.classList.remove("is-invalid");
        Password_SignUp.classList.add("is-valid");  
      }
    }
  }
  

  // Función para cerrar el cuestionario
  function SalirLogin() {
    Login_modal.style.display = "none";

    // Dejar el input en blanco después de cerrar el login
    Name_SignUp.value = "";
    Email_SignUp.value = "";
    Password_SignUp.value = "";

    email.value = "";
    password.value = "";
    
    Validacion_LogIn.innerHTML = `<p></p>`;
  }























