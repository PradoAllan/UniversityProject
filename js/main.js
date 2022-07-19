function validar() {
    var nome  = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
    var telefone = document.getElementById("telefone").value;

    var nome_erro = document.getElementById("nome-erro");
    var email_erro = document.getElementById("email-erro");
    var comentario_erro = document.getElementById("comentario-erro");
    var telefone_erro = document.getElementById("telefone-erro")

    if (nome.length == 0) {
        nome_erro.innerHTML = "O nome não foi preenchido";
    } else {
        nome_erro.innerHTML = "";
    }

    if (email.length == 0) {
        email_erro.innerHTML = "O email não foi preenchido!";
    } else {
        email_erro.innerHTML = "";
    }

    if (comentario.length == 0) {
        comentario_erro.innerHTML = "Digite sua mensagem!";
    } else {
        comentario_erro.innerHTML = "";
    }

    if (telefone.length == 0) {
        telefone_erro.innerHTML = "O telefone não foi preenchido!";
    } else {
        telefone_erro.innerHTML = "";
    }
}