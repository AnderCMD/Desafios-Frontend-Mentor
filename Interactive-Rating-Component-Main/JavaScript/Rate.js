let CurrentRate = 0; // Variable global

function Rate(SelectRate) {
    CurrentRate = SelectRate; // Almacenar el rate en la variable

    for (let i = 1; i <= 5; i++) {
        const Button = document.getElementById("Rate" + i);
        Button.classList.remove("RateActivo");
    }

    for (let i = 1; i <= SelectRate; i++) {
        const Button = document.getElementById("Rate" + i);
        Button.classList.add("RateActivo");
    }
}

function Enviar() {
    // Guardar currentRate en localStorage
    localStorage.setItem('Rate', CurrentRate);

    // Redirigir a la nueva página
    window.location.href = 'Thanks.html'; // Cambia 'Thanks.html' a la URL de tu nueva página
}