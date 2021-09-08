var rolldice = document.getElementById('rolldice')
var cubenumber = document.getElementById('cubenumber')

var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')

var newgame = document.getElementById('restart')

var hold = document.getElementById('hold')

var current1 = document.getElementById('current1')
var current2 = document.getElementById('current2')

let numberdice = 1;

var joueur1 = document.getElementById('joueur1')
var joueur2 = document.getElementById('joueur2')

var player1 = true
var player2 = false

function getRandomInt() {
  return Math.floor(Math.random() * 6) + 1;
}

rolldice.addEventListener('click', (event)=>{
  numberdice = getRandomInt()
  console.log(numberdice)
soundEffect()
  if (numberdice == 1){
    cubenumber.style.backgroundImage = "url('https://alexerlandsson.github.io/assets/codepen/roll-the-dice/images/dice-1.png')"
  } else if (numberdice == 2) {
    cubenumber.style.backgroundImage = "url('https://alexerlandsson.github.io/assets/codepen/roll-the-dice/images/dice-2.png')"
  } else if (numberdice == 3) {
    cubenumber.style.backgroundImage = "url('https://alexerlandsson.github.io/assets/codepen/roll-the-dice/images/dice-3.png')"
  } else if (numberdice == 4) {
    cubenumber.style.backgroundImage = "url('https://alexerlandsson.github.io/assets/codepen/roll-the-dice/images/dice-4.png')"
  } else if (numberdice == 5) {
    cubenumber.style.backgroundImage = "url('https://alexerlandsson.github.io/assets/codepen/roll-the-dice/images/dice-5.png')"
  } else if (numberdice == 6) {
    cubenumber.style.backgroundImage = "url('https://alexerlandsson.github.io/assets/codepen/roll-the-dice/images/dice-6.png')"
  }
  players()
})

function players(){
  if(player1 == true){
    dice()
  } else {
    dice2()
  }
}


function dice(){
  if (numberdice === 1 ){
    score1.innerText = 0;
    player1 = false
    joueur1.style.backgroundColor = 'lightgray'
    joueur2.style.backgroundColor = 'red'
  } else {
   score1.innerText = parseInt(score1.innerText) + numberdice; 
  }
}

function dice2(){
  if (numberdice === 1){
    score2.innerText = 0;
    player1 = true
    joueur2.style.backgroundColor = 'lightgray'
    joueur1.style.backgroundColor = 'red'
  } else {
   score2.innerText = parseInt(score2.innerText) + numberdice; 
  }
}


function restart() {
  cubenumber.innerText = 0
  score1.innerText = 0
  score2.innerText = 0
  current1.innerText = 0
  current2.innerText = 0
}



hold.addEventListener('click', (event) => {
   if (player1 == true) {
    current1.innerText = parseInt(current1.innerText) + parseInt(score1.innerText);
    player1 = false;
    score1.innerText = 0
    cubenumber.innerText = 0
    joueur1.style.backgroundColor = 'lightgray'
    joueur2.style.backgroundColor = 'red'
      if(current1.innerText >= 100) {
        alert('winner is player1')
        restart()
      } 
   } else {
    current2.innerText = parseInt(current2.innerText) + parseInt(score2.innerText);
    player1 = true;
    score2.innerText = 0
    cubenumber.innerText = 0
    joueur2.style.backgroundColor = 'lightgray'
    joueur1.style.backgroundColor = 'red'
    if(current2.innerText >= 100) {
      alert('winner is player2')
      restart()
    } 
   }

})

newgame.addEventListener('click', (event) => {
  restart()
})


function soundEffect() {
  var audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}