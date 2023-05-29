// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)
// 3) Crear un programa que convierta la temperatura de grados Celsius a Faranheit y viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere convertir.

function convertirTemperatura(temperatura, unidad) {
    if (unidad === "C") {
      let fahrenheit = (temperatura * 9/5) + 32;
        return `${temperatura}°C es igual a ${fahrenheit}°F.`;
    } else if (unidad === "F") {
        let celsius = (temperatura - 32) * 5/9;
        return `${temperatura}°F es igual a ${celsius}°C.`;
    } else {
        return "Unidad de temperatura inválida.";
    }
}

let temperatura = parseFloat(prompt("3) Ingrese la temperatura:"));
let unidad = prompt("3.a) Ingrese la unidad de temperatura (C para Celsius, F para Fahrenheit):");
console.log(convertirTemperatura(temperatura, unidad));
// alert(convertirTemperatura(temperatura, unidad));