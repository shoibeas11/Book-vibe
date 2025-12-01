

const ListedBooks = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="mt-6 w-4/5 rounded-xl mx-auto bg-gray-100">
                <p className="text-center text-2xl font-bold py-10">Books</p>
            </div>
            <div className="dropdown dropdown-right mt-5">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">Short by</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 1</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ListedBooks;