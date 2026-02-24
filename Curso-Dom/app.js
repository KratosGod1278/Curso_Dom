// ====== SELECCIÓN DE ELEMENTOS DEL DOM ======

// document: representa todo el documento HTML
// getElementById: selecciona un elemento por su id
const titulo = document.getElementById("titulo");
console.log(titulo);
// querySelector: selecciona el primer elemento que coincida con el selector CSS
const texto = document.querySelector(".texto");
console.log(texto);
// Selecciona el input por su id
const inputTexto = document.getElementById("inputTexto");
console.log(inputTexto);
// Selecciona la lista <ul>
const lista = document.getElementById("lista");
console.log(lista);
// Selección de botones
const btnCambiar = document.getElementById("btnCambiar");
console.log(btnCambiar);
const btnColor = document.getElementById("btnColor");
console.log(btnColor);
const btnAlerta = document.getElementById("btnAlerta");
console.log(btnAlerta);
const btnRedirigir = document.getElementById("btnRedirigir");
console.log(btnRedirigir);

// ====== EVENTOS Y MANIPULACIÓN DEL DOM ======

// addEventListener: escucha eventos del usuario
// "click": evento cuando se hace clic
btnCambiar.addEventListener("click", () => {

    // textContent: cambia el texto interno del elemento
    texto.textContent = inputTexto.value;

    // createElement: crea un nuevo elemento HTML
    const li = document.createElement("li");

    // Asigna texto al nuevo <li>
    li.textContent = inputTexto.value;

    // appendChild: agrega el elemento hijo al padre (<ul>)
    lista.appendChild(li);
});


// Evento para cambiar estilos CSS desde JS
btnColor.addEventListener("click", () => {

    // style: permite modificar estilos CSS
    titulo.style.color = "blue";

// Cambia el peso del texto
    texto.style.fontWeight = "bold";
});


// ====== BOM (Browser Object Model) ======

// alert: muestra una ventana emergente del navegador
btnAlerta.addEventListener("click", () => {
    alert("Esto es una alerta usando el BOM");
});


// window: representa la ventana del navegador
// location.href: cambia la URL actual
btnRedirigir.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
});
