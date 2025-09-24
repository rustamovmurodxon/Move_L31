import { memo } from "react";
import logo from "@/shared/assets/LOGOTYPE – BILETICK.svg";
import home from "@/shared/assets/tv-2-line.svg";
import seans from "@/shared/assets/tablet-line.svg";
import tickets from "@/shared/assets/coupon-3-line.svg";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import search from "@/shared/assets/search-line.svg";
export const Header = memo(() => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center py-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex text-white  gap-7 ">
            <div className="text-xl">
              <NavLink to={"/"}>
                <img src={home} alt="" className="pl-3" />
                Home
              </NavLink>
            </div>
            <div className="text-xl">
              <NavLink to={"/movie"}>
                <img src={seans} alt="" className="pl-3" />
                Movie
              </NavLink>
            </div>
            <div className="text-xl">
              <NavLink to={"/ticket"}>
                <img src={tickets} alt="" className="pl-3" />
                Ticket
              </NavLink>
            </div>
            <div className="text-xl">
              <NavLink to={"/search"}>
                <img src={search} alt="" className="pl-3" />
                Search
              </NavLink>
            </div>
          </div>
          <div className="text-white flex gap-3">
            <select name="language" id="language">
              <option value="Uzb">Uzb</option>
              <option value="Rus">Rus</option>
            </select>
            <CgProfile className="text-3xl" />
          </div>
        </div>
      </div>
    </header>
  );
});
