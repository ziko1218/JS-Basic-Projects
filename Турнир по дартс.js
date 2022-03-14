function solve(input) {
    let score = Number(input.shift());
    let tries = 0;
    while (score > 0) {
        let section = input.shift();
        let incomeScore = Number(input.shift());
        if (section == 'bullseye') {
            tries++;
            break;
        }
        switch (section) {
            case 'number section':
                score -= incomeScore; break;
            case 'double ring': score -= incomeScore * 2; break;
            case 'triple ring': score -= incomeScore * 3; break;
        }
        tries++;
    }
    if (score === 0) {
        console.log(`Congrats! You won the game in ${tries} moves`)

    } else if (score > 0) {
        console.log(`Congrats! You won the game with a bulleye in ${tries} moves`)
    } else {
        console.log(`Sorry , you lost.Score difference:${Math.abs(score)} `)
    }
}
solve([150, "double ring", 20, "triple ring", 10, 'number section', 20, 'triple ring', 20])