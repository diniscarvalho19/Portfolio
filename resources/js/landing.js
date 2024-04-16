// VARIABLES

let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let overlay = document.querySelector(".curtain");

let  radioButtons = document.getElementsByName('about--radio');

let introButton = radioButtons[0];
let introTitle = document.querySelector(".intro .title");

let educationButton = radioButtons[1];
let educationLeftTitle = document.querySelector(".education .left .title");
let educationRightTitle = document.querySelector(".education .right .title");


let experienceButton = radioButtons[2];
let experienceTitle = document.querySelector(".experience .title");


let skillsButton = radioButtons[3];
let skillsTitle = document.querySelector(".skills .title");



let aboutNavigation = document.querySelector(".about--navigation");

let firstChild = document.querySelector(".about--content > div:first-child");

let selectionDivs = document.querySelectorAll('.selection');

let cardDivs = document.querySelectorAll('.cards > div');

let arrowDiv = document.querySelector('.arrow');

let rootEl = document.querySelector('.sphere');

let homeButton = document.getElementById('magic--home--button');

let aboutButton = document.getElementById('magic--about--button');

let contactButton = document.getElementById('magic--contact--button');

const techDictionary = {
  'RUBY': ['proj', 'work'],
  'RUBYonRAILS': ['proj', 'work'],
  'HTML': ['proj', 'uni', 'work'],
  'CSS': ['proj',  'uni', 'work'],
  'JAVASCRIPT': ['proj',  'uni', 'work'],
  'JAVA': ['uni'],
  'C#': ['uni'],
  'C': ['uni'],
  'PYTHON': ['uni'],
  'Git': ['proj', 'work', 'uni'],
  'RESTful API': ['proj', 'work', 'uni'],
  'OUTSYSTEMS': ['uni'],
  'SQL': ['proj', 'work', 'uni'],
  'PHASER': ['uni'],
  'UNITY': ['uni']
};



// FUNCTIONS

function addArrowSpans(maxArrow){
  for(let i = 0; i < maxArrow; i++){
    let newSpan = document.createElement('span');
    newSpan.style.animationDelay = -i/2 + "s";    
    arrowDiv.appendChild(newSpan);
  }
}

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

var tagCloud = TagCloud('.sphere',  Object.keys(techDictionary), {
  radius: 400,
  maxSpeed: 'normal',
  initSpeed: 'fast',
  direction: 135,
  keep: true
});


function handleActivation(selectedDivIds) {
  selectionDivs.forEach(div => {
      div.classList.remove('active');
  });

  selectedDivIds.forEach(id => {
      const selectedDiv = document.getElementById(id);
      if (selectedDiv) { 
          selectedDiv.classList.add('active');
      }
  });
}

function deactivateAllProjects(){
  cardDivs.forEach(function(otherCard) {
    otherCard.classList.remove('active');
    otherCard.querySelector('.body').classList.remove('active');
  });
}


// EVENT LISTENERS

introButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "0vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-intro.jpg')";

  introTitle.classList.remove("lineUp");
  introTitle.offsetWidth;
  introTitle.classList.add("lineUp");
});


educationButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-83vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-education.jpg')";

  educationLeftTitle.classList.remove("lineUp");
  educationLeftTitle.offsetWidth;
  educationLeftTitle.classList.add("lineUp");

  educationRightTitle.classList.remove("lineUp");
  educationRightTitle.offsetWidth;
  educationRightTitle.classList.add("lineUp");


});


experienceButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-166vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-experience.jpg')";

  experienceTitle.classList.remove("lineUp");
  experienceTitle.offsetWidth;
  experienceTitle.classList.add("lineUp");
});


skillsButton.addEventListener("click", function() {
  firstChild.style.marginLeft = "-249vw";
  aboutNavigation.style.backgroundImage = "url('../images/about-skills.jpg')";

  skillsTitle.classList.remove("lineUp");
  skillsTitle.offsetWidth;
  skillsTitle.classList.add("lineUp");
});

rootEl.addEventListener('click', function clickEventHandler(e) {
  if (e.target.className === 'tagcloud--item') {
        handleActivation( techDictionary[e.target.innerText]);
  }
});


cardDivs.forEach(function(card) {
  card.addEventListener('click', function() {
      deactivateAllProjects();
      card.classList.add('active');
      card.querySelector('.body').classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  overlay.classList.add("fade-out");
});

document.getElementById("baker--button").onclick = function () {
  location.href = "https://diniscarvalho19.github.io/Padeira-de-Aljubarrota/";
};


homeButton.addEventListener('click', deactivateAllProjects);

aboutButton.addEventListener('click', deactivateAllProjects);

contactButton.addEventListener('click', deactivateAllProjects);


// FUNTION CALLS

updateTime();

addArrowSpans(20);

setInterval(updateTime, 60000); 
