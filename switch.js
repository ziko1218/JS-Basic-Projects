// switch
function solve(country) {
    country = Number (country);
    switch (country) {
        case "Bulgaria":
            console.log('It is my country');
            break;

        case 'Turkey':
            console.log('Turkey is the country I want to visit on sea next year');
            break;

        case Romania:
            console.log('They are my favorite neighbours');
            break;
        default: console.log('country not in the list');
        break;
    }
}
solve(Bulgaria);
