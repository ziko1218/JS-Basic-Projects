
function decoration(input) {

    let budget = Number(input.shift());
    let inputLine = input.shift();
    let isEverythingOK = true;
    while (inputLine !== "Stop") {
        let sum = 0;
        let decoration = inputLine;
        for (index = 0; index < inputLine.length; index++){
            let char = decoration[index];
            sum += char.charCodeAt();
            //char.charCodeAt();
        }
        //debugger;
        if (budget >= sum) {
            budget -= sum;
            console.log(`Item successfully purchased`);
            inputLine = input.shift();
        } else {
            isEverythingOK = false;
            break;
        }
        
    }
    if (isEverythingOK) {
        console.log(`Money left: ${budget}`);
    } else {
        console.log(`Not enough money`)
    }
}
decoration([3000, "star", "Christmas tree", "tinsel", "Tree stand"])

