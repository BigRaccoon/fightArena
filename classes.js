class Fighter {
  constructor(name, hp, power) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }
}

const warriorClass = new Fighter("warrior", 3, 1);
const berserkClass = new Fighter("berserk", 1, 2);
const wizzardClass = new Fighter("wizzard", 2, 1);

//console.log(warriorClass);

// module.exports = { warriorClass, berserkClass, wizzardClass };

export { warriorClass, berserkClass, wizzardClass };
