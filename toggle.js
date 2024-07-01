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
      console.log("drag start")
}

toggleBall.addEventListener("dragstart", onDragStart)

//DRAG TARGET FUNCTIONS
function onDragOver(e) {
      e.preventDefault();
      console.log("drag over")
}

function onDragEnter(e) {
      e.preventDefault();
      console.log("drag enter")
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
