function verpassword() {
    var tipo = document.getElementById("txtpassword");
    tipo.type = (tipo.type === "password") ? "text" : "password";
}

function validateForm() {
    var usuario = document.getElementById("txtusuario").value;
    var password = document.getElementById("txtpassword").value;

    if (usuario === 'Andres' && password === '12345') {
        alert("Bienvenido, Andres!");
        return true;  
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false; 
    }
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "Index.html";
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.dataset.placeholder = this.placeholder; 
        this.placeholder = ''; 
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.placeholder = this.dataset.placeholder;
        }
    });
});
