//VARIABLES

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let loader = document.getElementById("loader");
let exitButton = document.getElementById("hide-link");
let arrow = document.querySelector(".arrow");
let elementsToMove = document.querySelectorAll('.logo, .arrow, #loader');
let snowContainer = document.querySelector('.snow');
let spaceship = document.querySelector('.spaceship');


//FUNCTIONS

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function snowGenerator(numElements){

    for (var i = 0; i < numElements; i++) {
        var span = document.createElement('span');
        var randomI = getRandomInt(20, 40);
        span.style.setProperty('--i', randomI);
        snowContainer.appendChild(span);
    }

}

function checkAllChecked() {
    let allChecked = true;
    checkboxes.forEach(element => {
        if (!element.checked) {
            allChecked = false;
        }
    });
    if (allChecked) {
        exitButton.removeAttribute("id");
        exitButton.classList.add("fade-in");
    }
}

function increaseLoader() {
    let currentWidth = Number(loader.style.width.split("%")[0]);
    for (let index = 0; index < 12; index++) {
        setTimeout(function () {
            loader.style.width = currentWidth + 1 + "%";
            currentWidth++;
        }, 25 * index);
    }
}





//EVENTS

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("mouseenter", () => {
        if (!checkbox.checked) {
            increaseLoader();
            checkbox.checked = true;
        }
        checkAllChecked();
    });

    checkbox.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
    });
});

arrow.addEventListener("click", () => {
    elementsToMove.forEach(element => {
        element.classList.add("translated");
    });

    snowGenerator(200);
    spaceship.classList.add("fade-in");
    


    setTimeout(() => {
        spaceship.classList.add("fly-away");
    }, 500); 

    setTimeout(() => {
        snowContainer.classList.add("fade-out");
    }, 3000);   


   
    
    setTimeout(() => {
        window.location.href = "./resources/html/landing.html";
    }, 4500); 
});



