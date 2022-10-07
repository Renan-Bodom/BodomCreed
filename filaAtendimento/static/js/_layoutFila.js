/* Hora */
var dataAgora = new Date;
var horaAgora = document.getElementById("horaAgora");
horaAgora.innerHTML = "Atualizado em: " + dataAgora.getHours() + ':' + dataAgora.getMinutes();