function solve(budjet, season, countFishermen) {
    budjet = Number(budjet);
    countFishermen = Number(countFishermen);
    rent = 0;
    switch (season) {
        case 'spring':
            rent = 3000;
            if (countFishermen <= 6) { rent *= 0.9; }
            else if (countFishermen >= 7 && countFishermen <= 11) { rent *= 0.85; }
            else if (countFishermen %2 == 0) {rent *= 0.85 * 0.9}
            else if(countFishermen > 12){ rent *= 0.75; }
            break;
        case 'summer':
            rent = 4200;
            if (countFishermen <= 6) { rent *= 0.9; }
            else if (countFishermen >= 7 && countFishermen <= 11) { rent *= 0.85; }
            else if (countFishermen %2 == 0) {rent *= 0.85 * 0.9}
            else if(countFishermen > 12) { rent *= 0.75; }
            break;
        case 'autumn':
            rent = 4200;
            if (countFishermen <= 6) { rent *= 0.9; }
            else if (countFishermen >= 7 && countFishermen <= 11) { rent *= 0.85; }
            else if (countFishermen %2 == 0) {rent *= 0.85 * 0.9}
            
            break;
        case 'winter':
            rent = 2600;
            if (countFishermen <= 6) { rent *= 0.9; }
            else if (countFishermen >= 7 && countFishermen <= 11) { rent *= 0.85; }
            else if(countFishermen > 12){ rent *= 0.75; }
            break;
    }
    if (budjet <= rent) {
        console.log(`Yes you have ${(rent - budjet).toFixed(2)} leva left`);
    } else {
        console.log(`Not enough money! You need ${(budjet - rent).toFixed(2)} leva`);
    }

}

solve('3600', 'autumn', '6');