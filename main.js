const reset = document.getElementById("reset-button")
var container = document.getElementById("die-list")
const reveal = document.getElementById("reveal")
var total = document.getElementById("total")
const roll = document.getElementById("roll-button")
let dieRolls = []

reset.addEventListener("click", function() {
    alert("Roller reset!")
    container.innerHTML = ""
    total.innerHTML = ""
    dieRolls = []
    console.clear()
})

roll.addEventListener("click", function () {
    dieRolls = []
    container.innerHTML = ""
    var diceNum = document.getElementById("dice-amount").value
    var diceSides = document.getElementById("dice-sides").value
    for (let i = 0; i < diceNum; i++) {
        var diceMath = Math.floor((Math.random() * diceSides) + 1)
        dieRolls.push(diceMath)
        total.innerHTML = dieRolls.reduce((a, b) => a + b, 0)
        console.log(dieRolls[i])
        i++
    }
})

reveal.addEventListener("click", function () {
    container.innerHTML = ""
    var diceNum = document.getElementById("dice-amount").value
    console.log("Dice revealed")
    for (let i = 0; i < diceNum; i++) {
        container.innerHTML += '<li class="dice">' + dieRolls[i] + '</li>'
    }
})
