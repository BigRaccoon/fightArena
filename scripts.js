// const { warriorClass, berserkClass, wizzardClass } =
//   require("./classes.js").default;

import { warriorClass, berserkClass, wizzardClass } from "./classes.js";

console.log(warriorClass);

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

//choosingFighter(warrior);
// choosingFighter(berserk);
// choosingFighter(wizzard);
let playerFighter;
warrior.addEventListener("click", function () {
  // console.log(playerFighter);
  // playerFighter = event.target.id;
  // console.log(playerFighter);
  // alert(`Вы выбрали класс: ${playerFighter}`);
  // playerFighter = warriorClass;
  // console.log(playerFighter);
  shortChange(warriorClass);
});

berserk.addEventListener("click", function () {
  // console.log(playerFighter);
  // playerFighter = event.target.id;
  // console.log(playerFighter);
  // alert(`Вы выбрали класс: ${playerFighter}`);
  // playerFighter = warriorClass;
  // console.log(playerFighter);
  shortChange(berserkClass);
});

wizzard.addEventListener("click", function () {
  // console.log(playerFighter);
  // playerFighter = event.target.id;
  // console.log(playerFighter);
  // alert(`Вы выбрали класс: ${playerFighter}`);
  // playerFighter = warriorClass;
  // console.log(playerFighter);
  shortChange(wizzardClass);
});

// berserk.addEventListener("click", function () {
//   playerFighter = event.target.id;
//   console.log(playerFighter);
//   alert(`Вы выбрали класс: ${playerFighter}`);
//   playerFighter = berserkClass;
// });
// wizzard.addEventListener("click", function () {
//   playerFighter = event.target.id;
//   console.log(playerFighter);
//   alert(`Вы выбрали класс: ${playerFighter}`);
//   playerFighter = wizzardClass;
// });

function shortChange(classFighter) {
  playerFighter = event.target.id;
  console.log(playerFighter);
  alert(`Вы выбрали класс: ${playerFighter}`);
  playerFighter = classFighter;
  console.log(playerFighter);
}
export { playerFighter };
// function choosingFighter(fighterClass) {
//   fighterClass.addEventListener("click", function () {
//     playerFighter = event.target.id;
//     console.log(playerFighter);
//     alert(`Вы выбрали класс: ${playerFighter}`);
//   });
// }
// console.log(playerFighter);
// if (playerFighter == warriorClass.name) {
//   playerFighter = warriorClass;
//   console.log(playerFighter);
// } else if (playerFighter == "berserk") {
//   playerFighter = berserkClass;
//   console.log(playerFighter);
// } else if (playerFighter == "wizzard") {
//   playerFighter = wizzardClass;
//   console.log(playerFighter);
// } else {
//   console.log("Что-то пошло не так?");
// }
