// document.body="";

// document.querySelectorAll();

// document.querySelector();

// document.getElementById();

// document.getElementsByClassName();


//Ejercicios de Funciones

// Función esMayorEdad
function esMayorEdad(edad) {
    console.log(edad);
    let esMayor = edad >= 18;
    return esMayor;
}

// Función calcularAreaRectangulo
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}

// Función esPalindromo
function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    return cadena === cadena.split('').reverse().join('');
}

// Función generarNumeroAleatorio
function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
}

console.log(esMayorEdad(20)); // true
console.log(esMayorEdad(16)); // false

console.log(calcularAreaRectangulo(5, 8)); // 40

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("hola")); // false

console.log(generarNumeroAleatorio()); // Número aleatorio entre 1 y 10


//Ejercicios de Arreglos
// Función obtenerSuma
function obtenerSuma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

// Función obtenerPares
function obtenerPares(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

// Función obtenerPromedioPonderado
function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
        throw new Error("Los arreglos de notas y pesos deben tener la misma longitud");
    }
    let sumaNotas = 0;
    let sumaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i] * pesos[i];
        sumaPesos += pesos[i];
    }
    return sumaNotas / sumaPesos;
}

// Función obtenerMaximo
function obtenerMaximo(arreglo) {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}


console.log(obtenerSuma([1, 2, 3, 4, 5])); // 15

console.log(obtenerPares([1, 2, 3, 4, 5])); // [2, 4]

console.log(obtenerPromedioPonderado([75, 80, 90], [0.3, 0.3, 0.4])); // 84

console.log(obtenerMaximo([10, 5, 8, 20, 15])); // 20


//Ejercicios de Objetos:

// Objeto producto
let producto = {
    nombre: "Producto 1",
    precio: 1000,
    cantidad: 2
};

// Función calcularTotal
function calcularTotal(objeto) {
    return objeto.precio * objeto.cantidad;
}

// Objeto persona
const persona = {
    nombre: "John Travolta",
    edad: 45,
    profesion: "Actor"
};

// Función presentarPersona
function presentarPersona(objeto) {
    console.log(`Nombre: ${objeto.nombre}`);
    console.log(`Edad: ${objeto.edad}`);
    console.log(`Profesión: ${objeto.profesion}`);
}

// Función esMayorEdad
function esMayorEdadObjeto(objeto) {
    return objeto.edad >= 18;
}

console.log(calcularTotal(producto)); // 2000

presentarPersona(persona);
// Salida en la consola:
// Nombre: John Travolta
// Edad: 45
// Profesión: Actor

console.log(esMayorEdadObjeto(persona)); // true
