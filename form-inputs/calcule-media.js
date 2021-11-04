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