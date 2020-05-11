//Scores
let s0 = document.getElementById("score0");
let s1 = document.getElementById("score1");

//Buttons
let ng = document.getElementById("ng");
let hd = document.getElementById("hd");
let rd = document.getElementById("roll");

//Temporary Scores
let t0 = document.getElementById("t0");
let t1 = document.getElementById("t1");

let score = [0, 0];
let sc = 0;
let ac = 0;

init();

document.getElementById("gif").style.display = "none";
document.getElementById("pic").style.display = "none";

//Roll
rd.addEventListener("click", function () {
  document.getElementById("active-" + ac).style.display = "inline";
  document.getElementById("pic").style.display = "none";
  let random = Math.floor(Math.random() * 6) + 1;
  document.getElementById("gif").style.display = "block";
  setTimeout(() => {
    document.getElementById("gif").style.display = "none";
    document.getElementById("pic").src = "./pics/dice" + random + ".svg";
    document.getElementById("pic").style.display = "block";
    if (random !== 1) {
      sc = sc + random;
      document.getElementById("t" + ac).textContent = sc;
    } else {
      nextPlayer();
    }
  }, 2000);
});

//New Game
ng.addEventListener("click", function () {
  init();
  document.getElementById("pic").style.display = "none";
});

//Hold
hd.addEventListener("click", function () {
  score[ac] += sc;
  document.getElementById("score" + ac).innerHTML = score[ac];
  if (score[ac] >= 50) {
    document.getElementById("score" + ac).innerHTML = "WINNER";
    sc = 0;
    document.getElementById("pic").style.display = "none";
    rd.style.cursor = "no-drop";
    rd.style.pointerEvents = "none";
    hd.style.cursor = "no-drop";
  } else {
    nextPlayer();
  }
});

function init() {
  s0.innerHTML = 0;
  s1.innerHTML = 0;
  t0.innerHTML = 0;
  t1.innerHTML = 0;
  score = [0, 0];
  document.getElementById("active-0").style.display = "none";
  document.getElementById("active-1").style.display = "none";
}

function nextPlayer() {
  ac === 0 ? (ac = 1) : (ac = 0);
  sc = 0;
  t0.textContent = 0;
  t1.textContent = 0;
  document.getElementById("active-0").style.display = "none";
  document.getElementById("active-1").style.display = "none";
}
