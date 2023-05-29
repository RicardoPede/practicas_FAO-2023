// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)
// 4) Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la palabra “total” devolverle el total de la compra.

function calcularTotalCompra() {
    let productos = [];
    let precio = "";

    while (precio != "total") {
        precio = prompt("4) Ingrese el precio del producto (o escriba 'total' para obtener el total de la compra):");
        console.log(precio);
        if (precio != "total") {
            productos.push(parseFloat(precio));
        }
    }

    let total = productos.reduce((a, b) => a + b, 0);
    return `El total de la compra es: $${total.toFixed(2)}`;
}

console.log(calcularTotalCompra());
// alert(calcularTotalCompra());
