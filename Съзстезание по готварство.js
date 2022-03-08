function solve(input) {
    let count = Number(input.shift());
    let sumForCharity = 0;
    let totalSweetsCount=0;
    for (let i = 0; i < count; i++) {
        name = input.shift();
        let countCoockies = 0;
        let countCakes = 0;
        let countWaffles = 0;
        type = input.shift();
        while (type !== 'Stop baking') {
                        let countBakingSweets = Number(input.shift());
                        totalSweetsCount += countBakingSweets;
            switch (type) {
                case 'coockies': sumForCharity += countBakingSweets * 1.59;
                    countCoockies += countBakingSweets; break;
                case ' cakes': sumForCharity += countBakingSweets * 7.80;
                    countCakes += countBakingSweets;break;
                case ' waffles': sumForCharity += countBakingSweets * 2.3;
                    countWaffles += countBakingSweets;break;
            }
        type = input.shift();
        }
        console.log(`${name} baked ${countCoockies}cookies,${countCakes} cakes and ${countWaffles}waffles`)
    }
    console.log (`All bakery sold:${totalSweetsCount}`);
    console.log (`Total sum for charity: ${sumForCharity.toFixed(2)} lv.`)
}
solve([3, "Iva"," cookies", 5, 'cakes', 3, 'Stop baking!', 'George','cakes', 7, 'waffles',2, 'Stop baking', 'Ivan','cookies',6, 'Stop baking!'])