document.addEventListener("DOMContentLoaded", function () {
    var calcularBtn = document.getElementById("calcularBtn");

    calcularBtn.addEventListener("click", function () {
        
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);
        var nota3 = parseFloat(document.getElementById("nota3").value);

        
        var media = (nota1 + nota2 + nota3) / 3;

        
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = "A média das notas é: " + media.toFixed(2);
    });
});
