// Variável para armazenar o texto
var textoArmazenado = "";

// Evento ao carregar a página
window.onload = function () {
    // Solicitar entrada de texto e armazená-la
    textoArmazenado = prompt("Digite um texto:");
};

// Evento de clique no botão "Inserir Texto"
document.getElementById("btnInserir").addEventListener("click", function () {
    document.getElementById("paragrafo1").textContent = textoArmazenado;
});

// Evento de clique no botão "Copiar Texto"
document.getElementById("btnCopiar").addEventListener("click", function () {
    var paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(function (paragrafo) {
        paragrafo.textContent = textoArmazenado;
    });
});

// Evento de clique no botão "Apagar Texto"
document.getElementById("btnApagar").addEventListener("click", function () {
    var paragrafos = document.querySelectorAll("p");
    var indiceAleatorio = Math.floor(Math.random() * paragrafos.length);
    var paragrafoAlvo = paragrafos[indiceAleatorio];

    if (paragrafoAlvo) {
        paragrafoAlvo.textContent = "";
    }
});

// Evento de clique no botão "Mostrar Alerta"
document.getElementById("btnAlerta").addEventListener("click", function () {
    alert(textoArmazenado);
});

// Evento de clique no botão "Alterar Cor do Texto"
document.getElementById("btnAlterarCor").addEventListener("click", function () {
    var paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(function (paragrafo) {
        paragrafo.style.color = getRandomColor(); // Aplica uma cor aleatória
    });
});

// Evento de clique no botão "Apagar Todos os Parágrafos"
document.getElementById("btnApagarTodos").addEventListener("click", function () {
    var paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(function (paragrafo) {
        paragrafo.textContent = "";
    });
});

// Função para gerar uma cor aleatória
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
