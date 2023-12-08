import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import Details from "../Details/Details";
import Sidelog from "../Sidelog/Sidelog";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 mb-8 mx-auto pt-16 pb-0 items-center">
        <div className="basis-1">
          <Banner />
        </div>
      </div>
      <Sidelog />
      <br />
      <Catagories />
      <Details />
    </div>
  );
};

export default Home;
