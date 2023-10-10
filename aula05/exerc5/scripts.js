// Função para calcular o pagamento com base no código de pagamento
function calcularPagamento() {
    var valorProduto = parseFloat(document.getElementById("valorProduto").value);
    var codigoPagamento = parseInt(document.getElementById("codigoPagamento").value);

    if (isNaN(valorProduto) || isNaN(codigoPagamento)) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    var valorAPagar = 0;

    switch (codigoPagamento) {
        case 1:
            valorAPagar = valorProduto - (valorProduto * 0.10); // 10% de desconto
            break;
        case 2:
            valorAPagar = valorProduto + (valorProduto * 0.02); // 2% de juros
            break;
        case 3:
            valorAPagar = valorProduto + (valorProduto * 0.07); // 7% de juros
            break;
        default:
            alert("Código de pagamento inválido.");
            return;
    }

    alert("Valor do produto: R$" + valorProduto.toFixed(2) + "\nValor a ser pago: R$" + valorAPagar.toFixed(2));
}

// Associar a função ao botão "Calcular Pagamento"
document.getElementById("calcularPagamento").addEventListener("click", calcularPagamento);
