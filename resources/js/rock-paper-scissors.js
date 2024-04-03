
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissor_button = document.querySelector("#scissor");
const result = document.querySelector(".text")
const player_text = document.querySelector("#playerChoice")
const computer_text = document.querySelector("#computerChoice")

const container = document.querySelector(".container")
const buttonTest = document.querySelector(".addButton")


function playRound(player_choice) {    


    const computer_choice = randomInteger(0, 2);
    player_text.textContent = moveTag(player_choice)
    computer_text.textContent = moveTag(computer_choice)

    
    resetAnimation(result)
    

    

    if ((player_choice + 1 ) % 3 == computer_choice){
        result.textContent = "Computer Won!";
    }else if(player_choice == computer_choice){
        result.textContent = "Its a Tie!";
    }else{
        result.textContent = "Player Won!";
    }
    
}

function resetAnimation(element){
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = null; 
}

function moveTag(id){
    switch (id){
        case 0:
            return "Rock"
        case 1:
            return "Paper"    
    }
    return "Scissor"

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

rock_button.addEventListener("click", () => playRound(0));

paper_button.addEventListener("click", () => playRound(1));

scissor_button.addEventListener("click", () => playRound(2));