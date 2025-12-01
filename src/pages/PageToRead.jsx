import { useEffect, useState } from "react";
import { getBooks } from "../utilities/Read";
import PageToReadComponent from "../component/pageToReadComponent";

const PageToRead = () => {

    const [books, setBooks] = useState([]);
    
        useEffect(() => {
            const storedBooks = getBooks()
            setBooks(storedBooks)
        }, []);

    return (
        <div>
            <PageToReadComponent books={books}></PageToReadComponent>
        </div>
    );
};

export default PageToRead;