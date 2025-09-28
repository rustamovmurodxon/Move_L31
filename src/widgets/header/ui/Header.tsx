import { memo } from "react";
import logo from "@/shared/assets/LOGOTYPE – BILETICK.svg";
import home from "@/shared/assets/tv-2-line.svg";
import seans from "@/shared/assets/tablet-line.svg";
import tickets from "@/shared/assets/coupon-3-line.svg";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import search from "@/shared/assets/search-line.svg";
import { useTranslation } from "react-i18next";
import { useNetworkState} from "@uidotdev/usehooks";
import { Avatar, Select} from "antd";

const { Option } = Select;

export const Header = memo(() => {
  const { online } = useNetworkState();
  // const location = useGeolocation();
  const { t, i18n } = useTranslation();
  return (
    <div>
      {!online && (
        <div className="text-center bg-red-500 text-white text-sm">offline</div>
      )}
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
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 flex flex-col items-center text-center"
                        : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                    }
                  >
                    <img src={home} alt="" className="" />
                    <span>{t("header.navigation.home")}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/movie"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 flex flex-col items-center text-center"
                        : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                    }
                  >
                    <img src={seans} alt="" className="" />
                    <span>{t("header.navigation.movies")}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/ticket"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 flex flex-col items-center text-center"
                        : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                    }
                  >
                    <img src={tickets} alt="" className="" />
                    <span>{t("header.navigation.ticket")}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/search"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 flex flex-col items-center text-center"
                        : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                    }
                  >
                    <img src={search} alt="" className="" />
                    <span>{t("header.navigation.search")}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="text-white flex gap-3">
              <Select
                style={{ width: 100 }}
                value={i18n.language}
                onChange={(value) => i18n.changeLanguage(value)}
                placeholder="Birini tanlang"
                optionLabelProp="label"
                
              >
                <Option value="uz" label="O'zbekiston">
                  <Avatar size="small" src="https://flagcdn.com/w20/uz.png" />{" "}
                  Uzb
                </Option>
                <Option value="ru" label="Rossiya">
                  <Avatar size="small" src="https://flagcdn.com/w20/ru.png" />{" "}
                  Rus
                </Option>
                <Option value="eng" label="AQSH">
                  <Avatar size="small" src="https://flagcdn.com/w20/us.png" />{" "}
                  Eng
                </Option>
              </Select>
              <CgProfile className="text-3xl" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
});
