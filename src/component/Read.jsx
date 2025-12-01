import { IoLocationOutline } from "react-icons/io5";
import { TiGroupOutline } from "react-icons/ti";
import { TbBrandPagekit } from "react-icons/tb";



const Read = ({book, handleDelete}) => {

    const {image,bookName,author,yearOfPublishing,publisher,totalPages,rating,category,bookId} = book;

    

    return (
        <div>
            
            <div className="w-full rounded-2xl h-[230px] flex flex-row items-center border border-gray-300 mt-6">
                <img className="w-[15%] h-[90%] ml-4 rounded-2xl bg-gray-50 " src={image} alt="" />
                <div className="flex flex-col w-[80%]">
                    <p className="ml-4 text-xl font-semibold">{bookName}</p>
                    <p className='ml-4 text-base text-gray-400 mb-2'>By: {author} </p>
                    <div className="flex flex-row">
                        <p>
                            <span className="font-semibold ml-4">Tags:</span>
                            <span className="px-3 mx-2 py-1 text-green-400 bg-gray-100 rounded-2xl"># tag</span>
                        </p>
                        <p className="flex ml-4">
                            <span className="font-semibold ml-4 flex items-center"> <IoLocationOutline className="mr-2" size={20}/> Year of publish</span>
                            <span className="ml-4 text-base text-gray-400">{yearOfPublishing}</span>
                        </p>
                    </div>
                    <p className="ml-4 mt-3 flex">
                        <span className="text-base text-gray-400 flex items-center"><TiGroupOutline size={20} className="mr-2"/> Publisher: {publisher}</span>
                        <span className="text-base text-gray-400 flex items-center"><TbBrandPagekit size={20} className="mr-2 ml-8"/> Page: {totalPages}</span>
                    </p>
                    <hr className="mx-4 my-3"/>
                    <div className="flex flex-row ml-4">
                        <p className="px-3 pb-1 rounded-2xl bg-blue-50 text-blue-400 ">Category: {category}</p>
                        <p className="ml-4 px-3 pb-1 rounded-2xl bg-orange-50 text-orange-400 ">Rating: {rating}</p>
                        <button className="ml-4 px-3 rounded-2xl text-white bg-green-400 cursor-pointer">View Details</button>
                        <button onClick={() => handleDelete(bookId)} className="ml-4 px-3 rounded-2xl bg-red-400 text-white cursor-pointer">Delete</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Read;