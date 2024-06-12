let turn = ""
let proximoCuadrante;
function jugar(cuadrado){
    var id = cuadranteActual(cuadrado);
    let queBotonEl = document.getElementById(id);
    if( queBotonEl.innerText == ""){
        if ( turn == ""){
            turn = "X"
            queBotonEl.innerText = "X"
        } else if ( turn == "X"){
            turn = "O"
            queBotonEl.innerText = "O"
        } else {
            turn = "X"
            queBotonEl.innerText = "X"
        }
        var div  = document.getElementById(proximoCuadrante)
        var table = div.getElementsByTagName('table')[0];
        table.style.backgroundColor = 'lightblue'
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
