import Product from "../../../components/Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/index";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Catagories = () => {
  return (
    <div className="w-full mb-12">
      <SectionTitle
        subHeading={"Check & Get Your Desired Product!"}
        heading={"Featured Products"}
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 max-[495px]:grid-cols-1 xl:grid-cols-4 gap-10 mx-auto">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Fantech Wired Gaming Keyboard"
          price="35.00"
          stock="5"
          size="100"
          color="Blank"
          brand="Fantech"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="UiiSii TWS21 SongBirds Airbuds True Wireless"
          price="180.00"
          color="Black"
          brand="Pico"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="DJ1 Wireless Mouse"
          price="25.00"
          color="Mixed"
          brand="DJI"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Fantech MARS II HQ54 Wired Gaming Headsets"
          price="220.00"
          color="Black and White"
          brand="InFocus"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default Catagories;
