// VARIABLES

let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let buttons = document.querySelectorAll('.about--navigation button');
let aboutTextSections = document.querySelectorAll('.about--text');
let overlay = document.querySelector(".curtain");


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




// EVENT LISTENERS

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const section = this.dataset.section;

    aboutTextSections.forEach(textSection => {
      textSection.classList.remove('show'); 
      if (textSection.id === section) {
        textSection.classList.add('show'); 
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  overlay.classList.add("fade-out");
});

updateTime();

setInterval(updateTime, 60000); 