function solve(input) {
    let n = Number(input);
    let smallestNumber = Number(input[1]);
    for (let i = 1; i < input.length; i++) {
        let currentNum = Number(input[i]);
        if (currentNum < smallestNumber) { smallestNumber = currentNum }
    }
    console.log(smallestNumber);
}

solve(['4', '45', '-20','7','99'])