/*
function findingCSKA(input) {

    let club = input[0];
    let capacityCL = Number(input[1]);

    let checkTeams = 0;
    let isFound = false;

    let index = 2;
    while (checkTeams < capacityCL) {
        
        let currentClub = input[index];

        if (currentClub === club) {
            console.log(`You have searched ${checkTeams +1} and found the your club ЦСКА in CL:)`)
            isFound = true;
            break;
        }
        index++;
        checkTeams++;
    } if (!isFound) {
        console.log(`You checked ${capacityCL} and your club is not in CL`)
    }
}
findingCSKA(['CSKA', 25, 'Steaua', 'Real', 'Atletico', 'Barcelona', 'Inter', 'Milan', `CSKA`, 'Galatasaray']);
//=================================================================
function solve () {
let countSubjects = Number(input[0]);



}
solve([4, 'Math', 6.00, 5.50, 'Chemistry', 5.84, 5.66, "Phisic",4.00,6.00,'English', 5.50,6.00, "Finish"]);



//============================================================================

function decoration(input) {

    let budget = Number(input.shift());
    let inputLine = input.shift();
    let isEverythingOK = true;
    while (inputLine !== "Stop") {
        let sum = 0;
        let decoration = inputLine;
        for (index = 0; index < inputLine.length; index++){
            let char = decoration[index];
            sum += char.charCodeAt();
            //char.charCodeAt();
        }
        //debugger;
        if (budget >= sum) {
            budget -= sum;
            console.log(`Item successfully purchased`);
            inputLine = input.shift();
        } else {
            isEverythingOK = false;
            break;
        }
        
    }
    if (isEverythingOK) {
        console.log(`Money left: ${budget}`);
    } else {
        console.log(`Not enough money`)
    }
}
decoration([3000, "star", "Christmas tree", "tinsel", "Tree stand"])

//======================================================================================
*/
function decoration(input) {

    let budget = Number(input.shift());
    let command = input.shift();
    let isOK = true;
    while (command !== "Stop") {
        let item = command;
        let sum = 0;
        for (let index = 0; index < command.length; index++) {
            let charakter = item[index];
            sum += charakter.charCodeAt();
        }

        if (sum <= budget) {
            console.log("Item purchased")
            command = input.shift();
        } else {
            isOK = false;
            break;
        }
    }
    if (isOK) {
        console.log(` Money Left ..........`)
    } else {
        console.log(` No money `)
    }
}
decoration([3000, "star", "Christmas tree", "tinsel", "Tree stand"])

