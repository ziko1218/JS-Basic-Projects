function solve(input) {
    let examHours = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMins = Number(input[3]);
    // 570
    let totalExamMins = examHours * 60 + examMins;
    // 590
    let totalArrivalMins = arrivalHours * 60 + arrivalMins;
    let time = totalExamMins - totalArrivalMins;
    if (time < 0) { // 1.
        console.log('Late');    //-20 {
        time = Math.abs(time); //20
        if (time < 60) { // 1.1
            console.log(`${time} minutes after the start`);
        } else {          // 1.2
            let mins = time % 60;
            let hours = Math.floor(time / 60);
            if (mins < 10) { // 1.2.1
                console.log(`${hours} : 0${mins} hours after the start`); //разклонение само заради формата на минути заради водещата нула
            } else {         // 1.2.2
                console.log(`${hours} : ${mins} hours after the start`); //разклонение само заради формата на минути заради водещата нула
            }
        }
    } else if (time <= 30) { // 2.
        console.log(`On time`);
        if (time > 0) { // 2.1
            console.log(`${time} minutes before the start`);
        }
    } else { // (time > 30) // 3. 
        console.log(`Early`);

        if (time < 60) { // 3.1
            console.log(`${time} minutes before the start`);
        } else { // 3.2
            let hours = Math.floor(time / 60);
            let mins = time % 60;
            if (mins < 10) { // 3.2.1 -разклонение само заради формата на минути заради водещата нула
                console.log(`${hours} : 0${mins} hours before the start`);
            } else {         // 3.2.2 -разклонение само заради формата на минути заради водещата нула
                console.log(`${hours} : ${mins} hours before the start`);
            }
        }
    }
}
solve('9', '30', '7', '25');