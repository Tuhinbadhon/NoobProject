import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Recommended from "../Recommended/Recommended";
import EasyToUse from "../EasyToUse/EasyToUse";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Featured />
      <EasyToUse />
      <Recommended />
    </div>
  );
};

export default Home;
