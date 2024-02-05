//Obtener el nombre del session storage
let nombre_session = sessionStorage.getItem("nombre");
let id_session = sessionStorage.getItem("id");
let Nombre_Usuario = document.getElementById("Nombre_Usuario");
Nombre_Usuario.textContent=nombre_session;


// Función para ver la información de la maquina
let Info_content = document.getElementById("Info_modal");
function InfoMaquina() {
    Info_content.style.display = "flex"
}
function Info_btn_close(){
    Info_content.style.display = "none";
}

//Función para ver el perfil del usuario
let Actualizar_datos = document.getElementById("Actualizar_datos");
function Perfil(){
    Actualizar_datos.style.display = "block";
}
function Close(){
    Actualizar_datos.style.display = "none";
    console.log(id_session);
}

//Función para cerrar sesión(Eliminar session storage)
function Cerrar_sesion(){
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("id");
}
