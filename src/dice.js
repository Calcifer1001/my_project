function rollDie(faces) {
    return Math.floor(Math.random() * faces + 1)
}

function rollDice(faces, qty) {
    let result = []
    for (let i = 0; i < qty; i++) {
        result.push(rollDie(faces))
    }
    return result
}

function sumRoll(results) {
    return results.reduce((acc, curr) => acc + curr)
}


module.exports = {
    rollDice,
    sumRoll
}