//validar si una persona es mayor de edad o no, dependiendo de la edad que ingrese el usuario
/*
let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Tienes" + edad + " años, eres mayor de edad");
} 
else {
    alert("Tienes " + edad + " años, eres menor de edad");
}
*/

//verificar 2 numeros y mostrar cual es el mayor
/*
let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
if (numero1 > numero2) {

  alert("El numero mayor es: " + numero1);

} else if (numero2 > numero1) {

  alert("El numero mayor es: " + numero2);

} else {

  alert("Los numeros son iguales");
}
*/

//verificar si un numero es positivo, negativo o cero
/*
let numero = prompt("Ingrese un numero");
if (numero > 0) {
    alert("El numero " + numero + " es positivo ");
} else if (numero < 0) {
    alert("El numero " + numero + " es negativo");
} else {
    alert("El numero " + numero + " es cero");
}
    */

/*

//Verificar si un año es bisiesto
let año = prompt("Ingrese un año");
if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    alert("El año " + año + " es bisiesto");
} else {
    alert("El año " + año + " no es bisiesto");
}
*/

/*
// dada una nota numerica (0-10), asignamos una categoria(Exelente(9-10), Bueno(7-8.9), Regular(5-6.9),reprobado(<5))
let nota = prompt("Ingrese una nota (0-10)");
if (nota >= 9 && nota <= 10) {
    alert("La nota " + nota + " es excelente");
} else if (nota >= 7 && nota < 9) {
    alert("La nota " + nota + " es buena");
} else if (nota >= 5 && nota < 7) {
    alert("La nota " + nota + " es regular");
} else if (nota < 5 && nota >= 0) {
    alert("La nota " + nota + " es reprobada");
} else {
    alert("Nota inválida. Ingrese una nota entre 0 y 10.");
}

*/

/*6.	Dependiendo del tipo de cliente (oro, plata o bronce), se aplicará un descuento específico en el precio total. (SWITCH)*/
/*
let tipoCliente = prompt("Ingrese el tipo de cliente (oro, plata o bronce)");
let precioTotal = 100;
switch (tipoCliente.toLowerCase()) {
  case "oro":
    precioTotal *= 0.8; // Descuento del 20%
    alert("Cliente oro. Precio total con descuento: " + precioTotal);
    break;
    case "plata":
    precioTotal *= 0.9; // Descuento del 10%
    alert("Cliente plata. Precio total con descuento: " + precioTotal);
    break;
        case "bronce":
    precioTotal *= 0.95; // Descuento del 5%
    alert("Cliente bronce. Precio total con descuento: " + precioTotal);
    break;
    default:
    alert("Tipo de cliente inválido. No se aplicará ningún descuento. Precio total: " + precioTotal);
}
*/
//7.	Ejercicio 7: Identificar el día de la semana (switch)
//Explicación: Según un número (1 al 7), mostramos el día de la semana correspondiente. Si el número no está en ese rango, indicamos que es inválido.
// let numeroDia = prompt("Ingrese un número del 1 al 7 para identificar el día de la semana");
// switch (numeroDia) {
//   case "1": 
//     alert("El día de la semana es: Lunes");
//     break;
//     case "2":
//     alert("El día de la semana es: Martes");
//     break;
//      case "3":
//     alert("El día de la semana es: Miercoles");
//     break;
//      case "4":
//     alert("El día de la semana es: Jueves");
//     break;
//      case "5":
//     alert("El día de la semana es: VIernes");
//     break;
//      case "6":
//     alert("El día de la semana es: Sabado");
//     break;
//      case "7":
//     alert("El día de la semana es: Domingo");
//     break;
//   default:
//     alert("Número inválido. Ingrese un número del 1 al 7.");
// }

/*8.	Validar ingreso a un sistema (if-else)
Explicación: Si el usuario y la contraseña coinciden con la base de datos, mostramos «Acceso permitido», de lo contrario «Acceso denegado».
*/

let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");
if (usuario === "admin" && contraseña === "1234") {
  alert("Acceso permitido");
} else {
  alert("Acceso denegado");
}
