// ====================================
// 1_1
// ====================================

const PI = Math.PI;
console.log(PI)

let roundedPi = (PI.toFixed(2))
console.log(roundedPi)

let roundedPiNumber = Number(roundedPi)
console.log(roundedPiNumber)

// ====================================
// 1_2
// ====================================

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

for (i = 0; i < array.length; i++) {
    let roundedArray = Math.round(array[i]);
    console.log(roundedArray)
}

// ====================================
// 1_3
// ====================================

const randomNum = Math.random();
const randomNum1_10 = Math.round(Math.random() * 10);
const randomNum1_100 = Math.round(Math.random() * 100);

console.log(randomNum)
console.log(randomNum1_10)
console.log(randomNum1_100)

// ====================================
// 2_1
// ====================================
let Zahl;
let Genauigkeit;
function roundTo(Zahl, Genauigkeit) {
    return (Zahl).toFixed(Genauigkeit);
}

console.log(roundTo(3.141592653589793, 5));

// ====================================
// 2_1
// ====================================

let userInput = prompt("For exercise 2_1: Pick a number between 1-10. If you pick the same number as the computer, you win!")
let computerNumber = Math.ceil(Math.random() * 10)
console.log(Number(userInput), computerNumber)

if (Number(userInput) === computerNumber) {
    console.log(`You win! You and the computer both chose: ${computerNumber}`)
} else {
    console.log(`You lose, the computer chose: ${computerNumber}`)
}
