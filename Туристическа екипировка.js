function solve(input) {
    index = 0;
    let budjet = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let equipmentPrice = 0;
    let counter = 0;
    let isNegativeValue = false;
    while (command !== 'Stop') {
        counter++;
        let productName = command;
        let productPrice = Number(input[index])
        index++;
        if (counter % 3 === 0) {
            equipmentPrice += (productPrice / 2);
        } else {
            equipmentPrice += productPrice;
        }

        if (equipmentPrice > budjet) {
            isNegativeValue = true;
            console.log(`You don't have enough money!`)
            console.log(`You need ${Math.abs(equipmentPrice - budjet).toFixed(2)} leva!`)
            break;
        }

        command = input[index];
        index++;
    }
    //console.log(equipmentPrice);
    if (!isNegativeValue) 
    {
        console.log(`You bought ${counter} products for ${equipmentPrice.toFixed(2)} leva.`)
    }
}
// solve([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop']);
solve([54,"Thermal underwear",24,"Sunscreen",45])