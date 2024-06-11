function jugar(cuadrado){
    var id = cuadrado.id;
    let queBotonEl = document.getElementById("id");
    if ( queBotonEl.innerText == "_"){
        queBotonEl.innerText = "X"
    } else if ( queBotonEl.innerText == "X"){
        queBotonEl.innerText = "o"
    } else {
        queBotonEl.innerText = "X"
    }
    return id;
}
