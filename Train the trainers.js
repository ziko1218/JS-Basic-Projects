function easterEggs(input) {

    let eggsCount = Number(input[0]);
    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;
    let colorOfMaxEggs = '';
    let maxEggs = -1;
    //let index = 1 ;
    for (let i = 1; i <= eggsCount; i++) {
        let colorEgg = input[i];
        switch (colorEgg) {
            case "red":
                redCount++;
                if (redCount > maxEggs) {
                    maxEggs = redCount;
                    colorOfMaxEggs = "red";
                    break;
                }
            case "orange":
                orangeCount++;
                if (orangeCount > maxEggs) {
                    maxEggs = orangeCount;
                    colorOfMaxEggs = "orange";
                    break;
                }
            case "blue":
                blueCount++;
                if (blueCount > maxEggs) {
                    maxEggs = blueCount;
                    colorOfMaxEggs = "blue";
                    break;
                }
            case "green":
                greenCount++;
                if (greenCount > maxEggs) {
                    maxEggs = greenCount;
                    colorOfMaxEggs = "green";
                    break;
                }
                //let colorEgg = input[i];
        }
    }
    console.log(redCount);
    console.log(orangeCount);
    console.log(blueCount);
    console.log(greenCount);
    console.log(maxEggs)
}

easterEggs([7, "orange", "blue", "green", "green", "blue", "red", "green"]);