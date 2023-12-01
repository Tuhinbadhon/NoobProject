import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className="m-auto max-w-6xl p-28">Products here</h3>
    </div>
  );
};

export default Products;
