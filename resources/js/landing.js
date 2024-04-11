// VARIABLES

let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let overlay = document.querySelector(".curtain");

let  radioButtons = document.getElementsByName('about--radio');
let introButton = radioButtons[0];
let educationButton = radioButtons[1];
let experienceButton = radioButtons[2];
let skillsButton = radioButtons[3];

let aboutNavigation = document.querySelector(".about--navigation");

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
  aboutNavigation.style.backgroundImage = "url('../images/about-intro.jpg')";
});


educationButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-83vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-education.jpg')";
});


experienceButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-166vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-experience.jpg')";
});


skillsButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-249vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-skills.jpg')";
});




document.addEventListener("DOMContentLoaded", function() {
  overlay.classList.add("fade-out");
});

updateTime();

setInterval(updateTime, 60000); 