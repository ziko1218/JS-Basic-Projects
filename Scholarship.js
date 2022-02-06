function solve(income, avgGrade, minWage) {
    income = Number(income);
    avgGrade = Number(avgGrade);
    minWage = Number(minWage);
    let social = 0;
    let excellent = 0;
    if (income < minWage && avgGrade > 4.5) { 
        social = minWage*0.35;

    }
    if (avgGrade >= 5.5 ) {
        excellent = avgGrade * 25;
    }

    if (excellent === 0 && social === 0) {
        console.log('You cannot get a scholarship');
    } else if (social > excellent) {
        console.log(`You get Social scholarship ${Math.floor(social)} BGN `)
    } else { console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`)}
}
solve('300.00', '5.65', '420.00');