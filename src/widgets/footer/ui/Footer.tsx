import {
  FaApple,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { memo } from "react";
import { BsGooglePlay } from "react-icons/bs";
import logo from "@/shared/assets/EMBLEM.svg"
export const Footer = memo(() => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
            <BsGooglePlay className="h-6 w-auto" />
              <p>Google Play</p>

            </div>
              <div className="flex gap-2">
              <FaApple className="h-6 w-auto" />
                <p>App Store</p>
              </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">o нас</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">
              Публичная оферта
            </li>
            <li className="hover:text-red-500 cursor-pointer">Реклама</li>
            <li className="hover:text-red-500 cursor-pointer">F.A.Q</li>
            <li className="hover:text-red-500 cursor-pointer">Контакты</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Категории</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Кино</li>
            <li className="hover:text-red-500 cursor-pointer">Театр</li>
            <li className="hover:text-red-500 cursor-pointer">Концерты</li>
            <li className="hover:text-red-500 cursor-pointer">Спорт</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Связаться c нами</h3>
          <p className="text-red-500 font-semibold text-lg mb-4">
            +998 (95) 897-33-38
          </p>
          <h3 className="font-semibold mb-3 text-lg">Социальные сети</h3>
          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-red-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
