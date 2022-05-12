// const { warriorClass, berserkClass, wizzardClass } =
//   require("./classes.js").default;

import { warriorClass, berserkClass, wizzardClass } from "./classes.js";

console.log(warriorClass);
let namePlayer = prompt("Wha's your name?");
//Переход между страницами
const firstPageBtn = document.querySelector(".mainMenuButton");
firstPageBtn.addEventListener("click", () => {
  if (playerFighter) {
    // window.location.href = "./fightArena.html";
    window.scroll({ top: 1000, behavior: "smooth" });
  }
});

const fighters = document.querySelectorAll(".fighterPhoto");
const warrior = document.querySelector("#warrior");
const berserk = document.querySelector("#berserk");
const wizzard = document.querySelector("#wizzard");
const weather = document.querySelector(".weatherInfo");
const wind = document.querySelector(".windInfo");

//Выбор бойца
//Переменная которая хранит бойца

let playerFighter;
let player;
let playerChooseP, playerChooseA;

warrior.addEventListener("click", function () {
  shortChange(warriorClass);
});

berserk.addEventListener("click", function () {
  shortChange(berserkClass);
});

wizzard.addEventListener("click", function () {
  shortChange(wizzardClass);
});

window.onload = function () {
  weatherInfo();
};

function shortChange(classFighter) {
  playerFighter = event.target.id;
  console.log(playerFighter);
  alert(`Вы выбрали класс: ${playerFighter}`);
  playerFighter = classFighter;
  console.log(playerFighter);
  player = new Choice("PLAYER", playerBody, playerFighter);
}
console.log(player);
function weatherInfo() {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?id=1835847&appid=80848d57bcc832eae6ba82dfc0786c99`;

  fetch(urlWeather)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      weather.innerHTML = `Now is ${Math.round(
        data.main.temp - 273.15
      )} Celcius, `;
      wind.innerHTML = `Wind speed: ${Math.round(
        data.wind.speed
      )} m/s,  Visibility: ${Math.round(data.visibility / 1000)} km`;
    })
    .catch(function () {});
}

///////////////////////////////////////////////
const enemyBody = document.querySelector(".enemyBody");
const playerBody = document.querySelector(".yourBody");
const accept = document.querySelector(".arenaButton");

const nameInArea = document.querySelector(".areaName");
nameInArea.innerHTML = `${namePlayer}`;

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

const enemy = new Choice("ENEMY", enemyBody, warriorClass);

accept.addEventListener("click", function () {
  console.log(player);
  console.log(player, player.getPicked(), enemy.getPicked());
  if (player.getPicked() && enemy.getPicked()) {
    const targetEnemyAttack = pickTargetOfEnemy();
    console.log("Враг атакует в " + targetEnemyAttack);
    if (targetEnemyAttack != player.getPicked()) {
      player.increaseHp(-1);
      player.resetPicked();
    }
    checkDeath(player.hp, "losling :(((");
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
    }, 200);
    restart();
  }
}

function randomChoice(array) {
  return array[getRandomInt(array.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
