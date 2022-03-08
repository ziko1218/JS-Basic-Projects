function findBook(input) {
    let book = input.shift();
    let libraryCapacity = Number(input.shift());

    let checkedBooks = 0;
    let isFound = false;


    while (checkedBooks < libraryCapacity) {
        let currentBook = input.shift();
        if (currentBook === book) {

            console.log(`You checked ${checkedBooks + 1} books and found it.`);
            isFound = true;
            break;
        }
        checkedBooks++;
    }
    if (!isFound) {
        console.log(`The book you search is not here`);
        console.log(`You checked ${checkedBooks} books.`);
    }
}
findBook(['Troy', 8, 'Stronger', 'Life style', 'Troy'])
//findBook(["Bourne",32,"True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"])
