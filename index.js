let turn = "";
let p1 = "X"; 
let p2 = "O";
let proximoCuadrante;
let empezoJuego = false;
function jugadores(){
    p1 = document.getElementById("fplayer").value
    p2 = document.getElementById("splayer").value
}
function jugar(cuadrado){
    empezoJuego = true;
    var id = cuadranteActual(cuadrado);
    let queBotonEl = document.getElementById(id);
    if( queBotonEl.innerText == ""){
        if ( turn == ""){
            turn = p1
            queBotonEl.innerText = p1
        } else if ( turn == p1){
            turn = p2
            queBotonEl.innerText = p2
        } else {
            turn = p1
            queBotonEl.innerText = p1
        }
        document.getElementById(proximoCuadrante).style.backgroundColor = blue;
        return id;
    }
    
}
function cuadranteActual( cuadrante){
    var id = cuadrante.id;
    var charArray = id.split("");
    proximoCuadrante = charArray[0] + charArray[1] + charArray[2];
    return id 
}
function resetear(){    
        document.getElementById("fplayer").value = ""
        document.getElementById("splayer").value = ""
        p1 = "X"
        p2 = "O"
        document.getElementById("contenedor").reset()
}

function refreshPage() {
    location.reload();
}
