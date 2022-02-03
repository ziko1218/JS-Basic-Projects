function solve(input) {
    let typeFlower = input[0];
    let countOfFlowers = Number(input[1]);
    let budjet = Number(input[2]);
    let total = 0;

    let rosePriceTotal = countOfFlowers * 5;
    let dahliasPriceTotal = countOfFlowers * 3.8;
    let tulipsPriceTotal = countOfFlowers * 2.8;
    let narcissusPriceTotal = countOfFlowers * 3;
    let gladiolusPriceTotal = countOfFlowers * 2.5;
  
    switch (typeFlower) {
        case "Roses":
            if (countOfFlowers > 80) {total = rosePriceTotal * 0.90;} 
            else {total = rosePriceTotal}
            break; 
        case 'Dahlias':
            if (countOfFlowers > 90) {total = dahliasPriceTotal * 0.85;} 
            else {total = dahliasPriceTotal}
            break;
        case 'Tulips':
            if (countOfFlowers > 80) {total = tulipsPriceTotal * 0.85;} 
            else {total = tulipsPriceTotal}
            break;
        case 'Narcissus':
            if (countOfFlowers < 120) {total = narcissusPriceTotal + (narcissusPriceTotal * 0.15);} 
            else {total = narcissusPriceTotal}
            break;
        case 'Gladiolus':
            if (countOfFlowers < 80) {total = gladiolusPriceTotal + (gladiolusPriceTotal * 0.20);} 
            else {total = gladiolusPriceTotal}
            break; 
    }
     if (budjet >= total) {
        console.log(`Hey, you have a great garden with ${countOfFlowers} ${typeFlower} and ${(budjet - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budjet).toFixed(2)} leva more.`);
    }
}
solve(["Roses",
"55",
"250"])

