document.addEventListener('DOMContentLoaded',function(){
    const link = document.querySelectorAll('[data-link]')
    for(let i = 0; i < link.length; i++){
        link[i].addEventListener('click', function(toque){
            console.log(link)
        })
    }
})