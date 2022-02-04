function solve(N1, N2, operator) {
    N1 = Number(N1);
    N2 = Number(N2);
    let result = '';
    switch (operator) {
        case '+':
            result = N1 + N2;
            break;
        case '-':
            result = N1 - N2;
            break;
        case 'x':
            result = N1 * N2;
            break;
        case '/':
            if (N2 !== 0) {
                result = N1 / N2;
            } else { console.log(`Can't devide ${N1} by zero`) }
            break;
        case '%':
            result = result % 2;
            break;
    }
    if ((operator === '+' || operator === '-' || operator === 'x') && result % 2 == 0) {
        console.log((`${N1} ${operator} ${N2} = ${result} - even`));
    } else if ((operator === '+' || operator === '-' || operator === 'x') && result % 2 == 1) {
        console.log((`${N1} ${operator} ${N2} = ${result} - odd`));
    } else if (operator === '/' && N2 !==0) {
        console.log(`${N1} / ${N2} = ${result}`);
    } else if(operator === '%') {
        console.log(`${N1} % ${N2} = ${result}`)
    }
    }
solve('10', '0', '/');