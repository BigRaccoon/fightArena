console.log("Hello worlds");

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
