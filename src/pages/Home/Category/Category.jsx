import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./style.css";

import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
} from "../../../assets";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const slideContent = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
];

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Trip Inspiration"}
        heading={"Find the perfect place to go activities, hotels, and more."}
      />
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideContent.map((content, index) => (
          <SwiperSlide key={index}>
            <img src={content} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
