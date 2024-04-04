const container = document.querySelector(".grid-container");
const newGridButton = document.querySelector(".new-grid");
const errorHandling = document.querySelector(".error-handling");
const switchElement = document.querySelector('.rainbow-switch');
const cleanGridButton = document.querySelector('.clean-grid');

let sizeGlobal = 16;

let isRainbow = false;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

switchElement.addEventListener('change', (event) => {
  if (event.target.checked) {
    isRainbow = true;
  }else{
    isRainbow = false;
  } 
  gridGenerator(sizeGlobal);
});


gridGenerator = function(size){

    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const content = document.createElement("div");
            content.classList.add("grid");
            content.style.width = `calc(100% / ${size})`;
            content.style.height = `calc(100% / ${size})`;
            content.addEventListener('mouseover', () => {  
                if (!mouseDown) return
                if (isRainbow){
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    content.style.backgroundColor = "#" + randomColor;
                }else{
                    content.style.backgroundColor = "black";
                }              
                
              });

            container.appendChild(content);    
        }
    }
}                



askForNewSize = function(){
    let size = parseInt(prompt("Number of squares per side for the new grid:", "16"));

        
    if (isNaN(size)){
        errorHandling.textContent = "Invalid grid size";
        errorHandling.classList.add("error-active");
    }else if(size > 100){
        errorHandling.textContent = "Grid size must be smaller than 100";
        errorHandling.classList.add("error-active");
    }else{
        gridGenerator(size);
        sizeGlobal = size;
        errorHandling.textContent = "";
        errorHandling.classList.remove("error-active");
    }


}



newGridButton.addEventListener("click", ()=> {
    askForNewSize();    
});

cleanGridButton.addEventListener("click", ()=> {
    gridGenerator(sizeGlobal);   
});



gridGenerator(sizeGlobal);
