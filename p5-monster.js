/*
    CIT 281 Project 5
    Name: Sierra Baker
*/
class Monster {
  constructor({
    monsterName = "Unknown",
    minimumLife = "0",
    currentLife = "100",
  }) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife ? true : false;
  }

  // // updateLife():
  // // Accepts an integer, lifeChangeAmount, that represents the amount of life change,
  // either positive or negative. If the monster currentLife amount drops below 0, set the
  // currentLife to 0. If currentLife < minimumLife, set isAlive to true.
  // // Your code MUST not use  any if() statements, using one line statement
  // constructions, such as the ternary operator ( ? : ).



//   updateLife = () => Math.floor(Math.random() * (200- 0) + 0);
// }
// console.log(updateLife);

// updateLife = () => lifeChangeAmount = Math.floor(Math.random() * (200- 0) + 0)isAlive? positive:negative;
// }
// console.log(updateLife);

// updateLife = () => this.currentLife =< this.minimumLife ?: Math.floor(Math.random() * (200 - 0) + 0);
// }
// console.log(updateLife);

updateLife(currentLife < 0 ? "Dead" : (currentLife < minimumLife ? true:;

// const  = 20;
// if(currentLife < 0){
//     console.log("Dead);
// } else {
//     console.log("Alive");
// }
// if(currentLife < minimumLife){
//     console.log("True");
// }

// randomLifeDrain():
// Accepts two integers, minimumLifeDrain and maximumLifeDrain, 
// where mimimumLifeDrain must be < maximumLifeDrain
// Calls updateLife() class method to deduct a randomly generated integer 
// between minimumLifeDrain and maximumLifeDrain using getRandomInteger() method 
// used in previous labs and projects. Don't forget to add one to maximumLifeDrain 
// before calling getRandomInteger().
// Your code must use a template literal for any console.log() statements.

  function randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    return Math.floor(Math.random() * (maximumLifeDrain - minimumLifeDrain) + minimumLifeDrain;
  }

  let drain = getRandomInteger(1, 100);
  
  for (let i = 0; i < drain.length; i++) {
    result += drain[updateLife(0, drain.length)];
  }
  console.log(`Drain: ${randomLifeDrain}}`)

