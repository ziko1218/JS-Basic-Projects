function solve(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let isFacebookAlreadyOpened = false;
    let isInstagramAlreadyOpened = false;
    let isRedditAlreadyOpened = false;
    for (let index = 2; index < input.length; index++) {
        let website = input[index];

        if (website === 'Facebook' && !isFacebookAlreadyOpened) {
            salary -= 150;
            isFacebookAlreadyOpened = true;
        }
        if (website === 'Instagram' && !isInstagramAlreadyOpened) {
            salary -= 100;
            isInstagramAlreadyOpened = true;
        }
        if (website === 'Reddit' && !isRedditAlreadyOpened) {
            salary -= 50;
            isRedditAlreadyOpened = true;
        }
        if (salary <= 0) {
            console.log('You have lost your salary');
            break;
        }
    }
    if (salary > 0) {
        console.log(salary)
    }
}
solve(['10', '750', 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook'])