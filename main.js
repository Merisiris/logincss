function registrar() {
    const nomeUsuario = document.getElementById("username").value;
    const emailUsuario = document.getElementById("email").value;
    const senhaUsuario = document.getElementById("password").value;

    if (nomeUsuario === "" || emailUsuario === "" || senhaUsuario === "") { // Verifica se algum campo está vazio
        alert("Preencha todos os campos!"); // Exibe um alerta se algum campo estiver vazio
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Obtém os usuários do localStorage ou inicializa um array vazio

    if (usuarios.find(u => u.nomeUsuario === nomeUsuario)) { // Verifica se o email já está cadastrado
        alert("Usuário já cadastrado!"); // Exibe um alerta se o email já estiver cadastrado
        return;
    }

    usuarios.push({nomeUsuario, emailUsuario, senhaUsuario}); // Adiciona o novo usuário ao array
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Salva o array atualizado no localStorage

    alert("Usuário cadastrado com sucesso!"); // Exibe um alerta de sucesso
    document.getElementById("username").value = ""; // Limpa o campo de nome
    document.getElementById("email").value = ""; // Limpa o campo de email
    document.getElementById("password").value = ""; // Limpa o campo de senha

    window.location.href = "index.html";
}

function login() {  
    const emailUsuario = document.getElementById("email").value; // Obtém o email do campo de entrada
    const senhaUsuario = document.getElementById("password").value; // Obtém a senha do campo de entrada

    if (emailUsuario === "" || senhaUsuario === "") { // Verifica se algum campo está vazio
        alert("Preencha todos os campos!"); // Exibe um alerta se algum campo estiver vazio
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Obtém os usuários do localStorage ou inicializa um array vazio

    const usuarioEncontrado = usuarios.find(u => u.emailUsuario === emailUsuario && u.senhaUsuario === senhaUsuario); // Verifica se o usuário existe

    let msg = document.getElementById("mensagem"); // Obtém o elemento de mensagem

    if (usuarioEncontrado) { // Se o usuário foi encontrado
        msg.innerHTML = "Login realizado com sucesso!"; // Exibe mensagem de sucesso
        msg.style.color = "green"; // Altera a cor da mensagem para verde
        window.location.href = "success.html";
    } else { // Se o usuário não foi encontrado
        msg.innerHTML = "Email ou senha incorretos!"; // Exibe mensagem de erro
        msg.style.color = "red"; // Altera a cor da mensagem para vermelho
    } 
} 