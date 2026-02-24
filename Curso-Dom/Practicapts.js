//aplicar descuento del 10% a una compra
let precio = prompt("ingrese el precio del producto");
let descuento = prompt("ingrese el descuento a aplicar (en porcentaje)");
let precioFinal = precio - (precio * (descuento / 100));   
alert("el precio final del producto es: " + precioFinal);

//un programa que calcule al usuario dos numeros y luego muestre todos los numeros primos que hay entre eso dos numeros, incluyendo los extremos
//POR EL MOMENTO NO SE VA A REALIZAR ESTE EJERCICIO

/*Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de
alojamiento, alimentación y entretenimiento.*/

let dias = Number(prompt("ingrese la cantidad de dias del viaje"));
let costoAlojamiento = Number(prompt("ingrese el costo del alojamiento por dia"));
let costoAlimentacion = Number(prompt("ingrese el costo de la alimentacion por dia"));
let costoEntretenimiento = Number(prompt("ingrese el costo del entretenimiento por dia"));
let costoTotal = (costoAlojamiento + costoAlimentacion + costoEntretenimiento) * dias;
alert("el costo total del viaje es: " + costoTotal);

