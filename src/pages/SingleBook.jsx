import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import { saveBooks, saveWishBooks } from "../utilities/Read";


const SingleBook = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    const {image,bookName,author,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

    const handleRead = book =>{
        saveBooks(book);
    }
    const handleWish = book =>{
          saveWishBooks(book);
    }

    return (
        <div className="flex flex-row w-4/5 mt-10 mx-auto gap-4">
           <div className=" rounded-lg w-[40%] flex flex-col justify-around items-center h-[600px] bg-gray-100">
                <img className="" src={image} alt="" />
           </div>
           <div className="w-[59%]">
                <p className="px-4 pt-4 text-2xl font-bold">{bookName}</p>
                <p className="px-4 pb-4  text-gray-400">By: <span className="font-semibold text-black" >{author}</span> </p>
                <hr className="w-[90%] ml-4" />
                <p className="ml-4 py-2 text-xl font-semibold">Fiction</p>
                <hr className="w-[90%] ml-4"/>
                <p className="py-2 pl-4 pr-10"><span className="font-semibold">Review:</span> <span className="text-gray-400">{review}</span></p>
                <p className="pb-4 pt-2 pl-4">
                    <span className="font-semibold">Tags:</span>
                    {
                        tags.map(tag => <span className="px-3 mx-2 py-1 text-green-400 bg-gray-100 rounded-2xl">{tag}</span>)
                    }  
                </p>
                <hr className="w-[90%] ml-4"/>
                <p className="pt-10 pl-4">
                    <span className="text-gray-400">Number of Pages:</span>
                    <span className="text-black font-semibold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {totalPages}</span>
                </p>
                <p className="pl-4">
                    <span className="text-gray-400">Publisher:</span>
                    <span className="text-black font-semibold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {publisher}</span>
                </p>
                <p className="pl-4">
                    <span className="text-gray-400">Rating point:</span>
                    <span className="text-black font-semibold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {rating}</span>
                </p>
                <p className="pl-4">
                    <span className="text-gray-400">Publish Date:</span>
                    <span className="text-black font-semibold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {yearOfPublishing}</span>
                </p>
                <div className="ml-4 mt-14">
                    <Link onClick={ () => handleRead(book)} className="px-5 rounded-lg font-bold py-2 mr-2 border border-gray-700">Read</Link>
                    <Link onClick={ () => handleWish(book)} className="px-5 rounded-lg font-bold py-2 ml-2  text-white bg-sky-400 border border-sky-400">Wish List</Link>
                </div>
           </div>
        </div>
    );
};

export default SingleBook;