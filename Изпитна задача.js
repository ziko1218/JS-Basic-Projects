function budjet(days, room, grade) {
    days = Number(days);
    let price = 0;
    let nights = days - 1;
    //let discount = price * procentage;
    switch (room) {
        case 'room for 1 person':
            price = 18 * nights;
            break;
        case 'apartment':
            price = 25 * nights;
            if (days < 10) {
                price = price * 0.7;
            }
            else if (days >= 10 && days <= 15) {
                price *= 0.65;
            }
            else { price /= 2; }
            break;
        case 'president apartment':
            price = 35 * nights;
            if (days < 10) {
                price *= 0.9;
            } else if (days >= 10 && days <= 15) { price *= 0.85; }
            else { price *= 0.8; } break;
    }
    if (grade === 'positive') {
        price = price * 0.25;
    } else {
        price = price * 0.9;
    }
console.log(price.toFixed(2));
}

budjet('14', 'apartment', 'positive');