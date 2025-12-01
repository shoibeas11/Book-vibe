import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({book}) => {
    const {image,bookName,publisher,rating,bookId} = book;
    return (
        <Link to={`/${bookId}`} className="card w-85 border border-gray-300 rounded-lg mb-10">
           
            <div className=' flex flex-col justify-around items-center mt-4 ml-3 rounded-lg w-[93%] h-[300px] bg-gray-100'>
                    <img className='w-[230px] h-[250px] rounded-b-lg'
                src={image}
                alt="Shoes" />
            </div>

            <div className='flex flex-row'>
                <p className='text-green-400 font-semibold mt-4 ml-4 px-3 bg-gray-100 rounded-2xl'>Young Adult</p>
                <p className='text-green-400 font-semibold mt-4 ml-4 px-3 bg-gray-100 rounded-2xl'>Identity</p>
            </div>
            
            <div className="ml-4 mt-4">
                <h2 className="text-xl font-semibold">
                {bookName}
                </h2>
                <p className='text-base text-gray-400 mb-2'>By : {publisher} </p>
                <hr className='w-[90%] ml-3 bg-gray-100' />
                <div className='flex flex-row mt-3 w-full justify-between'>
                    <p className='mb-3 text-gray-400 text-base'>Fiction</p>
                    <p className='flex flex-row items-center gap-2 mb-3 pr-4 text-gray-400 text-base'>{rating} <span><CiStar size={20} /></span> </p>
                </div>
                
            </div>
        </Link>
    );
};

export default Book;