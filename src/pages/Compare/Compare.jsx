import { useEffect } from "react";

const Compare = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className="m-auto max-w-6xl p-28">Compare your products</h3>
    </div>
  );
};

export default Compare;
