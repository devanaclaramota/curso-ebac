 const form = document.getElementById('form-ativ')
    const imgAprov = '<img src="images/aprovado.png"alt="celebrando "/>'
    const imgReprov = '<img src="images/reprovado.png"alt="triste "/>'
    const materias = []
    const valorNotas = []
    let linhas = ''

    form.addEventListener('submit' , function(e){
    e.preventDefault()
    itensTabela()
    atualizaTabela()
    atualizaMedia()
})


    function itensTabela(){
        let atividade = document.getElementById('atividade')
        let nota = document.getElementById('nota')
        
        materias.push(parseFloat(atividade.value))
        valorNotas.push(parseFloat(nota.value))



    //nao entendi pq recebe umastring
    let linha = '<tr>' 
    linha += `<td>${atividade.value} </td>`
    linha += `<td> ${nota.value} </td>`
    linha += `<td> ${nota.value >= 7 ? imgAprov : imgReprov}</td>`
    linha += '</tr>'

    linhas = linhas + linha

    nota.value = ''
    atividade.value = ''
    }

    function atualizaTabela(){
        const conteudo = document.getElementById('conteudo')
        conteudo.innerHTML = linhas
    }
    function atualizaMedia(){
      const mediafinal = calcmediafinal()

      
      document.getElementById('resultmedia').innerHTML= mediafinal
      document.getElementById('situacaofinal').innerHTML= mediafinal >= 7 ? 'Aprovado' : 'REPROVADO '

    }
    function calcmediafinal(){
        let somaNotas = 0

        for (let i = 0; i < valorNotas.length; i++){
         somaNotas += valorNotas(i)
        }
         return somaNotas / valorNotas.length
    }






















