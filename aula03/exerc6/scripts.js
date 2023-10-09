document.addEventListener("DOMContentLoaded", function () {
    var calcularBtn = document.getElementById("calcularBtn");

    calcularBtn.addEventListener("click", function () {
        
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseFloat(document.getElementById("altura").value);

        var area = (base * altura) / 2;

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = "A área do triângulo é: " + area.toFixed(2);
    });
});
