// Função para mostrar conteúdo em um alerta e imprimir no console
function mostrarConteudo() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    var conteudo = "Nome: " + nome + "\nSobrenome: " + sobrenome;

    alert(conteudo);
    console.log(conteudo);
}

// Função para trocar Nome e Sobrenome a cada 2 segundos
function trocarNomeSobrenome() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    document.getElementById("nome").value = sobrenome;
    document.getElementById("sobrenome").value = nome;
}

// Função para alterar a cor do texto nos campos de Nome e Sobrenome
function alterarCorTexto() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");

    nome.style.color = getRandomColor(); // Aplica uma cor aleatória
    sobrenome.style.color = getRandomColor(); // Aplica uma cor aleatória
}

// Função para apagar tudo e redefinir a cor do texto para a cor padrão
function apagarTudo() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");

    nome.value = ""; // Limpa o campo Nome
    sobrenome.value = ""; // Limpa o campo Sobrenome

    nome.style.color = ""; // Redefine a cor do texto para a cor padrão
    sobrenome.style.color = ""; // Redefine a cor do texto para a cor padrão
}

// Função para gerar uma cor aleatória
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Associar a função ao botão "Mostrar Conteúdo"
document.getElementById("botaoAlerta").addEventListener("click", mostrarConteudo);

// Associar a função ao botão "Trocar Nome/Sobrenome" com um temporizador
var intervaloTroca;
document.getElementById("botaoTrocar").addEventListener("click", function () {
    if (intervaloTroca) {
        clearInterval(intervaloTroca); // Parar o temporizador se estiver em execução
    }
    intervaloTroca = setInterval(trocarNomeSobrenome, 2000); // Trocar a cada 2 segundos
});

// Associar a função ao botão "Alterar Cor"
document.getElementById("botaoAlterarCor").addEventListener("click", alterarCorTexto);

// Associar a função ao botão "Apagar Tudo"
document.getElementById("botaoApagarTudo").addEventListener("click", apagarTudo);
