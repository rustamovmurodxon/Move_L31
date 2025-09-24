import { useMovie, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { createImageUrl } from "@/shared/utils";
interface Props {
  movies: IMovie[];
}
export const Hero: FC<Props> = memo((props:any) => {
  const { seans } = props;
  const { getMovies } = useMovie();
  const { data } = getMovies();
  console.log(data?.results?.slice(0, 6));

  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  return (
    <div>
      <>
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {seans?.map((item: any) => (
            <SwiperSlide>
              <img src={createImageUrl(item.poster_path)} />
            </SwiperSlide>
          ))}
        </Swiper>

      </>

      <div></div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
      {seans?.map((item: any) => (
            <SwiperSlide>
              <img src={createImageUrl(item.poster_path)} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
});
