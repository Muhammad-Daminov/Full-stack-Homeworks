const book = {
    bname: "otgan kunlar",
    author: "Abdulla Qodiriy",
    isbn: '978-9943-55-123-4'
}

Object.defineProperty(book, 'isbn',{
    writable: false,
    configurable: false,
});

delete book.isbn;
book.isbn = '978-9943-55-456-4';
console.log(book);