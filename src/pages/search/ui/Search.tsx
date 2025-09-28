import { SearchMovie } from "@/features/search-movie";
import { memo } from "react";

export const Search = memo(() => {
  return <div>
    <SearchMovie/>
  </div>;
});
