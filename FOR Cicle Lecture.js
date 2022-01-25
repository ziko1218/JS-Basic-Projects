/*let a = 5;
switch (a) {
    case 5:
    case 6:
        a = a + 1;
        break;
    default:
        a = a + 2;
        break;
}
console.log(a);

// console.log(!(5==5) && (4+1 == 5));

// console.log (!(3>5) || (1 == 1));

let number = 101;
if (number>=1)
console.log('Larger than 1');
if (number <= 101)
console.log('Less than 101');
console.log('Equal to 101');

for (let i = 1; i<= 12 ; i++ ) {
    console.log(i);
}

function solve(){
    let a = 1;
console.log(++a);
console.log(a);
}
solve();

let a = 1;
//a++; // a = a + 1;
console.log(++a);
console.log(a);

function solve (arg) {
  let n = Number(arg);
  for (let i = 1; i <= n ; i= i+3) {
  console.log(i);
  }
}
solve(10);

function solve (arg) {
    let n = Number(arg);
    for (let i = 0; i <= n ; i +=2 ) {
    console.log(i);
    }
  }
  solve(10);  */
/*
  function solve (arg) {
    let text = arg;
    for(let i = 0; i < text.length ; i++)
    console.log(text[i]);
    }
  solve('ЦСКА') */

/*function solve (arg) {
  let word = arg;
  let sum = 0;
  for(let i = 0; i < word.length ; i++){
  console.log(text[i]);
  let ch = word.charAt(i);

  }
}
  solve() */
/*
function solve(arg) {
  let textNumber = arg + ''; // OR let textNumber = string(arg)
  for (let i = 0; i < textNumber.length; i++) {
    let currentNum = Number(textNumber[i]);
    sum += currentNum;
  }
  console.log(sum)
}
  solve('1234') */


/*
function solve(arg1, arg2) {
let startNumber = Number(arg1);
let endNumber = Number(arg2);
let sum = 0;
let printResult = '' ;
for (let i = startNumber; i <= endNumber; i++) {
  if (i % 9 === 0) {
    sum += i;
    console.log(i);
    printResult += i + ' ';
  }

}

console.log(sum);
console.log(printResult)
}
solve('100','200'); */

//* 
// Изпитна Задача !
/*
function solve(arg1, arg2, arg3) {
  let age = Number(arg1);
  let priceWashingMashine = Number(arg2);
  let priceToy = Number(arg3);
  let sumMoney = 0;
  let toy = 0;
  let money = 10;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      sumMoney += money - 1;
      money += 10;
    } else {
      toy++;
    }
  }
  console.log(sumMoney);
  console.log(toy);
  sumMoney += toy * priceToy;
  console.log(sumMoney);
  if (sumMoney - priceWashingMashine >= 0) {
    console.log(`Yes! ${(sumMoney - priceWashingMashine).toFixed(2)}`)
  } else {
    console.log(`No ${(priceWashingMashine - sumMoney).toFixed(2)}`)
  }
}
solve('21', '1570.98', '3');



function solve() {
let oneLine = ''
for (let num = 1; num <= 15 ; num++)
oneLine += num + ' ' ;
console.log (oneLine);
//console.log(num);
}
solve('30'); */
// ========================================================= 
/*
function solve(highYear, randomYear) {
  highYear = Number(highYear);
  randomYear = Number(randomYear);
  //let year = 0;
  for (let year = highYear; year <= randomYear; year += 4)
    console.log(year);
}
solve('2000', '2020') */
// =====================================================
/*
function factorial(n) {
  n = Number(n);
  let product = 1;
  for (let i = n; i >= 2; i--) {
    product *= i;
  }
  console.log(product);
}
factorial('8'); 

//============================================================
function solve(message) {
  let words = 1;
  for (let i = 0; i < message.length; i++) {
    let symbol = message[i];
    if (symbol === ' ') {
      ++words;
    }
  }
  if (words <= 10) {
    console.log("The message was send successfully!")
  } else {
    console.log(`The message is too long to be send! Has ${words} words.`)
  }
}
solve("This message has exactly eleven words. One more as it's allowed!")

//===================================================================================

function solve(fuelLiters, fuelUsedForFirstLab, totalLaps) {
  fuelLiters = Number(fuelLiters);
  fuelUsedForFirstLab = Number(fuelUsedForFirstLab);
  totalLaps = Number(totalLaps);
const delta = fuelUsedForFirstLab - 0.1;
  for (let lap = 0; lap < totalLaps; lap++) {
    fuelLiters -= delta;
    if (fuelLiters <= 0) { console.log(`You are out of fuel in round ${lap}`); break;}
  }
  if (fuelLiters > 0) {
    console.log('Congrats ! You have finished the race');
  }
}
solve('50', '4.3', '30'); 
*/ 
