
const form = document.getElementById ('form')
let novosContatos = ''
form.addEventListener('submit', function(funcao){
    funcao.preventDefault()
    //aqui vou chamar as funções
    addcontato()
    novosContatos()
    apagar()
})




function addcontato(){
    let nome = document.getElementById('nome')
    let numero = document.getElementById('tel')
    let tabela = document.getElementById('tbody')

    let linha = '<tr>'
    linha += `<td> ${nome.value} </td>`
    linha += `<td> ${tel.value} </td>`
    linha += '</tr>'
    
    novosContatos = novosContatos + linha
    tabela.innerHTML = novosContatos
     

    nome.value = ''
    numero.value= ''
    
}
    function apagar(){
        novosContatos = ''
}









