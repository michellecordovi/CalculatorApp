//toggle boxes
const themes = document.getElementsByClassName("toggle-theme")

//toggle ball
const toggleBall = document.querySelector("#toggle-ball");

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
            e.target.appendChild(toggleBall)
      } 
}

//DROPZONE EVENTS
for (let i = 0; i < themes.length; i++) {
      themes[i].addEventListener("dragover", onDragOver);
      themes[i].addEventListener("dragenter", onDragEnter);
      themes[i].addEventListener("drop", onDrop);
}
