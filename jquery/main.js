$(document).ready(function(){
  $('#new-img').click(function(){
  $('form').slideDown()
  })

  $('#cancelar').click(function(){
    $('form').slideUp()
  })

  $('form').on('submit' , function(e){
    e.preventDefault()
    const novaImagem = $('url').val()
    const novoItem = $('<li><li/>')
    $(`$(<img src ="${novaImagem}"/>`).appendTo(novoItem)
    
  $(novoItem).appendTo('ul')
  })

})
