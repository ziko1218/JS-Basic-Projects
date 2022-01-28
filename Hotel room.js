function solve(input) {
    
    let month = input[0];
    let nights = Number(input[1]);
    let priceStudio = 0;
    let priceApt = 0;
    let priceStudioTotal = priceStudio * nights;
    let priceAptTotal = priceApt * nights;
    switch (month) {
        case 'May':
            priceStudio = 50;
            priceApt = 65;
            if (nights > 7 && nights <= 14) {
                priceStudioTotal = priceStudio * nights * 0.95;
                priceAptTotal = priceApt * nights;
            } else if (nights > 14) {
                priceStudioTotal = priceStudio * nights * 0.70;
                priceAptTotal = priceApt * nights * 0.9;
            } else {
                priceStudioTotal = priceStudio * nights;
                priceAptTotal = priceApt * nights;
            }
            break;
        case 'June':
            priceStudio = 75.20;
            priceApt = 68.70;
            if (nights > 14) {
                priceStudioTotal = priceStudio * nights * 0.80;
                priceAptTotal = priceApt * nights * 0.9;
            } else {
                priceStudioTotal = priceStudio * nights;
                priceAptTotal = priceApt * nights;
            }
            break;
        case 'July':
            priceStudio = 76;
            priceApt = 77;
            priceStudioTotal = priceStudio * nights;
            if (nights > 14) {
                priceAptTotal = priceApt * nights * 0.9;
            } else {
                priceAptTotal = priceApt * nights;
            }
            break;
        case 'August':
            priceStudio = 76;
            priceApt = 77;
            priceStudioTotal = priceStudio * nights;
            if (nights > 14) {
                priceAptTotal = priceApt * nights * 0.9;
            } else {
                priceAptTotal = priceApt * nights;
            }
            break;
        case 'September':
            priceStudio = 75.20;
            priceApt = 68.70;
            if (nights > 14) {
                priceStudioTotal = priceStudio * nights * 0.8;
                priceAptTotal = priceApt * nights * 0.9;
            } else {
                priceStudioTotal = priceStudio * nights;
                priceAptTotal = priceApt * nights;
            }
            break;
        case 'October':
            priceStudio = 50;
            priceApt = 65;
            if (nights > 7 && nights <= 14) {
                priceStudioTotal = priceStudio * nights * 0.95;
                priceAptTotal = priceApt * nights;
            } else if (nights > 14) {
                priceStudioTotal = priceStudio * nights * 0.70;
                priceAptTotal = priceApt * nights * 0.9;
            } else {
                priceStudioTotal = priceStudio * nights;
                priceAptTotal = priceApt * nights;
            }
            break;
    }
    console.log(`Apartment: ${(priceAptTotal).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudioTotal).toFixed(2)} lv.`);
}

solve(['May', '15']);
solve(["June","14"]);



