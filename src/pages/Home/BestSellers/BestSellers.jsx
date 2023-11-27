import Product from "../../../components/Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/index";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BestSellers = () => {
  return (
    <div className="w-full pb-20 mb-8">
      <SectionTitle
        subHeading={"Check & Get Your Desired Product!"}
        heading={"Best Seller"}
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 max-[495px]:grid-cols-1 xl:grid-cols-4 gap-10 mx-auto">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Fantech MARS II HQ54 Wired Gaming Headset"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Pico Neo 3 8GB RAM 256GB ROM All-In-One VR Headset"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="DJ1 Dual Battery Folding Camera Toy Drone"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="InFocus INF8650 86-inch 4K Interactive Touch Display"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
