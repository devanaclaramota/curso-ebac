$(document).ready(function(){
  $('#new-img').click(function(){
  $('form').slideDown()
  })

  //para selecionar o elemento a ser usado escreve-se $('form') por exemplo

  
  $('#cancelar').click(function(){
    $('form').slideUp()
  })

  $('form').on('submit' , function(e){
    e.preventDefault()
    const novaImagem = $('url').val()
    const novoItem = $('<li><li/>')
    $(`<img src ="${novaImagem}"/>`).appendTo(novoItem)
    
  $(novoItem).appendTo('ul')
  })

})
//O jquery funciona atraves do $ e dos () dentro do parentese informamos o seletor (document, h1, variavel)
// .ready é quando o documento tiver pronto.
