const form = document.getElementById('form')
form.addEventListener('click', function(e){
    e.preventDefault()
    novaTarefa()
    riscar()
  
    
    
})
let novaLi = ''
function novaTarefa(){

    let tarefa = document.getElementById('tarefa')
    let li = '<ul>'
        li += `<li> ${tarefa.value} <li/>`
        li += '<ul/>'

    novaLi += li

    tarefa.value = ''

    let pai = document.querySelector('ul')
    pai.innerHTML = novaLi

    

}
function riscar(){
let click = document.getElementById('li')
        click.addEventListener('click',function(e){
            e.preventDefault()
         
         click.style.textDecoration = 'line-through'
    })


}

    
    