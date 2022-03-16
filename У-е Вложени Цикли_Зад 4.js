function solve(input) {
    let juryCount = Number(input.shift());

let totalAvg = 0;
let presentationsCount = 0;

    let name = input.shift();

    while (name !== 'Finish') {
        presentationsCount++;
        let avgGrade = 0;
        for (let i = 0; i < juryCount; i++) {
            let grade = Number(input.shift());
            avgGrade += grade;
        }
        avgGrade /= juryCount;
        totalAvg += avgGrade;
        console.log(`${name} - ${avgGrade.toFixed(2)}.`)
        
        name = input.shift();
    }
    totalAvg /= presentationsCount;
    console.log(`Student's final assestment is ${totalAvg.toFixed(2)}.`);
}

solve([2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, "Finish"]);