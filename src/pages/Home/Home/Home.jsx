import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import OfferBanner from "../OfferBanner/OfferBanner";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import UpSection from "../UpSection/UpSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <UpSection />
        <Category />
        <BestSellers />
        <OfferBanner />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
