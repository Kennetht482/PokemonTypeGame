

const types = ["normal", "fire", "water", "grass", "electric", "ice","fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]
var answer = -1
var type1 = 0;
var type2 = 0;
var score = 0;

// 0 -> super effective
// 1 -> neutral
// 2 -> not very effective
// 3 -> no effect
const matchups = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 2, 1],
    [1, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 0, 2, 1, 2, 1, 0, 1],
    [1, 0, 2, 2, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1],
    [1, 2, 0, 2, 1, 1, 1, 2, 0, 2, 1, 2, 0, 1, 2, 1, 2, 1],
    [1, 1, 0, 2, 2, 1, 1, 1, 3, 0, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 2, 2, 0, 1, 2, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 2, 1],
    [0, 1, 1, 1, 1, 0, 1, 2, 1, 2, 2, 2, 0, 3, 1, 0, 0, 2],
    [1, 1, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 3, 0],
    [1, 0, 1, 2, 0, 1, 1, 0, 1, 3, 1, 2, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 2, 1, 0, 1, 1, 1, 1, 0, 2, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 1, 1, 3, 2, 1],
    [1, 2, 1, 0, 1, 1, 2, 2, 1, 2, 0, 1, 1, 2, 1, 0, 2, 2],
    [1, 0, 1, 1, 1, 0, 2, 1, 2, 0, 1, 0, 1, 1, 1, 1, 2, 1],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 3],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 0, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1]
]

function resetGame() {
    if(score == 10) {
        finishGame()
    }
    displayPoints(score)
    type1 = Math.round(17 * Math.random())
    type2 = Math.round(17 * Math.random())
    // console.log(t1, t2)
    // let attack = types[t1] + ".png"
    // let defend = types[t2] + ".png"
    // console.log(attack, defend)
    document.getElementById("attack").src = types[type1] + ".png"
    document.getElementById("defend").src = types[type2] + ".png"


    document.getElementById("type1").innerHTML = types[type1]
    document.getElementById("type2").innerHTML = types[type2]
    
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function startGame() {
    window.scrollTo(0, 1200)
    type1 = Math.round(17 * Math.random())
    type2 = Math.round(17 * Math.random())
    document.getElementById("attack").src = types[type1] + ".png"
    document.getElementById("defend").src = types[type2] + ".png"
    document.getElementById("type1").innerHTML = types[type1]
    document.getElementById("type2").innerHTML = types[type2]
}

function displayPoints(points) {
    let element = document.getElementById("points");
    element.innerHTML = "points: " + points
}


function superEffective() {
    answer = 0
    if(checkAnswer(answer, type1, type2)) {
        score = score + 1
        resetGame()
    }
}
function neutral() {
    answer = 1
    if(checkAnswer(answer, type1, type2)) {
        score = score + 1
        resetGame()
    }
}
function notVeryEffective() {
    answer = 2
    if(checkAnswer(answer, type1, type2)) {
        score = score + 1
        resetGame()
    }
}
function noEffect() {
    answer = 3
    if(checkAnswer(answer, type1, type2)) {
        score = score + 1
        resetGame()
    }
}

function checkAnswer(guess, type1, type2) {
    if(guess == matchups[type1][type2]) {
        console.log("CORRECT")
        return true
    }
    else {
        console.log("INCORRECT")
        return false
    }
}


function finishGame() {
    location.href="https://www.youtube.com/watch?v=xm3YgoEiEDc"
}