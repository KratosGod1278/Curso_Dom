//Esto esta de prueba para el curso de JavaScript

/*estamos viendo los tipos de datos en JavaScript, como el tipo de dato BigInt, String, Boolean y Number. y destingue las mayusculas*/



//number
let numero = 42;
console.log(numero);
console.log(typeof numero);

console.log("Hola mundo");


//variablelet nombre = "Oscar";
let nombre = "Oscar";
console.log(nombre);
console.log(typeof nombre);

//variable const
const PI = 3.14159;
console.log(PI);
console.log(typeof PI);

//variable var
var edad = 30;
console.log(edad);
console.log(typeof edad);

//variable let
let ciudad = "Madrid";
console.log(ciudad);
console.log(typeof ciudad);

//variable variable var es global o local dependiendo del contexto, mientras que let y const son de bloque. 
// var permite redeclarar la variable, mientras que let y const no lo permiten. const se utiliza para declarar constantes, es decir, valores que no pueden cambiar después de ser asignados.
//En resumen, var es una forma más antigua de declarar variables en JavaScript, 
// mientras que let y const son formas más modernas y recomendadas para declarar variables debido a su comportamiento más predecible y seguro.


var camelcase = "Esto es camelCase";
console.log(camelcase);
console.log(typeof camelcase);

let nose;

{
    nose = "Esto es un bloque de código";
   
}

const constante = "Esto es una constante";
console.log(constante);
console.log(typeof constante);

//Operadores aritméticos
let a = 10;
let b = 5;  
console.log(a + b); // Suma
console.log(a - b); // Resta


//operadores de comparacion
let edad2 = 12;

if (edad2 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//operadores asignacion
let x = 10;
x += 5; // Equivalente a x = x + 5
console.log(x); // Imprime 15   



/*estos operadores funcionan para aumentar o disminuir el valor de una variable en 1. El operador de incremento (++) aumenta el valor de la variable en 1, mientras que el operador de decremento (--) disminuye el valor de la variable en 1. Estos operadores pueden ser utilizados tanto en su forma prefija como en su forma postfija, lo que afecta el orden de evaluación en expresiones más complejas.*/

//contenadacion de cadenas
let saludo = "Hola";
let nombreUsuario = "Oscar";
let mensaje = saludo + " " + nombreUsuario;
console.log(mensaje); // Imprime "Hola Oscar!"


//forma moderna con backsticks
let producto = "laptop";
let precio = 800;
console.log(`El precio de la ${producto} es ${precio} dólares`); // Imprime "El precio de la laptop es 800 dólares

/*En este ejemplo, se utiliza la sintaxis de template literals (con backticks) para crear una cadena que incluye variables. Las variables se insertan dentro de la cadena utilizando la sintaxis ${variable}, lo que hace que el código sea más legible y fácil de escribir en comparación con la concatenación tradicional con el operador +.*/    
