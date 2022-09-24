console.log('JavaScripts funcionando!!');


var contAqui = 0;
function btnAqui(){
    var alter = document.getElementById("DIVContador");
    contAqui++;
    alter.innerHTML = "Parabéns, você apertou o botão " + contAqui + " vezes!!";
}



/* Hora */
var dataAgora = new Date;
var horaAgora = document.getElementById("horaAgora");
horaAgora.innerHTML = "Atualizado em: " + dataAgora.getHours() + ':' + dataAgora.getMinutes();