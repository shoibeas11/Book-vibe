import Book from "./Book";
const Books = ({books}) => {
    return (
        <div className="w-4/5 mx-auto">
            <p className="text-center text-5xl font-bold mt-30 mb-15">Books</p>
            <div className="grid grid-cols-3 justify-around">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;