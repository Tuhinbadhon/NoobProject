import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
//import Navbar from "../pages/Shared/Navbar/Navbar";
import SpecialCase from "../components/SpecialCase/SpecialCase";

const Main = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <SpecialCase />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
