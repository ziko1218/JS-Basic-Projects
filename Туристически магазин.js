/* function solve(input) {
    let n = Number(input.shift());
let sum = 0;
    for (let index = 0; index < n;  index++) {
        let num = Number(input.shift());
        sum += num;
    }
    console.log(sum);
}
solve([2,5,4]); 


function solve(input) {
const goal = 10000;
let steps = 0;

let currentSteps = input.shift();

while ((currentSteps !== "Going home") && (steps < goal)) {
     
steps += Number(currentSteps);

currentSteps = input.shift();
}

}
solve(["1500","3000","250","1548","2000","Going home","2000"]) 

function solve(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let size = w * l;

    let command = input(shift);
    while (command !== 'STOP') {
        let piece = Number(command);
        size -= piece;
        if (size < 0) {
            break;
            
        }
        command = input.shift();
    }
    if (command === 'STOP') {
        console.log(` ${size} pieces are left.`)
    } else {
        console.log (`No more cake left! You need ${Math.abs(size)} pieces more.`)
    }
}
solve([7]) 
*/
function solve(input) {
    let juryCount = Number(input[0]);
    let presentationName = input[1];
    let nextIndex = 2;

    let counter = 0;
    let sumOfAllAvarageGrade = 0;

    while (presentationName !== 'Finish') {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            let grade = Number(input[nextIndex]);
            sum += grade;
            nextIndex++;
        }
        let avarageGrade = sum / n;
        console.log(` ${presentationName} - ${avarageGrade.toFixed(2)}. `);
        sumOfAllAvarageGrade += avarageGrade;
        presentationName = input[nextIndex];
        nextIndex++;
        counter++;
    }
}
solve([5, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"])  
/*
function magicNumber(input) {
    let n = Number(input[0]);
let result = "";
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                        result +="" + a + b + c + d + " ";
                        
                    }
                }
            }
        }
    }
    console.log(result);
}
magicNumber([3]); */
/*
===============================================================================================
function solve(input) {
    let name = input.shift();
    let countGames = Number(input.shift());
    let totalScore = 0;

    let volleyballGamesscore = 0;
    let volleyballGameCounnter = 0;

    let tennisGamescore = 0;
    let tennisCounter = 0;

    let badmintonGamesScore = 0;
    let badmintonGamesCounter = 0;
    for (let i = 1; i <= countGames; i++) {
        let gameName = input.shift();
        let score = Number(input.shift());

        switch (gameName) {
            case 'volleyball':
                score += score * 0.07;
                volleyballGameCounnter++;
                volleyballGamesscore += score;
                break;
            case 'tennis':
                score += score * 0.05;
                tennisCounter++;
                tennisGamescore += score;
                break;
            case 'badminton':
                score += score * 0.02;
                badmintonGamesCounter++;
                badmintonGamesScore += score;
                break;
        }
        totalScore += score;
    }
    let volleyballTotalScore = Math.floor(volleyballGamesscore / volleyballGameCounnter);
    let tennisTotalScore = Math.floor(tennisGamescore / tennisCounter);
    let badmintonTotalScore = Math.floor(badmintonGamesScore / badmintonGamesCounter);
    if (volleyballTotalScore >= 75 && tennisTotalScore >= 75 && badmintonTotalScore >= 75) {
        console.log(`Congtats, ${name}! You won the cruise games with ${Math.floor(totalScore)}.`)
    } else {
        console.log(`Sorry, ${name}, you lost.Your points are only ${Math.floor(totalScore)}.`)
    }
}
solve(['Tseko', 7, 'volleyball', 70, 'tennis', 100, 'badminton', 64,'volleyball',125,'tennis', 62,'tennis',72,'badminton',87]);

============================================================================================= */
/*
function luckyNumbers(arr) {
    let index = 0;
    let ballNumber = Number(arr[index]);
    let ballsLessandEqualto20Count = 0;
    let ballsMorethan20Count = 0;
    
    for (i = arr[index]; i <= 42; i++) {
        
        if (arr[index] <= 20) {
            ballsLessandEqualto20Count++;
            ballNumber++;
            ballNumberLess20 = ballNumber;
            //console.log(ballNumberLess20);
            //ballNumber++;
            //ballNumber = input[index];
        }
        else {
            ballsMorethan20Count++;
            ballNumberMore20 = ballNumber;
            //console.log(ballNumberMore20);
            //ballNumber = input[index];
        }
        index++;
    }
    console.log(`Numbers of Balls with numbers more than 20 are ${ballsLessandEqualto20Count}--->${ballNumberMore20} in range of 100`);

    console.log(`Numbers of Balls with numbers less or equal to 20 are ${ballsMorethan20Count}--->${ballNumberLess20}`);
}
luckyNumbers([3, 15, 18, 20, 23, 25, 38, 42]); */
