import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./HeaderSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="slider-1">
          <span>Markup: Title With Special Characters</span>
          <p>
            Markup: Title With Special Characters ~`!@#$%^&*()-_=+{}[]/;:'”?,.
            Putting special characters in the title should have no adverse
            effect on the layout or functionality. Special characters in the
            post title have been known to cause issues with JavaScript when it
            is minified, especially in the admin when editing the post itself
            ie. issues with metaboxes, media upload, […]
          </p>
        </div>
        <img
          src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
      <div className="slider-1">
          <span>Markup: HTML Tags and Formatting</span>
          <p>
          Headings Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to […]
          </p>
        </div>
        <img
          src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
      <div className="slider-1">
          <span>Markup: Image Alignment</span>
          <p>
          Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.
          </p>
        </div>
        <img
          src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
