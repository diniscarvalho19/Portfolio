
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

let loader = document.getElementById("loader");

let exitButton = document.getElementById("hide-link");

let  = document.querySelectorAll('li div');



let loaderSize = 0;

function checkAllChecked() {

    let allChecked = true;

    checkboxes.forEach(element => {
        if (!element.checked) {
            allChecked = false;
        }
    });

    if(allChecked){

        setTimeout(function() {
            exitButton.removeAttribute("id");
        }, 1000); 


    }

}


function increaseLoader() {
    let currentWidth = Number(loader.style.width.split("%")[0]);

    for (let index = 0; index < 12; index++) {
        setTimeout(function() {
            loader.style.width = currentWidth + 1 + "%";
            currentWidth++;
        }, 25 * index); 
    }
}



checkboxes.forEach(checkbox => {
    checkbox.addEventListener("mouseenter", () => {
        if(!checkbox.checked){
            increaseLoader();
            checkbox.checked = true
        }
        checkAllChecked();
    });


    checkbox.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
    });
});