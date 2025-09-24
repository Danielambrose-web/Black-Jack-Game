/*let count = 0;  // Initialize count to 0 for array indexing
let cards = ['firstCard', 'secondCard', 'essens', 'hesusidfm', 'egbc'];

// Remove last element - pop() doesn't need an argument
cards.pop();
console.log(cards.length);
cards.push('nwe', 'dF', 'dfv');

// Correct for loop syntax to iterate through array
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}


let player1Time = 108;
let player2Time = 107;

function getFastestRaceTime(){
    if (player1Time < player2Time) {
        return player1Time;}
    else if (player2Time < player1Time) {
        return player2Time;}
    else {
        return player1Time;}     
    }

    let fstestRaceTime = getFastestRaceTime();
    console.log(fstestRaceTime);*/

/* racer1Time = 102;
 racer2Time = 107;
 racer3Time = 101;   

 function racersTotalTime(){
     return racer1Time + racer2Time + racer3Time;
 }

 let totalTime = racersTotalTime();
 console.log(totalTime);
let free = []

let ranDom = Math.random()
console.log(ranDom)
let geneR = ranDom
free.push(geneR)
console.log(free)

let randomNumber =Math.floor(Math.random()*6.1) +1
console.log(randomNumber)

let daniel = 'come' 
let same = 'global'

if (daniel === 'come' && same|| 'gloal'){
       console.log('so & WORKED')
}


let castle = {
    location: 'Germany',
    squareMeters: 3000,
    isPainted: true,
    numberOfTowers: 5,  
    owners:['daniel', 'maria', 'sara'],
    call(){
        return 'castle is  located'// +' 'castle.location
    }
}

console.log(castle.location)
console.log(castle['numberOfTowers'])  
console.log(castle.owners[1] +' '+ castle.owners[0])

console.log(castle.call())

let player = {
    name: 'daniel',
    age :20,
    country : 'nigeria',
    logData(){
    return player.name + ' is ' + player.age + ' years old and lives in ' + player.country
}
}
console.log(player.logData())*/
playerEl = document.querySelector('#player-el')

let input = document.getElementById('user-el')
input.addEventListener('input', function () {
    let age = Number(input.value);
    checkAge(age)

})


function checkAge(age) {
    if (age < 5) {
        message = 'free'
    } else if (age > 6 && age < 17) {
        message = 'child discount'
    } else if (age > 18 && age < 26) {
        message = 'student discount'
    } else if (age > 27 && age < 66) {
        message = 'full price'
    } else {
        message = 'senior citizen price'
    }


    playerEl.textContent = message
}
