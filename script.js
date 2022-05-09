'use strict';

let p1Score = document.getElementById("score--0")
let p2Score = document.getElementById("score--1")
let rolldiceBtn = document.getElementById("rollbtn")
let dice = document.querySelector(".dice")
let currentScorep1 = document.getElementById("current--0")
let currentScorep2 = document.getElementById("current--1")
let holdbtn = document.getElementById("hold")
let player1 = document.querySelector(".player player--0")
let player2 = document.querySelector(".player player--1")
let newGame = document.getElementById("reset")

p1Score.textContent = 0
p2Score.textContent = 0

let scores = [0, 0]
let activePlayer = 0


rolldiceBtn.addEventListener("click", function(){
    let randomNum = Math.round((Math.random() * 5))
    let possibleDiceOutcomes = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"]
    

    if (randomNum == 0 && activePlayer == 0){
        activePlayer = 1
        scores[0] = 0
        dice.src = possibleDiceOutcomes[0]
        currentScorep1.textContent = scores[0]

    } else if (randomNum == 1 && activePlayer == 0) {
        dice.src = possibleDiceOutcomes[1]
        scores[0] += 2
        currentScorep1.textContent = scores[0]

    } else if (randomNum == 2 && activePlayer == 0) {
        dice.src = possibleDiceOutcomes[2]
        scores[0] += 3
        currentScorep1.textContent = scores[0]

    } else if (randomNum == 3 && activePlayer == 0) {
        dice.src = possibleDiceOutcomes[3]
        scores[0] += 4
        currentScorep1.textContent = scores[0]

    } else if (randomNum == 4 && activePlayer == 0) {
        dice.src = possibleDiceOutcomes[4]
        scores[0] += 5
        currentScorep1.textContent = scores[0]

    } else if (randomNum == 5 && activePlayer == 0) {
        dice.src = possibleDiceOutcomes[5]
        scores[0] += 6
        currentScorep1.textContent = scores[0]

    } else if (randomNum == 0 && activePlayer == 1) {
        activePlayer = 0
        scores[1] = 0
        dice.src = possibleDiceOutcomes[0]
        currentScorep2.textContent = scores[1]

    } else if (randomNum == 1 && activePlayer == 1) {
        dice.src = possibleDiceOutcomes[1]
        scores[1] += 2
        currentScorep2.textContent = scores[1]

    } else if (randomNum == 2 && activePlayer == 1) {
        dice.src = possibleDiceOutcomes[2]
        scores[1] += 3
        currentScorep2.textContent = scores[1]

    } else if (randomNum == 3 && activePlayer == 1) {
        dice.src = possibleDiceOutcomes[3]
        scores[1] += 4
        currentScorep2.textContent = scores[1]

    } else if (randomNum == 4 && activePlayer == 1) {
        dice.src = possibleDiceOutcomes[4]
        scores[1] += 5
        currentScorep2.textContent = scores[1]

    } else if (randomNum == 5 && activePlayer == 1) {
        dice.src = possibleDiceOutcomes[5]
        scores[1] += 6
        currentScorep2.textContent = scores[1]
    } 
})

holdbtn.addEventListener("click", function(){
    if (activePlayer == 0) {
        console.log("player2 is now active")
        activePlayer = 1
        p1Score.textContent = scores[0]

    } else if (activePlayer == 1) {
        console.log("player1 is now active")
        activePlayer = 0
        p2Score.textContent = scores[1]
    }
})

newGame.addEventListener("click", function() {
    scores = [0, 0]
    activePlayer = 0
    currentScorep1.textContent = 0
    currentScorep2.textContent = 0
    p1Score.textContent = 0
    p2Score.textContent = 0
})