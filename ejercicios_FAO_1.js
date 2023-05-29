// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)
// 1) Crear un programa que pida al usuario que ingrese un número y le devuelva un mensaje indicando si el número es positivo, negativo o si es 0.

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}

let numero = parseInt(prompt("1) Ingrese un número:"));
console.log(determinarSigno(numero));
// alert(determinarSigno(numero));
