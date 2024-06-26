import AllBlogPost from "./AllBlogPost/AllBlogPost";
import AllCategoryCard from "./AllCategoryCard/AllCategoryCard";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <AllCategoryCard></AllCategoryCard> */}
            <AllBlogPost></AllBlogPost>
        </div>
    );
};

export default Home;