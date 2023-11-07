const formulario = document.getElementById('meuformulario');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (!isNaN(campoA) && !isNaN(campoB)) {
        if (campoB > campoA) {
            alert("Formulário válido: B é maior que A.");
        } else if(campoB < campoA) {
            alert ("Formulário inválido: B deve ser maior que A.");
        }
        else {
            alert ("Os números são iguais.");
    }
}
    else {
        alert ("Por favor, insira números válidos.");
    }
});
