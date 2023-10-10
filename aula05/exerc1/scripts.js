// Função para calcular o valor das parcelas
function calcularParcelas() {
    var valorTotal = parseFloat(document.getElementById("valorTotal").value);
    var quantidadeParcelas = parseInt(document.getElementById("quantidadeParcelas").value);

    var valorParcela = 0;

    switch (quantidadeParcelas) {
        case 1:
            valorParcela = valorTotal;
            break;
        case 2:
            valorParcela = valorTotal * 1.03; // 3% de juros
            break;
        case 4:
            valorParcela = valorTotal * 1.07; // 7% de juros
            break;
        default:
            document.getElementById("resultado").textContent = "Quantidade de parcelas não suportada.";
            return;
    }

    var valorParcelaFormatado = (valorParcela / quantidadeParcelas).toFixed(2);
    document.getElementById("resultado").textContent = "Valor das parcelas: R$" + valorParcelaFormatado + " cada.";
}

// Associar a função ao botão "Calcular Parcelas"
document.getElementById("calcularParcelas").addEventListener("click", calcularParcelas);
