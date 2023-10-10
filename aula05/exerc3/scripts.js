// Função para comparar dois números inteiros
function compararNumeros() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite números inteiros válidos.");
        return;
    }

    if (numero1 > numero2) {
        alert("O primeiro número (" + numero1 + ") é maior que o segundo número (" + numero2 + ").");
    } else if (numero2 > numero1) {
        alert("O segundo número (" + numero2 + ") é maior que o primeiro número (" + numero1 + ").");
    } else {
        alert("Os números são iguais: " + numero1);
    }
}

// Associar a função ao botão "Comparar Números"
document.getElementById("compararNumeros").addEventListener("click", compararNumeros);
