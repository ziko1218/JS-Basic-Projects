/*
let a = 5;
while (true) {
    if (a > 10) {
        break;
    }
    console.log('a = ' + a )
    a++;
}  */
/*
function solve(input){
let index = 0;
let word = input[index];
//console.log(word)
index++;
while(word !== 'Bulgaria') {
    
    console.log(word);
    word = input[index];
    index++;
    //index++;
}
}
solve(['Velkov', 'SoftUni', 'Sofia','Bulgaria'])
*/
/*
function credentials(input) {
    let index = 0;
    let user = input[index];
    index++;
    let password = input[index];
    index++;
    let currentPassword = input[index];
    index++;

while (password !== currentPassword) {
        currentPassword = input[index];
        index++;
    }

    console.log(`Welcome ${user} !`);
}
credentials(['Velkov', '1234', "Pass", "1324", '1234'])
*/
/*
function solve(input) {
let index = 0;
let num = Number(input[index])
index++;
let sum=0;
while (sum < num) {
    let currentNummber = Number(input[index]);
    index++;
    sum += currentNummber;
}
console.log(sum)
}
solve (['20','1','2','3','4','5','6'])  */


// 2 К  
/*
function solve(input) {
let n = Number(input[0]);
let k = 1;
while (k <= n) {
    k = k*2 +1 ;
    console.log(k);
    
}
}
solve([3]);    */

// ==================  Баланс на сметка ======================
/*
function solve(input) {
   let total = 0;
   let index = 0;
   let command = input[index];
   // index++;
   while (command !== 'NoMoreMoney') {
       let money = Number(command);
       if (money < 0) {
           console.log('Invalid operation');
           break;
       }
       console.log(`Increase ${money.toFixed(2)}`);
       total += money;
       command = input[index];
       index++;
   }
   console.log(`Total: ${total.toFixed(2)} `)
}
solve(['5.51', '69.42', '100', 'NoMoreMoney'])
 

*/
// =============================== Най голямото число ==================
/*
function solve(input) {
let maxNumber = Number.MIN_SAFE_INTEGER;
let index = 0;
let command = input[index];
index++;
while (command !== 'Stop'){
    let num = Number(command);
    if (num > maxNumber) {
        maxNumber = num;
    }
    command = input[index];
    index++;
}
console.log(maxNumber);
}
solve(["100",'99','80','70','Stop']);
*/

// =========================================== Continue ==============
/*
function solve(input) {
    let i = 0;
    while (i <= 20) {
        if (i % 2 != 0) {
            i++;
            continue;
            //console.log(i);
        }
        console.log(i);
        i++
    }
}
solve();
*/

// ==================================================== Завършване ===================
/*
function solve(input) {
    let index = 0;
    let name = input[index];
    index++;
    let level = 1;
    let score = 0;
    let error = 0;

    while (level <= 12) {
        grade = Number(input[index]);
        index++;
        score += grade;
        if (grade >= 4.00) {
            level++;
        } else {
            error += 1;
            if (error > 1) {
                console.log(` ${name} has been excluded at ${level.toFixed(2)} grade`)
                break;
            }
        }
        if (level > 12) {
            let avgGrade = score / 12;
            console.log(` ${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
        }
    }
}
solve(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6', '5.43', '5']);
*/


//=========================================== Преместване ============================

function solve(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let cubicMeters = w * l * h;
    let command = input[index];
    index++;

    let isFreeSpace = true;
    while (command !== 'Done') {
        let box = Number(command);
        cubicMeters -= box;
        command = input[index];
        index++;
        if (cubicMeters < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(cubicMeters)} Cubic meters more`)
            break;
        }
        command = input[index];
        index++;
        if (isFreeSpace) {
            console.log(`${cubicMeters} Cubic meters left.`);
        }
    }
}
solve(['10', '10', '2', '20', '20', '20', '20', '120']);
 




