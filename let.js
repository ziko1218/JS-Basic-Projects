function solve (GroundM2) {
    let pricePerM2 = Number(GroundM2)* 7.61;
    let discount = Number(pricePerM2) * 0.18;
    let total = pricePerM2 - discount;
    console.log( `The final price is ${total} lv with the discount of ${discount} lv.`);
}
solve('550');
