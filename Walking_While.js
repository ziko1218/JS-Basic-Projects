function walking(input) {

    let index = 0;
    let goalSteps = 10000;
    let steps = 0;

    while (steps < goalSteps) {
        let inputLine = input[index++];
        if (inputLine === 'Going home') {
            steps += Number(input[index++]);
            break;
        }
        steps += Number(inputLine);
    }
if (steps > goalSteps) {
    console.log(`Goal reached ! Good job !`);
    console.log(`${Math.abs(goalSteps - steps)} more steps over the goal`);
} else {
    console.log(`${goalSteps - steps} more steps to reach the goal`);
}
}
walking(['1000', '1500', '2000', '6500'])