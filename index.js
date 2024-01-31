function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    // Simples validação de exemplo
    if (username === "usuario" && password === "senha") {
        // Login bem-sucedido
        errorMsg.style.color = "green";
        errorMsg.textContent = "Login bem-sucedido!";
    } else {
        // Login falhou
        errorMsg.style.color = "red";
        errorMsg.textContent = "Credenciais inválidas. Tente novamente.";
    }
}
