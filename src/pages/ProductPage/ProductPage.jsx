import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";

const ProductPage = () => {
  const location = useLocation();
  const { state } = location;
  const productItem = state?.item;
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isHeartRed, setIsHeartRed] = useState(false);

  const handleToggleHeartColor = () => {
    setIsHeartRed(!isHeartRed);
  };

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!productItem) {
    return <div>No product details available.</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: productItem._id,
        name: productItem.productName,
        quantity: 1,
        image: productItem.img,
        badge: productItem.badge,
        stock: productItem.stock,
        price: productItem.price,
        colors: productItem.color,
        brand: productItem.brand,
      })
    );
    alert("Item added to cart!");
  };

  return (
    <div className="container mx-auto m-4 rounded bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 m-auto max-w-6xl p-4">
        <div>
          <img
            src={productItem.img}
            alt={productItem.productName}
            className="w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            {productItem.productName}
          </h1>
          <p className="m-auto text-2xl text-gray-700 font-bold mt-10">
            ${productItem.price}
          </p>
          <div className="flex items-center mb-4 mt-4">
            <div className="flex items-center">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-gray-200 text-gray-700 font-bold px-3 py-1 rounded-md mr-2"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center border border-gray-300 rounded-md"
              />
              <button
                onClick={handleIncreaseQuantity}
                className="bg-gray-200 text-gray-700 font-bold px-3 py-1 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md ml-8 
              transition-colors ease-in-out duration-500 hover:bg-blue-800"
            >
              <FaShoppingCart className="mx-2" size={30} />
            </button>
            <button
              onClick={handleToggleHeartColor}
              className="text-gray-600 hover:underline cursor-pointer justify-center"
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
            >
              <BsSuitHeartFill
                className="m-auto ml-10"
                size={35}
                color={isHeartHovered || isHeartRed ? "red" : "currentColor"}
              />
            </button>
          </div>
          <div className="text-gray-600 text-sm mb-4 mt-8">
            <p>
              <span className="font-semibold">In Stock:</span>{" "}
              <span className="font-semibold">{productItem.stock} pc(s)</span>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Size:</span> {productItem.size}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Color:</span> {productItem.color}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Brand:</span> {productItem.brand}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Specifications:</span>
              {productItem.specs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
