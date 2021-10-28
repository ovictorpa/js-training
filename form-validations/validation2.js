function formValidation(){

    var nome = document.getElementById('name').value;
    var idade = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;

    if(nome== ""){
        alert("Nome nao informado");
        nome.focus();
    }
    if(nome.length < 3){ 
        alert("Insira um nome válido")
        nome.focus();
    }
    if(idade == ""){ 
        alert("Idade não informada")
        idade.focus();
    }
    else if(idade < 18 || idade.value > 60){
         alert("Aceitamos idades entre 18 e 60 anos")
         idade.focus();
    }

    if(email == ""){
        alert("E-mail nao informado");
        email.focus();
    }

    if(senha == ""){ 
        alert("Senha não informada")
        senha.focus();
    }
    if(senha.length < 6) {
        alert("Sua senha precisa ter pelo menos 6 digitos")
        senha.focus();
    }

}