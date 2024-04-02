const container = document.querySelector(".container");
const newGridButton = document.querySelector(".new-grid-button");
const errorHandling = document.querySelector(".error-handling");

gridGenerator = function(size){

    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
    
            const content = document.createElement("div");
            content.classList.add("grid");
            content.style.width = `calc(100% / ${size})`;
            content.style.height = `calc(100% / ${size})`;
            content.addEventListener('mouseover', () => {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                content.style.backgroundColor = "#" + randomColor;
              });
            container.appendChild(content);    
        }
    }
}

askForNewSize = function(){
    let size = parseInt(prompt("Number of squares per side for the new grid:", "16"));

        
    if (isNaN(size)){
        errorHandling.textContent = "Invalid grid size";
        errorHandling.classList.add("active");
    }else if(size > 100){
        errorHandling.textContent = "Grid size must be smaller than 100";
        errorHandling.classList.add("error-active");
    }else{
        gridGenerator(size);
        errorHandling.textContent = "";
        errorHandling.classList.remove("error-active");
    }


}



newGridButton.addEventListener("click", ()=> {
    askForNewSize();    
});



gridGenerator(16);
