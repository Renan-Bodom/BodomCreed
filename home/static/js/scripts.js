console.log('JavaScripts funcionando!');

// Set current year dynamically
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

/* Teste ao pressionar botão */
var contAqui = 0;
function btnAqui(){
    var alter = document.getElementById("DIVContador");
    contAqui++;
    alter.innerHTML = "Parabéns, você apertou o botão " + contAqui + " vezes!";
}