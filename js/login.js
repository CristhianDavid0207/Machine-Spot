//Obtener el nombre del session storage
let nombre_session = sessionStorage.getItem("nombre");
let email_session = sessionStorage.getItem("email");
let id_session = sessionStorage.getItem("id");
let password_session = sessionStorage.getItem("password");
console.log(password_session);

// Poner nombre en el nav
let Nombre_Usuario = document.getElementById("Nombre_Usuario");
Nombre_Usuario.textContent = nombre_session;

// Función para ver la información de la maquina
let Info_content = document.getElementById("Info_modal");
function InfoMaquina() {
  Info_content.style.display = "flex";
}
function Info_btn_close() {
  Info_content.style.display = "none";
}

//Función para ver el perfil del usuario
let Actualizar_datos = document.getElementById("Actualizar_datos");
function Perfil() {
  Actualizar_datos.style.display = "block";
  Valor_Input();
}
function Close() {
  Actualizar_datos.style.display = "none";
  window.location.reload(); 
}

//Función para cerrar sesión(Eliminar session storage)
function Cerrar_sesion() {
  sessionStorage.removeItem("nombre");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("password");
}

let Name_Put = document.getElementById("Name_Put");
let Email_Put = document.getElementById("Email_Put");
let Password_Put = document.getElementById("Password_Put");


function Valor_Input() {
  Name_Put.value = nombre_session;
  Email_Put.value = email_session;
  Password_Put.value = password_session;
}

let putConfirmacion = document.getElementById("putConfirmacion");
function ActualizarRegistro() {
  datos_nuevos = {
    name: Name_Put.value,
    email: Email_Put.value,
    password: Password_Put.value,
  };
  
  fetch(`http://localhost:3000/registrados/${id_session}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos_nuevos),
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    putConfirmacion.innerHTML = `<p>¡Changes have been saved!</p>`;

    // Cambiar datos en el session storage
    sessionStorage.removeItem("nombre");
    sessionStorage.setItem("nombre", datos_nuevos.name);

    sessionStorage.removeItem("email");
    sessionStorage.setItem("email", datos_nuevos.email);

     sessionStorage.removeItem("password");
    sessionStorage.setItem("password", datos_nuevos.password);


  });
}

let Sure = document.getElementById("Sure");
function Llamar_Delete() {
  Actualizar_datos.style.display = "none";
  Sure.style.display = "block";
}
function sure_close() {
  Sure.style.display = "none";
  Actualizar_datos.style.display = "block";
}

// ELIMINAR DATOS
function Eliminar() {
  fetch(`http://localhost:3000/registrados/${id_session}`, {
    method: `DELETE`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    location.href = "../index.html";
    return response.json();
  });
}

let body_Sure = document.getElementById("body_Sure");
body_Sure.innerHTML = `<b><h4 style="text-align: center;">${nombre_session}, Are you sure of delete you account?</h4></b>`;


