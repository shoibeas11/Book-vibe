import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="w-4/5 h-[500px] mt-16 bg-gray-100 mx-auto rounded-2xl flex flex-row">
           <div className="w-[60%] flex flex-col justify-center">
                <p className="text-6xl pl-20 font-semibold">Books to freshen up Your Bookshelf</p>
                <Link to='/listedBooks'className=" w-[150px] text-center py-2 rounded-lg bg-green-400 text-white text-lg font-semibold ml-20 mt-10" >View the list</Link>
           </div>
           <div className="w-[40%]">
            <img src="../../../public/book-removebg-preview.png" className="mt-7" alt="" />
           </div>
        </div>
    );
};

export default Banner;