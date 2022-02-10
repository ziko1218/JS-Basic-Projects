function solve(input) {
    let vacation = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzelsPrise = puzzels * 2.60;
    let dollsPrise = dolls * 3;
    let teddyBearsPrise = teddyBears * 4.10;
    let minionsPrise = minions * 8.20;
    let trucksPrise = trucks * 2;

    let totalToysCount = puzzels + dolls + teddyBears + minions + trucks;
    let sumProfit = puzzelsPrise + dollsPrise + teddyBearsPrise + minionsPrise + trucksPrise;
    

    if (totalToysCount >= 50) {
        sumProfit = sumProfit * 0.75;
         }
         sumProfit *= 0.90;
    if (sumProfit >= vacation) {
        let moneyleft = sumProfit - vacation;
        console.log(`Yes! ${(moneyleft).toFixed(2)} lv left.`);
    } else {
        moneyNeeded = vacation - sumProfit;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
   }
//solve(["40.8","20","25","30","50","10"]);
solve(["320", "8", "2", "5", "5", "1"]);