function summerOutfit(input) {

    let gradus = Number(input[0]);
    let dayTime = input[1];
    let outfit = "";
    let shoes = "";

    if (gradus >= 10 && gradus <= 18) {
        switch (dayTime) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    } else if (gradus > 18 && gradus <= 24) {
        switch (dayTime) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (gradus >= 25) {
        switch (dayTime) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["22", "Afternoon"]);