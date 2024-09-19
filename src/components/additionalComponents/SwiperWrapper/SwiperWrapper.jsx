import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

const SwiperWrapper = ({ children, slidesPerView, breakpoints }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      direction="horizontal"
      loop
      autoplay={{ delay: 1000 }}
      navigation
      pagination
      breakpoints={breakpoints}
      slidesPerView={slidesPerView}
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
