function checkNumber(){
    
    let number = document.getElementById('input1').value;
    if(number < 10) window.alert("Insuficiente")
    else if(number >= 10 && number < 15 ) window.alert("Bom")
    else if(number > 15) window.alert("Muito Bom")
}