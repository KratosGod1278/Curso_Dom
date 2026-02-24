//Según la operación solicitada (suma, resta, multiplicación, división), se realiza el cálculo correspondiente y se devuelve el resultado. (Switch)
/*
let operacion = prompt(
  "Ingrese la operación que desea realizar (suma, resta, multiplicación, división):",
);
let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let resultado;
switch (operacion) {
  case "suma":
    resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
    break;
  case "resta":
    resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
    break;
  case "multiplicación":
    resultado = num1 * num2;
    alert("El resultado de la multiplicación es: " + resultado);
    break;
  case "división":
    if (num2 !== 0) {
      resultado = num1 / num2;
      alert("El resultado de la división es: " + resultado);
    } else {
      alert("Error: No se puede dividir entre cero.");
    }
    break;
  default:
    alert(
      "Operación no válida. Por favor, ingrese una operación válida (suma, resta, multiplicación o división).",
    );
}
*/

//Se trata de escribir un script que diga si un número es par o es impar. Recordemos que un número es par si al dividirlo por 2 da como resto 0.
/*
let numero = Number(prompt("Ingrese un número:"));
if (numero % 2 === 0) {
  alert("El número es par.");
} else {
  alert("El número es impar.");
}
*/
//Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos. Mostrar el promedio de la cantidad de dinero que tienen entre los tres.
/*
let juan = Number(prompt("Ingrese la cantidad de dinero que tiene Juan:"));
let david = juan / 2;
let jose = (juan + david) / 2;
let promedio = (juan + david + jose) / 3;
alert(
  "El promedio de la cantidad de dinero que tienen entre los tres es: " +
    promedio,
);
*/

/*Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario.
Práctica 4*/
/*
let num1 = Number(
  prompt("Ingrese el primer número entero (entre 1 y 10):"),
);
let num2 = Number(
  prompt("Ingrese el segundo número entero (entre 1 y 10):"),   
);
let num3 = Number(
  prompt("Ingrese el tercer número entero (entre 1 y 10):"),
);
let promedio = (num1 + num2 + num3) / 3;
let resultado = promedio > 5 ? true : false;
alert("¿El promedio es mayor a 5? " + resultado);
*/