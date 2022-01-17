function cake(arr) {
    let cakeWidth = Number[arr.shift()];
    let cakeLenght = Number[arr.shift()];

    let cakeCapacity = Number(cakeWidth * cakeLenght);
    let numberOfTakenpieaces = 0;
    let command = arr.shift();

    while (command !== 'STOP') {
        numberOfTakenpieaces += Number(command);

        if (numberOfTakenpieaces > cakeCapacity) {
            break;
        }
        command = arr.shift();
    }
    if (numberOfTakenpieaces > cakeCapacity) {
        console.log(`No more cake left! You need ${numberOfTakenpieaces - cakeCapacity} pieces more`);
    } else {
        console.log(`${Math.abs(numberOfTakenpieaces - cakeCapacity)} pieces are left`);
    }
}
cake(['10', '10', '20', '20', '20', '20', '21'])