import { useEffect } from "react";

const Wishlist = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className="m-auto max-w-6xl p-28">Wishlist here</h3>
    </div>
  );
};

export default Wishlist;
