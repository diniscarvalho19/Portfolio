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

  minutesElement.textContent = minutesFormattedTime;
}

updateTime();

setInterval(updateTime, 60000); 