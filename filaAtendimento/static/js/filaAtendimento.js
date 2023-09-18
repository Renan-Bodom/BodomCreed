console.log('JavaScripts funcionando!!');

/* Teste ao pressionar botão */
var contAqui = 0;
function btnAqui(){
    var alter = document.getElementById("DIVContador");
    contAqui++;
    alter.innerHTML = "JavaScript funcionando, botão pressionado " + contAqui + " vezes!!";
}