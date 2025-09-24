import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  return (
    <div className="container">
      <div className="flex">
      <section>
        <img className="p-5 " src={createImageUrl(data?.backdrop_path)} alt="" />
      </section>
      <section className="p-2">
        <h1 className="text-3xl">{data?.title}</h1>
        <p className="text-xl">{data?.budget?.toLocaleString()} USD</p>
        <a href={data?.homepage} target="_blank">
          Link
        </a>
      </section>
      {/* <section className="flex overflow-x-auto container">
        {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
          <Image
            key={inx}
            className="min-w-[200px]"
            src={createImageUrl(item.file_path)}
            alt=""
          />
        ))}
      </section> */}

      </div>
      <div>
        <h1>Rewiev</h1>
        <div className="border flex gap-5 bg-gray-300 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>
        <div className="border flex gap-5 bg-gray-300 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>
        <div className="border flex gap-5 bg-gray-300 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>
        <div className="border flex gap-5 bg-gray-300 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>

      </div>
    </div>
  );
});
