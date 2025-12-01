import { useLoaderData } from "react-router";
import Banner from "../component/homePageComponent/Banner";
import Books from "../component/homePageComponent/Books";

const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;