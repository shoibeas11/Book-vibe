import { useEffect, useState } from "react";
import { deleteBooks, getBooks } from "../utilities/Read";
import Read from "../component/Read"; 
import EmptyPage from "./EmptyPage";

const ReadPage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getBooks()
        setBooks(storedBooks)
    }, []);

    const handleDelete = bookId => {
        deleteBooks(bookId);
        const storedBooks = getBooks()
        setBooks(storedBooks)
    }

    if(books.length < 1)return<EmptyPage></EmptyPage>

    return (
        <div>
            {
                books.map(book => (
                    <Read handleDelete={handleDelete} key={book.bookId} book={book} />
                ))
            }
        </div>
    );
};

export default ReadPage;
