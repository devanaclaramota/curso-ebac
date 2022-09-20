const form = document.getElementById('form')
form.addEventListener('submit', function(funcao){
    funcao.preventDefault()
    printTela()
//Aqui é preciso submeter todo o formulario e nao apenas o botao
})

function printTela(){
    let disc = document.getElementById('disciplina')
    let notaAtividade =document.getElementById('nota')
    const tabela = document.querySelector('tbody')
   
    //para adicionar essas informaçoes vinda do input em uma tabela como uma linha é preciso criar uma variavel que receba o html.
    let linhaTabela = '<tr>'
    linhaTabela = linhaTabela + `<tr> ${disc.value} </tr>`
    linhaTabela = linhaTabela + `<tr> ${notaAtividade.value} </tr>`
    linhaTabela = linhaTabela + `<tr> ${notaAtividade.value >= 7 ?'Aprovado' : 'Reprovado'}</tr>`
    linhaTabela = '</tr>'
    tabela.innerHTML = linhaTabela
}
