//toggle boxes
const themes = document.getElementsByClassName("toggle-theme");

//toggle ball
const toggleBall = document.querySelector("#toggle-ball");

//stylesheet
const styleSetting = document.getElementById("css");

//TOGGLE BALL DRAG FUNCTIONS
function onDragStart(e) {
      e.target.style.opacity = "0.5";
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', "toggle-ball");
}

toggleBall.addEventListener("dragstart", onDragStart)

//DRAG TARGET FUNCTIONS
function onDragOver(e) {
      e.preventDefault();
}

function onDragEnter(e) {
      e.preventDefault();
}

function onDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      const id = e.dataTransfer.getData("text/plain");
      if (id === "toggle-ball") {
            e.target.appendChild(toggleBall);
            toggleBall.style.opacity = "1";
            changeThemes();
      } 
}

//FUNCTION TO CHANGE THEMES UPON MOVEMENT OF TOGGLE BALL
function changeThemes() {     
      if (toggleBall.parentNode === themes[0]) {
            styleSetting.setAttribute("href", './styles/styles1.css');
      } else if (toggleBall.parentNode === themes[1]) {
          styleSetting.setAttribute("href", './styles/styles2.css')
      } else if (toggleBall.parentNode === themes[2]) {
            styleSetting.setAttribute("href", './styles/styles3.css');
      }
}

//DROPZONE EVENTS
for (let i = 0; i < themes.length; i++) {
      themes[i].addEventListener("dragover", onDragOver);
      themes[i].addEventListener("dragenter", onDragEnter);
      themes[i].addEventListener("drop", onDrop);
}


//TOUCH SETTING

function mobileThemeChanger() {
      if (toggleBall.parentNode === themes[0]) {
            themes[0].removeChild(toggleBall);
            themes[1].appendChild(toggleBall);
            changeThemes();
      } else if (toggleBall.parentNode === themes[1]) {
            themes[1].removeChild(toggleBall);
            themes[2].appendChild(toggleBall);
            changeThemes();
      } else if (toggleBall.parentNode === themes[2]) {
            themes[2].removeChild(toggleBall);
            themes[0].appendChild(toggleBall);
            changeThemes();
      }
}

toggleBall.addEventListener("touchend", mobileThemeChanger)