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

function fade(){
    let artgallery = document.getElementById("artgallery")
    let info = document.getElementById("trial")
    artgallery.style.opacity = 0.2
    info.style.display = "block"
  
    
    
   
  
}
art.addEventListener("click",fade)
