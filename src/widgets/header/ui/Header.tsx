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
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <div className="">
            <ul className="flex text-white  gap-7 ">
              <li>
                <NavLink to={"/"} className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                } >
                  <img src={home} alt="" className="" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/movie"} className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                } >
                  <img src={seans} alt="" className="" />
                  Movie
                </NavLink>
              </li>
              <li>
                <NavLink to={"/ticket"} className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                } >
                  <img src={tickets} alt="" className="" />
                  Ticket
                </NavLink>
              </li>
              <li>
                <NavLink to={"/search"} className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                } >
                  <img src={search} alt="" className="" />
                  Search
                </NavLink>
              </li>
            </ul>
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
