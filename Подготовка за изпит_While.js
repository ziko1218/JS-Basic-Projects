function examPrep(arr) {
    let allowedBadGrades = Number(arr.shift());
    let problem = arr.shift();
    let grade = Number(arr.shift());
    let badGrades = 0;
    let sumOfGrades = 0;
    let goodGrades = 0;
    let lastProblem = '';
        while (badGrades < allowedBadGrades) {
        if (grade <= 4) {
            badGrades++;
        }
        if (problem === 'Enough') {
            break;
        }
        goodGrades++;
        lastProblem = problem;
        sumOfGrades += Number(grade);
        problem = arr.shift();
        grade = Number(arr.shift());
    }
    //console.log(lastProblem);
    //console.log(sumOfGrades / (goodGrades + badGrades));
    if (badGrades < allowedBadGrades) {
        console.log(`Average score: ${(sumOfGrades / goodGrades).toFixed(2)}`)
        console.log(`Number of problems: ${goodGrades}`)
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}

examPrep(['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough'])

// examPrep(['2', 'Income', '3', 'Game Info','6','Best Player','4'])