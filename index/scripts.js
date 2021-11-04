function contadorMinutos(){

    let mostraSegundos = document.getElementById("segundos");
    let mostraMinutos = document.getElementById("minutos");
    let minutos = 0;
    let segundos = 0;
}

function contadorSegundos(){

    let contador = document.getElementById("contador");
    let segundos = 0;
    setInterval(() => contador.innerHTML = segundos++, 1000);

}

function calculaMedia(){
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    var convertido1 = parseFloat(nota1);
    var convertido2 = parseFloat(nota2);
    var convertido3 = parseFloat(nota3);
    var convertido4 = parseFloat(nota4);

    let mediaprox = (convertido1+convertido2+convertido3+convertido4)/4;
    console.log(mediaprox);

    document.getElementById('mediaprox').innerHTML = mediaprox;
}

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

function getRandomNumber(){
    window.alert(Math.floor(Math.random() * (50 - 0 + 1)) + 0)
}

function openWindow(){
    window.alert("Mensagem de alerta")
}

function openNewWindow(){
    window.open("http://www.imdb.com")
}

function windowTitle(){
    document.title = "Novo Titulo"
}

function activeInput(){
    window.alert("Começou a digitar")
}

function checkNumber(){
    
    let number = document.getElementById('input1').value;
    if(number < 10) window.alert("Insuficiente")
    else if(number >= 10 && number < 15 ) window.alert("Bom")
    else if(number > 15) window.alert("Muito Bom")
}

function checkInput2(input){

    input = document.getElementById('input2').value;

    for(let i = 0; i<input; i++){
        console.log("mensagem" + input)
    }


}