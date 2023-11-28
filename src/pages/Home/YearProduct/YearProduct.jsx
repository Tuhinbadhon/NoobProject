import { Link } from "react-router-dom";
import { yearImg } from "../../../assets/index";

const YearProduct = () => {
  return (
    <div
      className="hero min-h-[50vh] mb-12"
      style={{
        backgroundImage: `url(${yearImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold uppercase">Product of the year</h1>
          <p className="mb-5 text-yellow-600 uppercase">
            Unmatched Quality, Unrivaled Performance
          </p>
          <Link to="/shop" className="btn glass">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YearProduct;
