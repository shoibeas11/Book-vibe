import { deleteWishBooks, getWishBooks } from "../utilities/Read";
import { useEffect, useState } from "react";
import WishList from '../component/WishList';
import EmptyPage from "./EmptyPage";


const WishListPage = () => {

    const [books, setBooks] = useState([]);
    
        useEffect(() => {
            const storedBooks = getWishBooks()
            setBooks(storedBooks)
        }, []);

        const handleDelete = (bookId) =>{
            deleteWishBooks(bookId);
            const storedBooks = getWishBooks()
            setBooks(storedBooks)
        }

        if(books.length < 1)return<EmptyPage></EmptyPage>

    return (
        <div>
            {
                books.map(book => <WishList handleDelete={handleDelete} key={book.bookId} book={book}></WishList>)
            }
        </div>
    );
};

export default WishListPage;