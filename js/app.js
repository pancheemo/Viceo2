// Función para convertir el precio de un juego en dólares a pesos argentinos
function convertirPrecioEnDolaresAPesos(precioDolares, valorDolar, impuestos) {
    let precioEnPesos = precioDolares * valorDolar;
    impuestos.forEach(impuesto => {
        precioEnPesos *= (1 + impuesto / 100);
    });
    return precioEnPesos;
}

// Función para formatear el número en formato monetario "$ xx.xxx,xx"
function formatearMoneda(cantidad) {
    // Redondear a dos decimales
    let cantidadRedondeada = cantidad.toFixed(2);
    // Dividir en parte entera y decimal
    let [entero, decimal] = cantidadRedondeada.split('.');
    // Añadir puntos como separadores de miles
    entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // Formatear el resultado final
    return `$ ${entero},${decimal}`;
}

// Función para manejar la conversión y mostrar el resultado
function convertir() {
    const precioDolares = parseFloat(document.getElementById('precioDolares').value);
    if (isNaN(precioDolares) || precioDolares <= 0) {
        alert("Por favor, ingrese un precio válido.");
        return;
    }
    
    const valorDolar = 917.74; // Valor del dólar en pesos argentinos
    const impuestos = [30, 100, 25]; // Impuestos en porcentaje

    const precioFinalEnPesos = convertirPrecioEnDolaresAPesos(precioDolares, valorDolar, impuestos);
    document.getElementById('resultado').textContent = formatearMoneda(precioFinalEnPesos);
}

// Asocia la función de conversión al botón
document.getElementById('convertirBtn').addEventListener('click', convertir);
