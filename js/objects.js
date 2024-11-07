function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
    this.sayInfo = function () {
        return this;
    }
}
const AnimalFarm = new Book("AnimalFarm", "G. Orwell", 1945, 176, true)
console.log(AnimalFarm.sayInfo())

