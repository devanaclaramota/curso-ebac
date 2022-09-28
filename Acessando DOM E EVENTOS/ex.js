function enviar(){
     
    let tarefa = document.getElementById('tarefa')
    let novaTarefa = document.createElement('li')
    let txt = document.createTextNode(tarefa.value)
    novaTarefa.appendChild(txt)

    let ul = document.getElementById('ul')
    ul.appendChild(novaTarefa)


    tarefa.value = ''
}
function riscar(){

   ul.style.backgroundColor = "#0000002c"
   //ul.style.text-decoration.line-through
}

