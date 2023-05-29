// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)
// 2) Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si el número es primo o no.

function esPrimo(numero) {
    if (numero <= 1) {
        return "El número no es primo.";
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
        return "El número no es primo.";
        }
    }
    return "El número es primo.";
}

let numero = parseInt(prompt("2) Ingrese un número:"));
console.log(esPrimo(numero));
// alert(esPrimo(numero));

// Aclaración: los números primos son aquellos que tienen exactamente 4 divisores, 2 positivos y 2 negativos y que son mayores que 1.