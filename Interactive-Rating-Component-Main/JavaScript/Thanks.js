let Rate = localStorage.getItem('Rate'); // Recuperar currentRate de localStorage

window.onload = function() {
    let Rate = localStorage.getItem('Rate'); // Recuperar currentRate de localStorage
    let RateElement = document.querySelector('.Rate-Obtain h2'); // Selecciona el elemento donde quieres mostrar el rate
    RateElement.textContent = 'You selected ' + Rate + ' out of 5'; // Muestra el rate
}