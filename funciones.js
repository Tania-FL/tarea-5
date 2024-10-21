// Función para realizar la conversión
function convertir() {
    let valor = parseFloat(document.getElementById("valor").value);
    let unidadEntrada = document.getElementById("unidadEntrada").value;
    let unidadSalida = document.getElementById("unidadSalida").value;

    let resultado;

    // Llamamos a la función de conversión según la unidad de entrada y salida
    switch (unidadEntrada) {
        case "metros":
            resultado = convertirLongitud(valor, "metros", unidadSalida);
            break;
        case "kilometros":
            resultado = convertirLongitud(valor, "kilometros", unidadSalida);
            break;
        case "millas":
            resultado = convertirLongitud(valor, "millas", unidadSalida);
            break;
        case "gramos":
            resultado = convertirPeso(valor, "gramos", unidadSalida);
            break;
        case "kilogramos":
            resultado = convertirPeso(valor, "kilogramos", unidadSalida);
            break;
        case "libras":
            resultado = convertirPeso(valor, "libras", unidadSalida);
            break;
        case "litros":
            resultado = convertirVolumen(valor, "litros", unidadSalida);
            break;
        case "mililitros":
            resultado = convertirVolumen(valor, "mililitros", unidadSalida);
            break;
        case "galones":
            resultado = convertirVolumen(valor, "galones", unidadSalida);
            break;
        default:
            resultado = "Unidad no válida";
    }

    document.getElementById("resultado").textContent = resultado;
}

// Función para convertir unidades de longitud
function convertirLongitud(valor, unidadEntrada, unidadSalida) {
    let metros;

    // Convertimos la unidad de entrada a metros
    switch (unidadEntrada) {
        case "metros":
            metros = valor;
            break;
        case "kilometros":
            metros = valor * 1000;
            break;
        case "millas":
            metros = valor * 1609.34;
            break;
        default:
            return "Unidad de longitud no válida";
    }

    // Convertimos de metros a la unidad de salida
    switch (unidadSalida) {
        case "metros":
            return metros;
        case "kilometros":
            return metros / 1000;
        case "millas":
            return metros / 1609.34;
        default:
            return "Unidad de longitud no válida";
    }
}

// Función para convertir unidades de peso
function convertirPeso(valor, unidadEntrada, unidadSalida) {
    let gramos;

    // Convertimos la unidad de entrada a gramos
    switch (unidadEntrada) {
        case "gramos":
            gramos = valor;
            break;
        case "kilogramos":
            gramos = valor * 1000;
            break;
        case "libras":
            gramos = valor * 453.592;
            break;
        default:
            return "Unidad de peso no válida";
    }

    // Convertimos de gramos a la unidad de salida
    switch (unidadSalida) {
        case "gramos":
            return gramos;
        case "kilogramos":
            return gramos / 1000;
        case "libras":
            return gramos / 453.592;
        default:
            return "Unidad de peso no válida";
    }
}

// Función para convertir unidades de volumen
function convertirVolumen(valor, unidadEntrada, unidadSalida) {
    let litros;

    // Convertimos la unidad de entrada a litros
    switch (unidadEntrada) {
        case "litros":
            litros = valor;
            break;
        case "mililitros":
            litros = valor / 1000;
            break;
        case "galones":
            litros = valor * 3.78541;
            break;
        default:
            return "Unidad de volumen no válida";
    }

    // Convertimos de litros a la unidad de salida
    switch (unidadSalida) {
        case "litros":
            return litros;
        case "mililitros":
            return litros * 1000;
        case "galones":
            return litros / 3.78541;
        default:
            return "Unidad de volumen no válida";
    }
}