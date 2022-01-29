function solve(vacationPrise,puzzels,dolls,teddyBears,minions,trucks) {
    vacationPrise = Number(vacationPrise);
    puzzelsPrise = Number(puzzels)* 2.60;
    dollsPrise = Number(dolls) * 3;
    teddyBearsPrise = Number(teddyBears) * 4.1;
    minionsPrise = Number(minions) * 8.2;
    trucksPrise = Number(trucks) * 2;
    let sumProfit = puzzelsPrise + dollsPrise + teddyBearsPrise + minionsPrise + trucksPrise;
    let totalToysCount = puzzels + dolls + teddyBears + minions + trucks;
    // =====================================================
   
    if (totalToysCount >= 50) {
        let discount = sumProfit * 0.25;
        earned  = sumProfit - discount;
          } 
        let rent = earned * 0.1;
        left = earned - rent;
    if (earned >= vacationPrise ) {
        let moneyleft = earned - vacationPrise;
        console.log(`Yes! ${moneyleft} lv left.`);
       
    }
}
solve("40.8","20","25","30","50","10");