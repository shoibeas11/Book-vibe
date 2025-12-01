import toast from "react-hot-toast";
export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books;
}


export const getWishBooks = () => {
    let wishBooks = [];
    const storedWishBooks = localStorage.getItem('wishBooks');
    if(storedWishBooks){
        wishBooks = JSON.parse(storedWishBooks);
    }
    return wishBooks;
}





// Save Books-------------------------------------------

export const saveBooks = book =>{
    let books = getBooks();
    const isExists = books.find(b => b.bookId === book.bookId);
    if(isExists){
        return toast.error('Book is Read!')
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('Book is Successfully Added!')
}


export const saveWishBooks = book =>{
    let wishBooks = getWishBooks();
    const isExists = wishBooks.find(b => b.bookId === book.bookId);
    let books = getBooks();
    const isAddedRead = books.find(b => b.bookId === book.bookId)
    if(isExists){
        return toast.error('WishList Already Added!');
    }else if(isAddedRead){
         return toast.error('You are Already Read!');
    }
    wishBooks.push(book);
    localStorage.setItem('wishBooks', JSON.stringify(wishBooks));
    toast.success('WishList Successfully Added!')
}





// Delete Books----------------------------------------------

export const deleteBooks = id => {
    let books = getBooks();
    const remaining = books.filter(b => b.bookId !== id);
    localStorage.setItem('books', JSON.stringify(remaining));
    toast.success('Book is Deleted!');
}

export const deleteWishBooks = id => {
    let wishBooks = getWishBooks();
    const remaining = wishBooks.filter(b => b.bookId !== id);
    localStorage.setItem('wishBooks', JSON.stringify(remaining));
    toast.success('Successfully Deleted!');
}