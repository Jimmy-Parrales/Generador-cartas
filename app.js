window.addEventListener("load",function(){    
    let boton=document.getElementById("aceptar");
    


    boton.addEventListener("click", function(){

        let cartas=["♥","♦","♣","♠"];
        let numerocartas=["A","2","3","4","5","6","7","8","9","10","K","Q","K"];

        mostrarCarta=cartas[Math.floor(Math.random()*cartas.length)];
        mostrarCaracter=numerocartas[Math.floor(Math.random()*numerocartas.length)];

        console.log("se ejecuto boton");
    
        let caja=document.querySelector(".cuadro");
        caja.style.background="#FF2D00";

        document.getElementById("MostrarArriba").innerHTML=mostrarCarta;
        document.getElementById("MostrarAbajo").innerHTML=mostrarCarta;
        document.getElementById("caracteres").innerHTML=mostrarCaracter;
    });
    });
