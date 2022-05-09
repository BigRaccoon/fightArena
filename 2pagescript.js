const enemyBody = document.querySelector(".enemyBody");
const playerBody = document.querySelector(".yourBody");
const accept = document.querySelector(".arenaButton");

let playerChooseP, playerChooseA;
const warriorClass = {
  name: "warrior",
  hp: 3,
  power: 1,
};

const phrases = {
  enemy: {
    onKick: "",
  },
  player: {
    onKick: "",
  },
};
console.log("Аха");
class Choice {
  constructor(type, tag, fighter) {
    this.lastPickedTag = {
      tag: undefined,
      color: undefined,
    };
    this.type = type; // TODO add phrases
    this.tag = tag;
    this.hpTag = this.getHpTag();
    this.setFighter(fighter);
    this.setOnClickListeners();
  }

  setOnClickListeners() {
    this.selectArea = this.selectArea.bind(this);
    this.tag.addEventListener("click", this.selectArea);
  }

  selectArea($event) {
    if ($event.target.classList.contains("hp")) {
      return;
    }
    if (this.lastPickedTag.tag) {
      this.lastPickedTag.tag.style.backgroundColor = this.lastPickedTag.color;
    }
    this.lastPickedTag.tag = $event.target;
    this.lastPickedTag.color = $event.target.style.backgroundColor;
    this.picked = $event.target.innerHTML;
    // console.log("Готовимся защищать " + $event.target.innerHTML);
    $event.target.style.backgroundColor = "yellow";
  }

  setFighter(fighter) {
    this.fighter = fighter;
    this.setHp(this.fighter.hp);
  }

  increaseHp(dx) {
    this.setHp(this.hp + dx);
  }

  setHp(hp) {
    this.hp = hp;
    this.setHpText(this.hp);
  }

  setHpText(hp) {
    this.hpTag.innerHTML = `Health: ${hp}`;
  }

  getPicked() {
    return this.picked;
  }

  resetPicked() {
    this.picked = undefined;
  }

  getHpTag() {
    return this.tag.querySelector(".hp");
  }
}

const player = new Choice("PLAYER", playerBody, warriorClass);
const enemy = new Choice("ENEMY", enemyBody, warriorClass);

accept.addEventListener("click", function () {
  console.log(player, player.getPicked(), enemy.getPicked());
  if (player.getPicked() && enemy.getPicked()) {
    const targetEnemyAttack = pickTargetOfEnemy();
    console.log("Враг атакует в " + targetEnemyAttack);
    if (targetEnemyAttack != player.getPicked()) {
      player.increaseHp(-1);
      player.resetPicked();
    }
    checkDeath(player, "losling :(((");
    const check = getProtectionEnemy();
    console.log("враг защищает свой " + check);
    if (playerChooseA != check) {
      enemy.increaseHp(-1);
    }
    checkDeath(enemy.hp, "You win!!!");
    if (enemy.hp == 0 && player.hp == 0) {
      setTimeout(() => {
        alert("Произошел троллинг!!!");
      }, 500);
    }
  }
});

const targets = ["head", "body", "foot"];

function pickTargetOfEnemy() {
  return randomChoice(targets);
}

function getProtectionEnemy() {
  return randomChoice(targets);
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

function randomChoice(array) {
  return array[getRandomInt(array.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
