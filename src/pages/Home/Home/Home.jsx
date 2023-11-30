import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import OfferBanner from "../OfferBanner/OfferBanner";
import ShopByBrands from "../ShopByBrands/ShopByBrands";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import UpSection from "../UpSection/UpSection";
import YearProduct from "../YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex max-[1024px]:flex-col gap-4 mb-12 max-[1024px]:pb-0 items-center">
        <div className="basis-3/4">
          <Banner />
        </div>
        <div className="basis-1/4 rounded shadow-sm">
          <ShopByBrands />
        </div>
      </div>
      <div className="max-[860px]:hidden">
        <UpSection />
      </div>
      <Category />
      <BestSellers />
      <OfferBanner />
      <SpecialOffers />
      <YearProduct />
    </div>
  );
};

export default Home;
