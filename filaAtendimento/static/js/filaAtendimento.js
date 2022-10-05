console.log('JavaScripts funcionando!!');

/* Teste ao pressionar botão */
var contAqui = 0;
function btnAqui(){
    var alter = document.getElementById("DIVContador");
    contAqui++;
    alter.innerHTML = "JavaScript funcionando, botão pressionado " + contAqui + " vezes!!";
}


/* Hora */
var dataAgora = new Date;
var horaAgora = document.getElementById("horaAgora");
horaAgora.innerHTML = "Atualizado em: " + dataAgora.getHours() + ':' + dataAgora.getMinutes();

