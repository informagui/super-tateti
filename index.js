function jugar(cuadrado){
    var id = cuadrado.id;
    let queBotonEl = document.getElementById(id);
    if ( queBotonEl.innerText == ""){
        queBotonEl.innerText = "X"
    } else if ( queBotonEl.innerText == "X"){
        queBotonEl.innerText = "O"
    } else {
        queBotonEl.innerText = "X"
    }
    return id;
}
