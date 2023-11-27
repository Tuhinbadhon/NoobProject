import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <Category />
      <BestSellers />
    </div>
  );
};

export default Home;
