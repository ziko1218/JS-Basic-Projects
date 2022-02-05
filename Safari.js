function solve(budjet, oilLiters, day) {

    budjet = Number(budjet);
    oilLiters = Number(oilLiters);
    let oilPrice = 2.10;
    let guide = 100;
    let totalPrice = 0;
    let withPromotion = 0;
    if (day === 'Saturday') {
        totalPrice = oilLiters * oilPrice + guide;
        withPromotion = totalPrice * 0.9;
    } else if (day === 'Sunday') {
        totalPrice = oilLiters * oilPrice + guide;
        withPromotion = totalPrice * 0.8;
    }
    if (budjet > withPromotion) {
        console.log(`Safari time! Money left: ${(budjet - withPromotion).toFixed(2)} lv. `)
    } else {
        console.log(`Not enough money! Money needed: ${Math.abs(budjet - withPromotion).toFixed(2)} lv.`)
    }
} 
// solve(1000, 10, 'Sunday');
solve(120,30,'Saturday');