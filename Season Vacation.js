function solve(budjet, season) {
    budjet = Number(budjet);
    let destination = '';
    let place = '';
    if (budjet <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            place === 'Camp';
            budjet *= 0.30;
        } else if (season === 'winter') {
            place === 'Hotel';
            budjet *= 0.70;
        }

    } else if (budjet <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            place === "Camp";
            budjet *= 0.40;
        } else if (season === 'winter') {
            place === 'Hotel';
            budjet *= 0.80;
        }
    } else {
        destination = 'Europe';
        place === "Hotel";
        budjet *= 0.90;

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budjet.toFixed(2)}`)
}

solve('1500', 'summer');