function calcularSoma() {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);

    var soma = numero1 + numero2 + numero3;

    
    document.getElementById("resultado").textContent = soma;
}