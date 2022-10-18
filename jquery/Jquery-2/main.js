const burger = document.getElementById('burguer')
burger.addEventListener('click', function(e){
    e.preventDefault()
   let nav = document.getElementById('nav')
   if(nav.style.display == 'none'){
     nav.style.display = 'block'
   } else{
    nav.style.display = 'none'
   }
  
   
})
$(document).ready(function(){
    $('#banner').slick({
        autoplay: true,
    });

    $('#tel').mask('(00)00000-0000',{
        placeholder:'(__) 00000-0000'
    })
     

    $('form').validade({
        rules:{
            nome:{
                required: true
            },
            email:{
                required:true,
                email:true
            },
            tel:{
                required:true
            }

        }
     })





})