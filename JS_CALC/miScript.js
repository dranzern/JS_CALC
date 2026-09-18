
function mostrarResultado(resultado) {
    document.getElementById("campo3").value = resultado;
}


function sumar() {
    let valor1 = +document.getElementById("campo1").value;
    let valor2 = +document.getElementById("campo2").value;
    let operacion = valor1 + valor2;

    mostrarResultado(operacion);
} 

function restar() {
    let valor1 = +document.getElementById("campo1").value;
    let valor2 = +document.getElementById("campo2").value;
    let operacion = valor1 - valor2;

    mostrarResultado(operacion);
}

function multiplicar() {
    let valor1 = +document.getElementById("campo1").value;
    let valor2 = +document.getElementById("campo2").value;
    let operacion = valor1 * valor2;

    mostrarResultado(operacion);
}

function dividir() {
    let valor1 = +document.getElementById("campo1").value;
    let valor2 = +document.getElementById("campo2").value;
    let operacion = valor1 / valor2;

    mostrarResultado(operacion);
}

function raiz() {
    let valor2 = +document.getElementById("campo2").value;
    let operacion = Math.sqrt(valor2);

    mostrarResultado(operacion);
}

function potencia() {
    let valor1 = +document.getElementById("campo1").value;
    let valor2 = +document.getElementById("campo2").value;
    let operacion = Math.pow(valor1 , valor2);

    mostrarResultado(operacion);
}

function valorAbsoluto() {
     let valor2 = +document.getElementById("campo2").value;
     let operacion = Math.abs(valor2);

    mostrarResultado(operacion);
}

function numeroAleatorio() {
    let valor1 = +document.getElementById("campo1").value;
    let valor2 = +document.getElementById("campo2").value;
    let operacion = Math.random()*(valor2 - valor1 + 1) + valor1;

    mostrarResultado(operacion);
}

function redondeo() {
    let valor3 = +document.getElementById("campo3").value;
    let operacion = Math.round(valor3);

    mostrarResultado(operacion);
}

function redondeoAbajo() {
    let valor3 = +document.getElementById("campo3").value;
    let operacion = Math.floor(valor3);

    mostrarResultado(operacion);
}

function redondeoArriba() {
    let valor3 = +document.getElementById("campo3").value;
    let operacion = Math.ceil(valor3);

    mostrarResultado(operacion);
}
