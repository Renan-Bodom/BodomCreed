/* Hora */
var dataAgora = new Date;
var horaAgora = document.getElementById("horaAgora");
horaAgora.innerHTML = "Hora fila: " + dataAgora.getHours() + ':' + dataAgora.getMinutes();