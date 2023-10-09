document.addEventListener("DOMContentLoaded", function () {
    var calcularBtn = document.getElementById("calcularBtn");

    calcularBtn.addEventListener("click", function () {
        // Obtém os valores do nome, ano de nascimento e ano atual
        var nome = document.getElementById("nome").value;
        var anoNascimento = parseInt(document.getElementById("anoNascimento").value);
        var anoAtual = parseInt(document.getElementById("anoAtual").value);

        // Calcula a idade
        var idade = anoAtual - anoNascimento;

        // Exibe o nome e a idade na página
        var nomePessoaElement = document.getElementById("nomePessoa");
        var idadeElement = document.getElementById("idade");
        
        nomePessoaElement.textContent = nome;
        idadeElement.textContent = idade;
    });
});
