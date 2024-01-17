var text = "DATE PLANNER";
var index = 0;
var titleanimation = document.getElementById("title")

function display(){
    titleanimation.textContent += text[index]
    index++;

    if(index < text.length){
        setTimeout(display,100)
    }
}
display()
let artgallery = document.getElementById("artgallery")

function fade(){
    let info = document.getElementById("trial")
    artgallery.style.opacity = 0.2
    info.style.display = "block"
  
  
}
art.addEventListener("click",fade)


 
/*
function search() {
    let input = document.getElementById("searchbar")
    if (input.value === sunny){
        artgallery.style.display = "none"
        
    }else{
        artgallery.style.display = "none"
    }
}
search()
Btn.addEventListener("click",search)
*/
