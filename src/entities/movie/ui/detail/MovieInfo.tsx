import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { NavLink } from "react-router-dom";

interface Props {
  id: string;
}

interface IReview {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

const tabs = [
  { path: "", label: "Review" },
  { path: "cast", label: "Cast" },
  { path: "others", label: "Other" },
];
export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  const { data: reviews } = getMovieInfo(id, "reviews");
  return (
    <div className=" bg-black">
      <div className="flex container">
        <section>
          <img
            className="p-5  "
            src={createImageUrl(data?.backdrop_path)}
            alt=""
          />
        </section>
        <section className="p-2">
          <h1 className="text-3xl">{data?.title}</h1>
          <p className="text-xl">{data?.budget?.toLocaleString()} USD</p>
          <a href={data?.homepage} target="_blank">
            Link
          </a>
        </section>
      </div>

      <div>
        <section className="container flex overflow-x-auto gap-2 pb-4">
          {imageData?.backdrops
            ?.slice(0, 20)
            .map((item: { file_path: string }, inx: number) => (
              <Image
                key={inx}
                className="min-w-[200px]"
                src={createImageUrl(item.file_path)}
                alt=""
              />
            ))}
        </section>
        
        <div className="container flex gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 font-medium ${
                isActive
                  ? "border-b-2 border-py text-py dark:text-white"
                  : "text-gray-400 dark:text-gray-300"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>


        {/* {reviews?.results?.length > 0 && (
          <section className="container py-6 space-y-4">
            <h2 className="text-2xl font-semibold text-[#cdc6c6]">Reviews</h2>
            {reviews.results.map((review: IReview) => (
              <div
                key={review.id}
                className="p-4   rounded-lg shadow-sm bg-[#d4d4d492] "
              >
                <p className="text-sm text-gray-100">
                  By <span className="font-medium">{review.author}</span>
                </p>
                <p className="mt-2 text-gray-100 dark:text-gray-200 line-clamp-2">
                  {review.content}
                </p>
              </div>
            ))}
          </section>
        )} */}
      </div>
      {/* <div className="container">
        <h1>Rewiev</h1>
        <div className="border flex gap-5 bg-gray-400 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>
        <div className="border flex gap-5 bg-gray-400 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>
        <div className="border flex gap-5 bg-gray-400 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>
        <div className="border flex gap-5 bg-gray-400 rounded-xl">
          <div className="flex items-center border rounded-full p-2">img</div>
          <div>
            <p>Name</p>
            <p>title</p>
          </div>
        </div>

      </div> */}

    </div>
  );
});
