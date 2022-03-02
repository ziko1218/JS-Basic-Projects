
function money(arr) {
    let moneyNeeded = +arr[0];
    let cash = +arr[1];
    let numSpendDays = 0;
    for (i = 2; i < arr.length; i += 2) {
        if (arr[i] === 'spend') {
            numSpendDays++;
            cash -= +arr[i + 1];
            if (cash < 0) {
                cash = 0;
            }
        } else if (arr[i] === 'save') {
            numSpendDays = 0;
            cash += +arr[i + 1];
        }
        if (numSpendDays >= 5) {
            console.log(`You can't save the money`);
            console.log(i / 2);
            break;
        }
    }
    if (cash >= moneyNeeded) {
        console.log(`You saved the money for ${i / 2 - 1} days`);
    }
}
money(['2000', '1000', 'spend', '1200', 'save', '2000'])