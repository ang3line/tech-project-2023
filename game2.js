const ship = document.getElementById('ship');
const rock = document.getElementById('rock');
const score = document.getElementById('score');
// Const for varibles for defining objects and things that won't be changed 


function jump() {
    ship.classList.add("jump-animation");
    setTimeout(() =>
      ship.classList.remove("jump-animation"), 500);
  }
  
document.addEventListener('keydown', (event) => {
if (event.code == 'ArrowUp' && !ship.classList.contains('jump-animation')) {
    jump();
}
});
  


const shipTop = parseInt(window.getComputedStyle(ship)
.getPropertyValue('top'));
let rockLeft = document.getElementById("rock").style.left;

let pos = 750





//setInterval means it happens every customed milliseconds
setInterval(rockMove, 5)

function rockMove() {
    pos--
    rockLeft = pos + "px"
}
 





