function solve(input) {
    let name = input.shift();
    let countPlayGames = Number(input.shift());

    let volleyballGamesScore = 0;
    let volleyballGamesCount = 0;

    let tennisGamesScore = 0;
    let tennisGamesCount = 0;

    let badmintonGamesScore = 0;
    let badmintonGamesCount = 0;

    let totalScore = 0;
    for (let i = 0; i < countPlayGames; i++) {
        let gameName = input.shift();
        let score = Number(input.shift());
        switch (gameName) {
            case 'volleyball': score = score * 1.07;
                volleyballGamesCount++;
                volleyballGamesScore += score;
                break;
            case 'tennis': score = score * 1.05;
                tennisGamesCount++;
                tennisGamesScore += score;
                break;
            case 'badminton': score = score * 1.02;
                badmintonGamesCount++;
                badmintonGamesScore += score;
                break;
        }
        //console.log(volleyballGamesScore,tennisGamesScore,badmintonGamesScore);
        totalScore += score;
    }
    let volleyballTotalScore = Math.floor(volleyballGamesScore / volleyballGamesCount);
    let tennisTotalScore = Math.floor(tennisGamesScore / tennisGamesCount);
    let badmintonTotalScore = Math.floor(badmintonGamesScore / badmintonGamesCount);
    if (volleyballTotalScore >= 75 && tennisTotalScore >= 75 && badmintonTotalScore >= 75) {
        console.log(`Congrats, ${name} ! You won the cruise games with ${Math.floor(totalScore)} points`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalScore)}`);
    }
}
solve(['Pepi', 4, 'volleyball', 78, 'tennis', 98, 'badminton', 105,'tennis',102]);