function formValidation(){

    var nome = form.name;
    var idade = form.age;
    var email = form.email;
    var senha = form.pass;

    if(nome.value == "") alert("Nome nao informado");
    if(nome.value.length < 3) alert("Insira um nome válido")

    if(idade.value == "") alert("Idade não informada")

    else if(idade.value < 18 || idade.value > 60) alert("Aceitamos idades entre 18 e 60 anos")
    if(email.value == "") alert("E-mail nao informado");

    if(senha.value == "") alert("Senha não informada")
    if(senha.value.length < 6) alert("Sua senha precisa ter pelo menos 6 digitos")


}