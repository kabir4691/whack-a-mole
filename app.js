const squareAll = document.querySelectorAll('.square');

const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');

let currentScore = 0;
let currentMolePos = -1;
let remainingTime = 60;
let shiftMoleTimerId = null;
let countDownTimerId = null;

function popMole() {
  squareAll.forEach(square => {
    square.classList.remove('mole');
  });
  const randomPos = Math.floor(Math.random() * 9);
  console.log({randomPos, squareAll});
  squareAll[randomPos].classList.add('mole');
  currentMolePos = squareAll[randomPos].id;
  console.log('coco');
}

squareAll.forEach(square => {
  square.addEventListener('mouseup', () => {
    if (square.id === currentMolePos) {
      currentScore++;
      score.textContent = currentScore;      
    }
  })
});

function countDown() {
  remainingTime--;
  timeLeft.textContent = remainingTime;

  if (remainingTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(shiftMoleTimerId);
    alert('Game over! Your score is ' + currentScore);
  }
}

shiftMoleTimerId = setInterval(popMole, 1000);
countDownTimerId = setInterval(countDown, 1000);



