// Função para verificar se um número é par ou ímpar
function verificarParOuImpar() {
    var numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert("O número " + numero + " é PAR.");
    } else {
        alert("O número " + numero + " é ÍMPAR.");
    }
}

// Associar a função ao botão "Verificar Par ou Ímpar"
document.getElementById("verificarNumero").addEventListener("click", verificarParOuImpar);
