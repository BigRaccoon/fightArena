const enemyBody = document.querySelector(".enemyBody");
const playerBody = document.querySelector(".yourBody");
const enemyHP = document.querySelector("#enHP");
const playerHP = document.querySelector("#plHP");
const accept = document.querySelector(".arenaButton");

warriorClass = {
  name: "warrior",
  hp: 3,
  power: 1,
};

let enemy = warriorClass.hp;
let player = warriorClass.hp;

enemyHP.innerHTML = `Health: ${enemy}`;
playerHP.innerHTML = `Health: ${player}`;

// Выбор куда бить
let playerChooseA;
enemyBody.addEventListener("click", function () {
  playerChooseA = event.target.innerHTML;
  colorA = event.target.style.backgroundColor;
  console.log("Целимся в " + event.target.innerHTML);
  //event.target.style.backgroundColor = "orange";
});
//Выбор места защиты
let playerChooseP;
playerBody.addEventListener("click", function () {
  colorP = event.target.style.backgroundColor;
  playerChooseP = event.target.innerHTML;
  console.log("Готовимся защищать " + event.target.innerHTML);
  //event.target.style.backgroundColor = "yellow";
});

//Проверка событий
accept.addEventListener("click", function () {
  console.log(warriorClass.hp);
  if (playerChooseP && playerChooseA) {
    enAt = enemyAttack();
    console.log("Враг атакует в " + enAt);
    if (enAt != playerChooseP) {
      player -= 1;
      playerHP.innerHTML = `Health: ${player}`;
      playerChooseP = undefined;
    }
    checkDeath(player, "losling :(((");
    // проверка на попадание через защиту врага
    let check = getProtectionEnemy();
    console.log("враг защищает свой " + check);
    if (playerChooseA != check) {
      enemy -= 1;
      enemyHP.innerHTML = `Health: ${enemy}`;
    }
    checkDeath(enemy, "You win!!!");
    if (enemy == 0 && player == 0) {
      setTimeout(() => {
        alert("Произошел троллинг!!!");
      }, 500);
    }
  }
});
// Функции
let protection = ["head", "body", "foot"];
function getProtectionEnemy() {
  return protection[getRandomInt(protection.length)];
}

function enemyAttack() {
  return getProtectionEnemy();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function restart() {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

function checkDeath(person, phrase) {
  if (person == 0) {
    setTimeout(() => {
      alert(phrase);
    }, 500);
    restart();
  }
}
