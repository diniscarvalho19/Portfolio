// VARIABLES

let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let overlay = document.querySelector(".curtain");

let introButton = document.querySelector(".intro");
let educationButton = document.querySelector(".education");
let experienceButton = document.querySelector(".experience");
let skillsButton = document.querySelector(".skills");

let firstChild = document.querySelector(".about--content > div:first-child");



// FUNCTIONS

function updateTime() {
  const date = new Date();

  const hoursOptions = {
    hour: 'numeric',
    timeZone: 'Europe/Lisbon'
  };

  const minutesOptions = {
    minute: 'numeric',
    timeZone: 'Europe/Lisbon'
  };

  const hoursFormattedTime = date.toLocaleString('en-US', hoursOptions);

  const minutesFormattedTime = date.toLocaleString('en-US', minutesOptions);

  hoursElement.textContent = date.getHours();

  minutesElement.textContent = minutesFormattedTime.padStart(2, "0");
}


introButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "0vw";
});


educationButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-83vw";
});


experienceButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-166vw";
});


skillsButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-249vw";
});




document.addEventListener("DOMContentLoaded", function() {
  overlay.classList.add("fade-out");
});

updateTime();

setInterval(updateTime, 60000); 