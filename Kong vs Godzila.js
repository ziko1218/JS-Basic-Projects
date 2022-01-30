function solve(budjet , people , clothprise) {
budjet = Number (budjet);
people = Number (people);
clothprise = Number (clothprise);
let decor = budjet * 0.10;
let totalClothPrise = people * clothprise ;
if (people > 150) {
    totalClothPrise = totalClothPrise * 0.90;
}
let totalPrice = decor + totalClothPrise;
if (totalPrice > budjet){
    console.log (`Not enough money.Wingard needs ${(totalPrice - budjet).toFixed(2)}`);
    console.log (`Action,Wingard starts filming with ${budjet - totalPrice} leva left`);
}
}
solve ("20000","120","55.5");