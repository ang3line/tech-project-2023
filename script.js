const ship = document.getElementById('ship');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump() {
    ship.classList.add("jump-animation");
    setTimeout(() =>
      ship.classList.remove("jump-animation"), 500);
  }
  
  document.addEventListener('keypress', (event) => {
    if (!ship.classList.contains('jump-animation')) {
      jump();
    }
  })
  
  setInterval(() => {
    const shipTop = parseInt(window.getComputedStyle(ship)
      .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
      .getPropertyValue('left'));
    score.innerText++;
  
    if (rockLeft < 0) {
      rock.style.display = 'none';
    } else {
      rock.style.display = ''
    }
  
    if (rockLeft < 50 && rockLeft > 0 && shipTop > 150) {
      alert("You got a score of: " + score.innerText +
        "\n\nreplay?");
      location.reload();
    }
  }, 50);
 