let turn = "";
let p1 = "X"; 
let p2 = "O";
let proximoCuadrante;
function jugadores(){
    let x = document.getElementById("seleccion")
    p1 = x.elements[0].value
    p2 = x.elements[1].value
    let textoEl = document.getElementById("texto")
    textoEl.innerText = p1 + p2
}
function jugar(cuadrado){
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
    document.getElementById("seleccion").reset()
}
