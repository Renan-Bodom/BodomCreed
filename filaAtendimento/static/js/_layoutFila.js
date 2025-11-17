/* Set current year dynamically */
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

/* Hora */
var dataAgora = new Date();
var horaAgora = document.getElementById("horaAgora");
var minutos = dataAgora.getMinutes().toString().padStart(2, '0');
horaAgora.innerHTML = "Hora fila: " + dataAgora.getHours() + ':' + minutos;