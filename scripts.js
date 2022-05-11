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

const fighters = document.querySelectorAll(".fighterPhoto");
const warrior = document.querySelector("#warrior");
const berserk = document.querySelector("#berserk");
const wizzard = document.querySelector("#wizzard");
const weather = document.querySelector(".weatherInfo");
const wind = document.querySelector(".windInfo");

//Выбор бойца
//Переменная которая хранит бойца

let playerFighter;

warrior.addEventListener("click", function () {
  shortChange(warriorClass);
});

berserk.addEventListener("click", function () {
  shortChange(berserkClass);
});

wizzard.addEventListener("click", function () {
  shortChange(wizzardClass);
});

function shortChange(classFighter) {
  playerFighter = event.target.id;
  console.log(playerFighter);
  alert(`Вы выбрали класс: ${playerFighter}`);
  playerFighter = classFighter;
  console.log(playerFighter);
}

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
      )} Celcius `;
      wind.innerHTML = `Wind speed: ${Math.round(
        data.wind.speed
      )} m/s  Visibility: ${Math.round(data.visibility / 1000)} km`;
    })
    .catch(function () {});
}

window.onload = function () {
  weatherInfo();
};

export { playerFighter };
