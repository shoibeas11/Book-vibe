
import { NavLink } from "react-router";


const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-around fixed z-10 ">
                <div className="">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className=" text-gray-500 font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        

                        <NavLink to='/' className={({isActive}) => isActive? 'text-green-500 px-4 py-2 border-2 border-green-500 rounded-lg mb-4': 'text-gray-500'}>Home</NavLink>
                        <NavLink to='/listedBooks' className={({isActive}) => isActive? 'text-green-500 px-4 py-2 border-2 border-green-500 rounded-lg': 'text-gray-500'}>Listed Books</NavLink>
                        <NavLink to='/pageToRead' className={({isActive}) => isActive? 'text-green-500 px-4 py-2 border-2 border-green-500 rounded-lg': 'text-gray-500'} >Pages to read</NavLink>

                    </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className=" gap-6 text-gray-500 font-semibold menu menu-horizontal px-1">
                        <NavLink to='/' className={({isActive}) => isActive? 'text-green-500 px-4 py-2 border-2 border-green-500 rounded-lg': 'text-gray-500'}>Home</NavLink>
                        <NavLink to='/listedBooks' className={({isActive}) => isActive? 'text-green-500 px-4 py-2 border-2 border-green-500 rounded-lg': 'text-gray-500'}>Listed Books</NavLink>
                        <NavLink to='/pageToRead' className={({isActive}) => isActive? 'text-green-500 px-4 py-2 border-2 border-green-500 rounded-lg': 'text-gray-500'} >Pages to read</NavLink>
                    </ul>
                </div>
                <div>
                    <a className="btn mr-3 bg-green-500 rounded-lg text-white font-semibold">Sign Up</a>
                    <a className="btn bg-sky-500 rounded-lg text-white font-semibold">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;