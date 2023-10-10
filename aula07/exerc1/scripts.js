document.addEventListener("DOMContentLoaded", function () {
    // Referências aos elementos HTML
    var quantidadeInput = document.getElementById("quantidade");
    var criarTabelaButton = document.getElementById("criarTabela");
    var tabelaContainer = document.getElementById("tabelaContainer");

    // Função para criar a tabela
    function criarTabela() {
        let quantidade = parseInt(quantidadeInput.value);

        if (quantidade > 0) {
            // Desabilita o botão enquanto a tabela está sendo criada
            criarTabelaButton.disabled = true;
            criarTabelaButton.value = "Criando Tabela...";

            // Cria uma tabela
            var table = document.createElement("table");

            // Cria as linhas e células da tabela
            for (var i = 0; i < quantidade; i++) {
                var row = table.insertRow(i);
                let datetime = new Date();
                let milisec = datetime.getMilliseconds();
                let randomValue = Math.random().toFixed(5); // Valor aleatório com 5 dígitos de precisão

                var cell1 = row.insertCell(0);
                cell1.innerHTML = milisec;

                var cell2 = row.insertCell(1);
                cell2.innerHTML = randomValue;
            }

            // Limpa o conteúdo anterior do container e adiciona a nova tabela
            tabelaContainer.innerHTML = "";
            tabelaContainer.appendChild(table);

            // Habilita o botão novamente
            criarTabelaButton.disabled = false;
            criarTabelaButton.value = "Criar Tabela";
        }
    }

    // Associar a função ao botão "Criar Tabela"
    criarTabelaButton.addEventListener("click", criarTabela);
});
