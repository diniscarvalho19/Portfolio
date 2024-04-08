const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

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

const buttons = document.querySelectorAll('.about--navigation button');
const aboutTextSections = document.querySelectorAll('.about--text');

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

updateTime();

setInterval(updateTime, 60000); 