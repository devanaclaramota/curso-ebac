$(document).ready(function(){
   $('#form').on('submit',function(e){
      e.preventDefault()

    let tarefa = $('#tarefa').val()
    let itemNovo =  $('<li>  </li>')
      $(`<li> ${tarefa} </li>`).appendTo(itemNovo)

      $(itemNovo).appendTo('ul')

      $('#tarefa').val('')
      //li ou novo item quando clicado marca todos da lista 
      $('li').click(function(){
         $('li').css('text-decoration', 'line-through')
      })
     
    
     })

   })