import { memo } from "react";
import { DateFilter } from "@/features/datefilter";
import { MovieGenreFilter } from "@/features/gender-filter";

export const MovieSort = memo(() => {
  return (
    <div className="container flex items-center gap-10 my-5 ">
      {/* <Sorted/> */}
      <DateFilter />
      <MovieGenreFilter />
    </div>
  );
});
