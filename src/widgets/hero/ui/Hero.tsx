import { memo, useState, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { createImageUrl } from "@/shared/utils";
import { FaPlay } from "react-icons/fa";
import type { IMovie } from "@/entities/movie";
import { useNavigate } from "react-router-dom";

interface Props {
  data: IMovie[];
}

export const Hero: FC<Props> = memo(({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
const navigate =useNavigate()
  return (
    <div className="container mx-auto px-4">
      <div className="mb-1">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              borderRadius: "12px",
              maxHeight: "640px",
              width: "100%",
              height: "640px",
            } as React.CSSProperties
          }
          loop
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 container"
        >
          {data?.map((item: IMovie) => (
            <SwiperSlide key={item.id}>
              <div onClick={()=> navigate(`/movie/${item.id}`)}
                className="w-full h-full rounded-xl bg-cover bg-center bg-no-repeat flex items-end justify-center p-6"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${createImageUrl(
                    item?.poster_path
                  )})`,
                }}
                title={item.title}
              >
                <div className="text-center max-w-4xl px-6 ">
                  <div className="bg-white text-[#C61F1F] cursor-pointer rounded-full p-6 flex absolute top-[45%] left-[47%] ">
                    <FaPlay className="text-lg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-2xl mx-auto">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={10}
          slidesPerView={6}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="thumbs-swiper"
        >
          {data?.map((item: any) => (
            <SwiperSlide key={item.id} className="cursor-pointer">
              <div
                className="h-[120px] overflow-hidden rounded-lg mx-auto"
                title={item.title}
              >
                <img
                  src={createImageUrl(item.backdrop_path)}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-50  hover:opacity-100 transition-opacity"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});