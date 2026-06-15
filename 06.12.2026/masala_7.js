class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class EBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }

    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Size: ${this.fileSize}MB`;
    }
}

const book = new EBook("JavaScript Guide", "Brendan Eich", 15);
console.log(book.getInfo());