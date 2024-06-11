let turn = ""
function jugar(cuadrado){
    var id = cuadrado.id;
    let queBotonEl = document.getElementById(id);
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
    return id;
}
