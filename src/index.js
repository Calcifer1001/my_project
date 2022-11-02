const dice = require("./dice")

console.log("Hello world. Welcome to Kenrou IT. Hope you learn a lot")

console.log("Let's make a dice")

let results = dice.rollDice(6, 3)
let sum = dice.sumRoll(results)

console.log(`Roll ${results}. Sum ${sum}`)