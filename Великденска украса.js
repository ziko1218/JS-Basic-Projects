function solve(input) {
    // let basketEggsPrice = 1.5;       let wreathPrice = 3.80;       let chocolateBunnyPrice = 7;
    let customersCount = Number(input[0]);
    let index = 1;
    let average = 0;
    for (let i = 1; i < customersCount; i++) {
        let command = input[index++];
        let price = 0;
        let count = 0;
        let stuff = 0;
        while (command !== "Finish") {
            if (command === "basket") {
                price += 1.5;
                stuff++;
                count++;
            } else if (command === "wreath") {
                price += 3.8;
                stuff++;
                count++;

            } else if (command === "chocolate bunny") {
                price += 7;
                stuff++;
                count++;
            }
            command = input[index++];
        }
        if (count % 2 === 0) {
            price * 0.80;
        }
        average += price;
        console.log(` You purchade ${stuff} items for ${price.toFixed(2)} leva. `);
    }
    console.log(`Average bill per client is : ${(average / customersCount).toFixed(2)} lv`)

}
solve([2, "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);