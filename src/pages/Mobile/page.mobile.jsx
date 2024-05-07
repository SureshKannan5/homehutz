import { CiSearch } from "react-icons/ci";
import HotelCard from "../../app/components/component.hoteCard";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import SVG from "react-inlinesvg";
import {
  MAP_ICON,
  MENU_ASSET_ICON,
  MENU_ICON,
  SUPPORT_ICON,
} from "../../assets/assets.imports";
import Image from "../../app/components/component.Image";

const MobileScreenContent = () => {
  return (
    <section className="sm:block xs:block lg:hidden">
      <div className="container h-screen mx-auto p-1">
        <div className="flex shadow-[0px_3px_8px_0px_#0000001F] rounded-[0.625rem] flex-auto items-center  border border-solid border-[#DADADA] px-3 py-[0.563rem] overflow-auto gap-2">
          <CiSearch style={{ height: 20, width: 20 }} />
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium">Going To</div>
            <div className="flex text-xs font-normal text-[#696767]">
              <div className="after:content-'A' after:left-0 after:mx-1.5 after:inline-block after:h-1 after:w-1 after:rounded-full after:bg-gray-400">
                Anywhere
              </div>
              <div className="whitespace-nowrap">Any week</div>
              <span className="before:content-'A' 'before:left-0 overflow-hidden text-ellipsis whitespace-nowrap before:mx-1.5 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-gray-400">
                Add guests
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[1.875rem]">
          {Array.from({ length: 10 }).map((data) => (
            <div className="pt-[1.875rem]" key={data}>
              {" "}
              <HotelCard />
            </div>
          ))}
        </div>
      </div>
      <footer className="fixed w-full bottom-0 left-0 z-10">
        <div className="rounded-t-[1.25rem] bg-[#FFFFFF] px-[1.813rem] pb-[0.688rem] pt-[0.688rem] shadow-[0px_-1px_20px_0px_#00000026]">
          <ul className="flex justify-between">
            <li>
              <Link className="flex flex-col items-center hover:text-brand">
                <IoSearch style={{ height: 24, width: 24 }} />
                <span className="flex flex-col text-xs font-normal ">
                  Explore
                </span>
              </Link>
            </li>

            <li>
              <Link className="flex flex-col items-center hover:text-brand">
                <SVG src={MAP_ICON} style={{ height: 24, width: 24 }} />
                <span className="flex flex-col text-xs font-normal">Trips</span>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center hover:text-brand">
                <SVG src={SUPPORT_ICON} style={{ height: 24, width: 24 }} />
                <span className="flex flex-col text-xs font-normald">
                  Contact us
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex flex-col items-center hover:text-brand">
                <SVG src={MENU_ASSET_ICON} style={{ height: 24, width: 24 }} />

                <span className="flex flex-col text-xs font-normal">Menu</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default MobileScreenContent;
