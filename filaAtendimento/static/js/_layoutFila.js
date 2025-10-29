/* Hora */
var dataAgora = new Date;
var horaAgora = document.getElementById("horaAgora");
horaAgora.innerHTML = "Hora fila: " + dataAgora.getHours() + ':' + dataAgora.getMinutes();

/* Set current year dynamically */
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});