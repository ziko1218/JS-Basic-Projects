function solve(input) {
  let index = 0;
  let command = input[index++];
  let primeSum = 0;
  let notPrimeSum = 0;
  while (command !== "stop") {
    let number = Number(command);

    if (number < 0) {
      console.log(`Number is negative.`);
    } else {
      let counter = 0;
      for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
          counter++;
        }
      }
      if (counter === 2) {
        primeSum += number;
      } else {
        notPrimeSum += number;
      }
    }
    command = input[index++];
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);
}

solve([3, 9, 0, 7, 19, 4, "stop"]);

//==============================================================================================
