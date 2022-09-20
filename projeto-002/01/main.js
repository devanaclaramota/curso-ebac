const form = document.getElementById('form')
const imgRep = '<img src="images/reprovado.png" alt=""></img>'
const imgApro = '<img src="images/aprovado.png" alt=""></img>'


const materias = []
const notas = []

//essa variavel está aqui para que ela nao seja resetada sempre que houver um submit(addeventlistnner)
let produzindoNovasLinhas = ''



//Aqui é preciso submeter todo o formulario e nao apenas o botao
form.addEventListener('submit', function(funcao){
    funcao.preventDefault()
    
    imprimindoTela()
    criandoMaisLinhas()
    arrayNotas()

})




function imprimindoTela(){
    let notaValor = document.getElementById('nota')
    let disc = document.getElementById("disciplina")

    materias.push(disc.value)
    notas.push(parseFloat(notaValor.value)) //p reconhecer como numero 
    
    let linha = '<tr>'
    linha += `<td> ${disc.value} </td>`
    linha += `<td> ${notaValor.value} </td>`
    linha+= `<td> ${notaValor.value >= 7 ? imgApro : imgRep}</td>`
    linha += '</tr>'

    produzindoNovasLinhas += linha

    //aqui estao vazias justamente para serem resetadas a cada submit. Só pra apagar o input
    notaValor.value = ''
    disc.value = ''
}

function criandoMaisLinhas(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = produzindoNovasLinhas
}
function arrayNotas(){
    
    const media= mediafinal()
    document.getElementById('valormedia').innerHTML = media
    document.getElementById('resultado').innerHTML = media >= 7 ? 'Aprovado' : 'Reprovado'
}



function mediafinal(){
    let somaNotas = 0
    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i]
    }
   
        return  somaNotas / notas.length
   
}


