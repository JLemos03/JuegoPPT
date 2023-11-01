document.getElementById("piedra").addEventListener("click", function(){
    PPT(1)
})
document.getElementById("papel").addEventListener("click", function(){
    PPT(2)
})
document.getElementById("tijera").addEventListener("click", function(){
    PPT(3)
})
function PPT (juego){
resultado =""
    let pc = Math.floor(Math.random()*3)+1;
    // Casos empate 
    if (juego == pc){
        if(juego == 1 && pc ==1){
            console.log("elegiste piedra " + juego)
            console.log("la maquina eligio piedra " + pc)
            console.log ("empate") 
            resultado = "Empate"
        }else if(juego == 2 && pc ==2){
            console.log("elegiste papel " + juego )
            console.log("la maquina eligio papel " + pc)
            console.log ("empate")
            resultado = "Empate"
        }else if(juego == 3 && pc ==3){
            console.log("elegiste tijera " + juego)
            console.log("la maquina eligio tijera " + pc)
            console.log ("empate")
            resultado = "Empate"
        }
       
    }// Casos en los que piedra gana PC
    else if(juego == 3 && pc ==1 ){
        console.log("elegiste Tijera s" + juego)
        console.log("la maquina eligio piedra " + pc)
        console.log ("Gana la maquina")
        resultado = "Gana la máquina"
    }// casos en los que papel gana PC
    else if(juego == 1 && pc ==2 ){
        console.log("elegiste piedra " + juego)
        console.log("la maquina eligio papel " + pc)
        console.log ("Gana la maquina")
        resultado = "Gana la máquina"
    }// casos en los que tijera gana PC
    else if(juego == 2 && pc ==3 ){
        console.log("elegiste papel " + juego)
        console.log("la maquina eligio tijera " + pc)
        console.log ("Gana la maquina")
        resultado = "Gana la máquina"
    }// Casos en los que piedra gana jugador
    else if(juego == 1 && pc ==3 ){
        console.log("elegiste piedra " + juego)
        console.log("la maquina eligio trijera " + pc)
        console.log ("Gana la jugador")
        resultado = "Gana el jugador";
    }// casos en los que papel gana 
    else if(juego == 2 && pc ==1 ){
        console.log("elegiste papel " + juego)
        console.log("la maquina eligio piedra " + pc)
        console.log ("Gana la jugador")
        resultado = "Gana el jugador";
    }// casos en los que tijera gana 
    else if(juego == 3 && pc ==2 ){
        console.log("elegiste tijera " + juego)
        console.log("la maquina eligio tijera " + pc)
        console.log ("Gana la jugador")
        resultado = "Gana el jugador";
    }

    document.getElementById("resultado").textContent = `Elegiste ${eleccion(juego)}. La máquina eligió ${eleccion(pc)}. 
    Elección: ${resultado}`
    
}

function eleccion(v){
    switch (v) {
        case 1:
            return "Piedra";
        case 2:
            return "Papel";
        case 3:
            return "Tijera";
        default:
            return "Desconocido";
    }
}

