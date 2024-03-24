import Banner from "../banner/Banner";
import FeaturedJob from "../featuredJob/FeaturedJob";
import JobCategory from "../jobCategory/JobCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
            <h1>this is home page</h1>
        </div>
    );
};

export default Home;