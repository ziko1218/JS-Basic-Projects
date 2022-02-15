/*
let i = 0;

while (i < 6) {
    i++;
    if (i % 2 == 0)
    console.log (i);
    }
*/

// ==================================================
/*
function solve() {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            console.log(`H -> ${i} : M -> ${j}` );
        }
    }
}
solve();
*/

// =================================================== 

// Bulean Flag е да се провери ДАЛИ ДАДЕНО СЪБИТИЕ Е НАСТЪПИЛО и маркираме.
// В случая започваме с false защото събитието още не се е случило.
/*
   function solve() {
let isBreak = false;
for (let i = 0; i < 10; i++) {
    if(isBreak) {
        break;
    }
    for (let z = 1; z < 10; z++) {
        let result = i * z;
        if (z == 5) {
            isBreak = true;
            break;
        }
        console.log (`${i} * ${z} = ${result}`)
    }
}
   }
   solve ();
*/
// ====================================================================== Сума от 2 числа =========================
/* 
function solve(input) {
let startNumber = Number (input[0]);
let endNumber = Number (input[1]);
let magicNumber = Number (input[2]);
let isFound = false;
let counter = 0;
for (let i = startNumber; i < endNumber; i++) {
    if (isFound) {
        break;
    }
    for (let j = startNumber; j < endNumber; j++) {
        counter++;
        if (i + j == magicNumber){
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        isFound = true;
        break;
          }
        }
    }
    if(!isFound){
        console.log (`${counter}combinations - neither equals ${magicNumber}`);
    }
}
    solve([1,10,5])
    solve([23,24,20])
    */

//================================================== Сграда =====================================
/*
function solve(input) {
    let floor = Number(input[0]);
    let apartment = Number(input[1]);

    for (let i = floor; i > 0; i--) {
        let result = "";     // За да печатим на един ред създаваме първо тази променлива и след това ще я съберем с i и j като result.
        //console.log(`${i} ->  ${j}`) ...................................  result += i + '' + j + '';
        for (j = 0; j < apartment; j++) {
            if (floor == i) {
                result += `L${i}${j} `;
            }
            else if (i % 2 == 0) {
                result += `O${i}${j} `;
            } else {
                result += `A${i}${j} `;
            }
        }
        console.log(result);
    }
}
solve([6, 4])
*/

// ======================================================== Коледен Турнир ======================================
/*
function solve(input) {
    let index = 0;
    let day = Number(input[index]);
    index++;
    let sumMoney = 0;
    let tempMoney = 0;
    let countWin = 0;
    let countLose = 0;
    let totalWin = 0;
    let totalLose = 0;
    for (let i = 0; i < day; i++) {
        let command = input[index];
        index++;
        while (command !== "Finish") {
            //let typeSport = command;
            let score = input[index];
            index++;
            if (score === 'win') {
                tempMoney += 20;
                countWin++;
            } else {
                countLose++;
            }
            command = input[index];
            index++;
        }
        if (countWin > countLose) {
            tempMoney *= 1.10;
            totalWin++;
        } else {
            totalLose++;
        }
        sumMoney += tempMoney;
    }
    if (totalWin > totalLose) {
        sumMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${sumMoney.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${sumMoney.toFixed(2)}`)
    }
}

solve(['2',
    'volleyball', 'win',
    'football', 'lose',
    'basketball', 'win',
    'Finish',
    'golf', 'win',
    'tennis', 'win',
    'badminton', 'win',
    'Finish']) 
    */

//========================================================== Билети за Кино =================================
/*
function solve(arr) {
    let typeTicket = index[arr];
    typeTicket++;
    let procentageFull = 0;
    let totalTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    let studentTickets = 0;
    let i = 0;
    let command = index[arr];
    i++;
}
while (arr[i] !== 'End') {
    let movieTitle = arr[i]
    let places = arr[++i];
    let movieTickets = 0;
    while (arr[i] != 'End' && arr[i] != 'Finish') {
        if(arr[i] == 'Finish')
        totalTickets++;
        movieTickets++;
        switch (arr[i]) {
            case 'student':
                studentTickets += 1;
                break;
            case 'standard':
                standartTickets += 1;
                break;
            case 'kid':
                kidsTickets += 1;
                break;
        }
    i++;
    }
    procentageFull = ((movieTickets / places)*100).toFixed(2);
    console.log(`${movieTitle} - ${movieTickets}% full`)
    i++;
    if (i == arr.length) {
        break;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((studentTickets / totalTickets)*100).toFixed(2)}% standart tickets.`);
    console.log(`${((kidsTickets / totalTickets)*100).toFixed(2)}% kid tickets.`);
}
solve([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
])
solve(arr);   */

//========================================================== Билети за Кино 2 NEW and Better *************************** =================================
function solve(input) {
    let filmName = input.shift();
    let standartTickets = 0;
    let kidsTickets = 0;
    let studentTickets = 0;
    let totalTickets = 0;
    while (filmName !== 'Finish') {
        let seats = Number(input.shift());
        let people = 0;
        let ticket = input.shift();
        // standartTickets = 0;
        // kidsTickets = 0;
        // studentTickets = 0;
        while (ticket !== 'End') {
            people++;
            totalTickets++;
            switch (ticket) {
                case 'standart':
                    standartTickets++;
                    break;
                case 'student':
                    studentTickets++;
                    break;
                case 'kid':
                    kidsTickets++;
                    break;
            }
            if (seats === people) {
                break;
            }
           ticket = input.shift(); // Четем наново какъв ни е билета защото това изпуснем ли го - безкраен цикъл и Ужас!!!
        }
        let currentPercent = (people / seats) * 100;
        console.log(`${filmName} - ${currentPercent.toFixed(2)}% full`);
        filmName = input.shift();  // Четем наново какъв ни е филма защото пак ще стане безкраен цикъл но този път за външният цикъл !!!
    }
    let studentPercent = (studentTickets / totalTickets) * 100;
    let standartPercent = (standartTickets / totalTickets) * 100;
    let kidPercent = (kidsTickets / totalTickets) * 100;
    console.log(`${studentPercent.toFixed(2)}% student tickets.`)
    console.log(`${standartPercent.toFixed(2)}% standart tickets.`)
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`)
}
solve([
    'Taxi',
    '10',
    'standart', 'kid', 'student', 'student', 'standard', 'standard',
    'End',
    'Scary Movie',
    '6',
    'student', 'student', 'student', 'student', 'student',
    'Finish'])
