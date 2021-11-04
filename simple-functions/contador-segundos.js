function contadorSegundos(){

    let contador = document.getElementById("contador");
    let segundos = 0;
    setInterval(() => contador.innerHTML = segundos++, 1000);

}