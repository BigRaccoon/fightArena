// const { warriorClass, berserkClass, wizzardClass } =
//   require("./classes.js").default;
// Classes.js
// class Fighter {
//   constructor(name, hp, attack) {
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
//   }
// }

// const warriorClass = new Fighter("warrior", 3, 1);
// const berserkClass = new Fighter("berserk", 1, 2);
// const wizzardClass = new Fighter("wizzard", 2, 1);
// console.log(warriorClass);

//Переход между страницами
const firstPageBtn = document.querySelector(".mainMenuButton");
firstPageBtn.addEventListener("click", () => {
  if (playerFighter) {
    window.location.href = "fightArena.html";
  }
});

//Выбор бойца
const fighters = document.querySelectorAll(".fighterPhoto");
const warrior = document.querySelector("#warrior");
const berserk = document.querySelector("#berserk");
const wizzard = document.querySelector("#wizzard");

//Переменная которая хранит бойца
let playerFighter;

choosingFighter(warrior);
choosingFighter(berserk);
choosingFighter(wizzard);

function choosingFighter(fighterClass) {
  fighterClass.addEventListener("click", function () {
    playerFighter = fighterClass.id;
    console.log(playerFighter);
    alert(`Вы выбрали класс: ${playerFighter}`);
  });
}

if (playerFighter == "warrior") {
  playerFighter = warriorClass;
} else if (playerFighter == "berserk") {
  playerFighter = berserkClass;
} else if (playerFighter == "wizzard") {
  playerFighter = wizzardClass;
} else {
  console.log("Что-то пошло не так?");
}
