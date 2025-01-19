let scroll = document.querySelector(".movies")
let leftscroll = document.querySelector(".sl")
let rightscroll = document.querySelector(".sr")
    leftscroll.addEventListener("click", function(e){
    //  scroll.style.scrollBehavior = "smooth"   
    scroll.scrollLeft -= 500
    }) 
    rightscroll.addEventListener("click", function(e){
    scroll.scrollLeft += 500
    })

 

