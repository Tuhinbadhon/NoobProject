import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import OfferBanner from "../OfferBanner/OfferBanner";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import UpSection from "../UpSection/UpSection";
import YearProduct from "../YearProduct/YearProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <div className="max-[860px]:hidden">
          <UpSection />
        </div>
        <Category />
        <BestSellers />
        <OfferBanner />
        <SpecialOffers />
        <YearProduct />
      </div>
    </div>
  );
};

export default Home;
