function Diet(strawLv,bananasKg,orangeKg,rasberryKg,strawberryKg){
let strawberryPrice = strawLv;   
let rasberryPrice = strawLv / 2;
let orangePrice = rasberryPrice - 40 * 0.01 * rasberryPrice;
let bananaPrice = rasberryPrice - 80 * 0.01 * rasberryPrice;
let total = strawberryPrice * strawberryKg + rasberryPrice * rasberryKg + 
orangePrice * orangeKg + bananaPrice * bananasKg;
console.log(total);
}
Diet(48,10,3.3,6.5,1.7)
