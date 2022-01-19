function solve(input) {
    let player = input[0];
    let startingPoints = 301;

    let successful = 0;
    let unsuccessful = 0;
    let index = 1;

    let field = input[index++];
    let score = Number(input[index++]);


    while (startingPoints > 0) {
        if (field === 'Retire') {
            break;
        }
        if (field === 'Triple') {
            score *= 3;
        } else if (field === 'Double') {
            score *= 2;
        }
        if (score <= startingPoints) {
            startingPoints -= score;
            successful++;
        } else {
            unsuccessful++;
        }
        field = input[index++];
        score = Number(input[index++]);
    }
    if (field === "Retired") {
        console.log(`retired ${unsuccessful}`)
    } else {
        console.log(`won ${successful}`);
    }
}
solve(["Michael van Gerwen", "Triple", 20, "Triple", 19, "Double", 10, "Single",
    3, "Single", 1, "Triple", 20, "Triple", 20, "Double", 20]);