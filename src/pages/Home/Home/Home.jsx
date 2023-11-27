import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import UpSection from "../UpSection/UpSection";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <UpSection />
      <Category />
      <BestSellers />
    </div>
  );
};

export default Home;
