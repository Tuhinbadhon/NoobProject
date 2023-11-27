import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { img1, img2, img3, img4, img5, img6 } from "../../../assets/index";

const Banner = () => {
  const imageSources = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="mb-8">
      <Carousel>
        {imageSources.map((imgSrc, index) => (
          <div key={index}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
