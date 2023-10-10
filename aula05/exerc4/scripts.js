// Função para calcular a média e determinar o conceito
function calcularMediaEConceito() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Por favor, digite notas válidas entre 0 e 10.");
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    var conceito = "";

    if (media >= 6) {
        conceito = "APROVADO";
    } else if (media >= 3) {
        conceito = "EXAME";
    } else {
        conceito = "REPROVADO";
    }

    document.getElementById("resultado").textContent = "Média: " + media.toFixed(2) + " - Conceito: " + conceito;
}

// Associar a função ao botão "Calcular Média"
document.getElementById("calcularMedia").addEventListener("click", calcularMediaEConceito);
