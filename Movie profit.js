function movieProfit(arr) {
    let movieName = arr[0];
    let days = Number(arr[1]);
    let ticketsCount = Number(arr[2]);
    let ticketPrice = Number(arr[3]);
    let percent = Number(arr[4]);

    let sumForDay = ticketPrice * ticketsCount;
    let totalSum = sumForDay * days;
    let cinemaProfit = totalSum * (percent / 100);
    let movieProfit = totalSum - cinemaProfit;

    console.log(`The profit from the movie ${movieName} is ${movieProfit.toFixed(2)}`)
}
movieProfit(["The Programmer", 20, 500, 7.5, 7])