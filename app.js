//Scores
let s0 = document.getElementById("s1");
let s1 = document.getElementById("s2");

//Buttons
let ng = document.getElementById("ng");
let hd = document.getElementById("hd");
let rd = document.getElementById("roll");

//Temporary Scores
let t0 = document.getElementById("t1");
let t1 = document.getElementById("t2");

init();

let score = [0, 0];
let sc = 0;
let active = 0;

rd.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 6) + 1;
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('dice'),
    renderer: 'svg',
    autoplay: true,
    path: './anime/dice'+random+'.json';
  });
  if(random!=1) {
    sc += random;
    document.getElementById('t'+active).innerHTML = sc;
    document.getElementById('active'+active).style.dislay='inline';
  }
  else{
    nextPlayer();
  }
});

function init() {
  s0.innerHTML=0;
  s1.innerHTML=0;
  t0.innerHTML=0;
  t1.innerHTML=0;
}
