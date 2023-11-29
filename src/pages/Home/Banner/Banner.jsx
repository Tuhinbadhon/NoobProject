import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img1, img2, img3 } from "../../../assets/index";

const imageSources = [img1, img2, img3];

const imageLinks = [
  "https://www.ipsitasoft.com/",
  "https://www.ipsitasoft.com/",
  "https://www.ipsitasoft.com/",
];

const Banner = () => {
  return (
    <div className="max-w-4xl">
      <Carousel
        className="carousel-root"
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {imageSources.map((imgSrc, index) => (
          <a
            key={index}
            href={imageLinks[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center cursor-pointer block"
          >
            <img src={imgSrc} alt={`Slide ${index + 1}`} className="w-full" />
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
