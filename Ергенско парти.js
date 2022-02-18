function restorant(input) {

    let guestSinger = Number(input.shift());

    let command = input.shift();
    let sum = 0;
    let totalMoney = 0;
    let totalGuests = 0;
    let groupOfPeople = 0;
    while (command !== "The restaurant is full") {

        groupOfPeople = Number(command);

        if (groupOfPeople < 5) {
            sum = groupOfPeople * 100;

        } else {
            sum = groupOfPeople * 70;
        }
        totalGuests += groupOfPeople;
        totalMoney += sum;
        command = input.shift();

        
    }
    //console.log(groupOfPeople);
    if (totalMoney > guestSinger) {
        console.log(`You have ${totalGuests} guests and ${totalMoney - guestSinger} leva left.`)
    } else {
        console.log(`You have ${totalGuests} guests and ${totalMoney} leva income, but no singer.`)
    }
}
restorant([3200,5,12,6,6,12,"The restaurant is full"])

