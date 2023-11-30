import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
} from "../../../assets/index";

const ShopByBrands = () => {
  const brandImages = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];
  return (
    <div className="flex flex-col items-center m-auto p-4 bg-gray-50 rounded">
      <h2 className="text-lg font-bold mb-4 text-gray-600 uppercase">
        Shop by Brands
      </h2>
      <div
        className="grid grid-cols-3 max-[1024px]:grid-cols-9 max-[768px]:grid-cols-6
       max-[500px]:grid-cols-4  max-[300px]:grid-cols-3 gap-4"
      >
        {brandImages.map((imgSrc, index) => (
          <a
            href="https://www.ipsitasoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg
             hover:shadow-blue-200 w-20 h-20 flex items-center justify-center"
            key={index}
          >
            <img src={imgSrc} alt={index} width="48" height="48" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
