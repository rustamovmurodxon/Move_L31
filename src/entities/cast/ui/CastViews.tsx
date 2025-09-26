import { memo, useState, type FC } from "react";
import { useCast } from "../modal/useCast";
import { createImageUrl } from "@/shared/utils";
import { Loading } from "@/features/loading/ui/Loading";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
interface Props{
    id: string
    type: string
}
export const CastViews:FC<Props> = memo((props) => {
    const {id,type}=props
    const {getCasts} =useCast()
    const {data}=getCasts(id)
    const [isloading, setLoading]=useState(true)
    console.log(data && data[type]);
    const navigate=useNavigate()
    {
        isloading && <Loading/>
    }
    
    const rcard=(item:any,i:number)=>{
        if (!item) return null;
        return (
            
            <div
              key={item.cast_id || item.credit_id || i}
              className=" cursor-pointer bg-white dark:bg-sy rounded-xl shadow-sm 
                         hover:shadow-lg hover:scale-105 transition-transform duration-200 
                         w-[120px] sm:w-[140px] md:w-[160px] flex-shrink-0"
              onClick={() => navigate(`/crew/${item.id}`)}
            >
              {item.profile_path ? (
                <img
                  className="w-full aspect-[2/3] object-cover rounded-t-xl"
                  src={createImageUrl(item.profile_path)}
                  alt={item.original_name}
                />
              ) : (
                <div
                  className="w-full aspect-[2/3] flex items-center justify-center 
                                rounded-t-xl bg-gray-200 dark:bg-gray-700 text-gray-500"
                >
                  <FaUser size={40} />
                </div>
              )}
              <div className="p-2">
                <p className="font-medium text-sm text-black dark:text-white truncate">
                  {item.original_name}
                </p>
                <p className="text-xs text-th dark:text-gray-400 truncate">
                  {type === "crew" ? item.job : item.character}
                </p>
              </div>
            </div>
          );
    }



    // return <div>CastViews {type}
    // <div className="flex overflow-x-auto container gap-2">
    //     {
    //        data&& data.cast?.map((item:any)=>(
    //             <div  key={item.cast_id}>
    //                 <img className="rounded-md w-28 h-36 " src={createImageUrl(item.profile_path) } alt="" />
    //                 <p className="line-clamp-1 cursor-pointer" title={item.original_name} > {item.original_name}</p>
    //                 <p className="line-clamp-1 cursor-pointer" title={item.character} >{item.character}</p>
    //             </div>
    //         ))
    //     }
    // </div>
    // </div>;
    return (
        <div className="py-4">
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden px-1 scrollbar-hide">
            {(isloading ? Array.from({ length: 10 }) : data?.[type]).map(
              (item: any, i: number) => rcard(item, i)
            )}
          </div>
        </div>
      );
});
