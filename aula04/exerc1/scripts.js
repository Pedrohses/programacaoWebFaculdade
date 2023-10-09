// Usando getElementById
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// Usando getElementsByClassName
var cl1Paragraphs = document.getElementsByClassName("cl1");
var cl2Paragraphs = document.getElementsByClassName("cl2");

// Usando addEventListener para alterar o texto de parágrafos
btn1.addEventListener("click", function () {
    cl1Paragraphs[0].textContent = "Texto alterado pelo Botão 1";
});

btn2.addEventListener("click", () => {
    cl1Paragraphs[1].textContent = "Texto alterado pelo Botão 2";
});

// Usando getElementsByTagName
var btn3 = document.getElementsByTagName("button")[2];
var btn4 = document.getElementsByTagName("button")[3];

// Função com parâmetro e retorno
function alterarTexto(paragrafo, texto) {
    paragrafo.textContent = texto;
}

// Usando addEventListener com função declarada
btn3.addEventListener("click", function () {
    alterarTexto(cl2Paragraphs[0], "Texto alterado pelo Botão 3");
});

// Usando addEventListener com função de flecha
btn4.addEventListener("click", () => {
    alterarTexto(cl2Paragraphs[1], "Texto alterado pelo Botão 4");
});

// Restaurar texto original
function restaurarTextoOriginal() {
    cl1Paragraphs[0].textContent = "Parágrafo 1 (cl1)";
    cl1Paragraphs[1].textContent = "Parágrafo 2 (cl1)";
    cl2Paragraphs[0].textContent = "Parágrafo 3 (cl2)";
    cl2Paragraphs[1].textContent = "Parágrafo 4 (cl2)";
}

// Temporizador para restaurar texto original a cada 2 segundos
setInterval(restaurarTextoOriginal, 2000);

// Restaurar texto original
function restaurarTextoOriginal() {
    cl1Paragraphs[0].textContent = "Parágrafo 1 (cl1)";
    cl1Paragraphs[1].textContent = "Parágrafo 2 (cl1)";
    cl2Paragraphs[0].textContent = "Parágrafo 3 (cl2)";
    cl2Paragraphs[1].textContent = "Parágrafo 4 (cl2)";
}

// Trocar todos os textos de uma vez
function trocarTodosTextos() {
    cl1Paragraphs[0].textContent = "Novo Texto 1 (cl1)";
    cl1Paragraphs[1].textContent = "Novo Texto 2 (cl1)";
    cl2Paragraphs[0].textContent = "Novo Texto 3 (cl2)";
    cl2Paragraphs[1].textContent = "Novo Texto 4 (cl2)";
}

// Trocar a cor do texto
function trocarCorTexto() {
    var paragrafos = document.querySelectorAll("p"); // Seleciona todos os parágrafos

    // Itera sobre todos os parágrafos e troca a cor do texto
    paragrafos.forEach(function (paragrafo) {
        paragrafo.style.color = getRandomColor(); // Utiliza uma função para gerar uma cor aleatória
    });
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

// Temporizador para restaurar texto original a cada 2 segundos
setInterval(restaurarTextoOriginal, 2000);

// Selecionar o botão "Trocar Textos" e adicionar evento de clique
var trocarTextosBtn = document.getElementById("trocarTextos");
trocarTextosBtn.addEventListener("click", trocarTodosTextos);

// Selecionar o botão "Trocar Cor" e adicionar evento de clique
var trocarCorBtn = document.getElementById("trocarCor");
trocarCorBtn.addEventListener("click", trocarCorTexto);


