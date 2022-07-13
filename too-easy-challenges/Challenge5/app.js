const hash = {};
hash[1] = "./dice-1.png";
hash[2] = "./dice-2.png";
hash[3] = "./dice-3.png";
hash[4] = "./dice-4.png";
hash[5] = "./dice-5.png";
hash[6] = "./dice-6.png";
let player1 = 0;
let player2 = 0;
let count1 = 0;
let count2 = 0;
var statuss = true;

function NewGame() {
  player1 = 0;
  player2 = 0;
  count1 = 0;
  count2 = 0;
  statuss = true;
  document.getElementById("score-1").innerHTML = count2;
  document.getElementById("score-0").innerHTML = count1;
  document.getElementById("current-0").innerHTML = player1;
  document.getElementById("current-1").innerHTML = player2;
}

function winLost()
{
    if (count1 >= 100) {
        alert("player 1 đã thắng");
        return;
      } else if (count2 >= 100) {
        alert("player 2 đã thắng");
        return;
      }
}
function random() {
    winLost()
  if (statuss === true) {
    random1();
  } else random2();
}
function random1() {
  let ran1 = Math.floor(Math.random() * (6 - 0)) + 1;
  let returns1 = hash[ran1];
  player1 += ran1;

  let ran = Math.floor(Math.random() * (6 - 0)) + 1;
  let returns = hash[ran];
  player1 += ran;
  if (ran === 1 || ran1 === 1) {
    document.getElementById("roll").src = returns;
    setTimeout(lost1, 100);
    return;
  }
  document.getElementById("roll1").src = returns1;
  document.getElementById("roll").src = returns;
  document.getElementById("current-0").innerHTML = player1;
}
function random2() {
    let ran1 = Math.floor(Math.random() * (6 - 0)) + 1;
    let returns1 = hash[ran1];
    player2 += ran1;

  let ran = Math.floor(Math.random() * (6 - 0)) + 1;
  let returns = hash[ran];
  player2 += ran;
  if (ran === 1) {
    document.getElementById("roll").src = returns;
    setTimeout(lost2, 100);
    return;
  }
  document.getElementById("roll1").src = returns1;
  document.getElementById("roll").src = returns;
  document.getElementById("current-1").innerHTML = player2;
}

function hold() {
  if (statuss === true) hold1();
  else hold2();
}
function hold1() {
  count1 = player1 + count1;
  document.getElementById("score-0").innerHTML = count1;
  player1 = 0;
  document.getElementById("current-0").innerHTML = player1;
  statuss = false;
  //random();
  winLost();
}
function hold2() {
  count2 = player2 + count2;
  document.getElementById("score-1").innerHTML = count2;
  player2 = 0;
  document.getElementById("current-1").innerHTML = player2;
  statuss = true;
  //random();
  winLost();
}

function lost1() {
  player1 = 0;
  document.getElementById("current-0").innerHTML = player1;
  result = alert("player 1 đã thua lượt");
  statuss = false;
  //random();
}
function lost2() {
  player2 = 0;
  document.getElementById("current-1").innerHTML = player2;
  result = alert("player 2 đã đã thua lượt");
  statuss = true;
  //random();
}
