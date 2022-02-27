function solve(input) {
    let day = Number(input[0]);
    let hours = Number(input[1])
    let totalMoney = 0;
    for (let i = 1; i <= day; i++) {
        let tempMoney = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 == 0 && j % 2 != 0) {
                tempMoney += 2.5;
            } else if (i % 2 != 0 && j % 2 == 0) {
                tempMoney += 1.25;
            } else {
                tempMoney += 1;
            }
        }
        totalMoney += tempMoney;
        console.log(`Day:${i} - ${tempMoney.toFixed(2)} leva`);
        
    }
    console.log(`Total: ${totalMoney.toFixed(2)} leva`);
}
solve([2, 5]);