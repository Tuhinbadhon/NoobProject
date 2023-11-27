import { svg1, svg2, svg3, svg4, svg5 } from "../../../assets/index";

const UpSection = () => {
  return (
    <div className="ups rounded-4 flex flex-row justify-center mb-16 shadow-xl max-w-fit mx-auto p-4">
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg4} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0 ml-2">
          Trade <br /> In
        </p>
      </div>
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg3} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0">
          Official Product with <br /> Warranty
        </p>
      </div>
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg1} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0">
          0% EMI on Selected
          <br /> Products
        </p>
      </div>
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg2} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0">
          Fastest <br /> Delivery
        </p>
      </div>
      <div className="flex justify-content-start gap-2">
        <img src={svg5} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0">
          100% Online
          <br /> Payment
        </p>
      </div>
    </div>
  );
};

export default UpSection;
