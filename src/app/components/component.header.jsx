import { Link } from "react-router-dom";
import {
  AVATAR_ICON,
  BRAND_LOGO,
  MENU_ICON,
} from "../../assets/assets.imports";
import Image from "./component.Image";
import Button from "./component.button";

const NavBar = () => {
  return (
    <header className="top-0 z-50 w-full py-3 sticky lg:flex bg-white ">
      <div className="mx-auto  px-10 w-full flex justify-between">
        <div>
          <Image src={BRAND_LOGO} alt={"logo"} imgClassName="h-18 w-48" />
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/boost-pro"}>
            <Button className="border-brand px-4 py-2 rounded-full font-semibold text-brand text-base h-[3.2rem] w-[9.4375rem] border hover:bg-brand hover:text-white transition-all ease-in-out duration-500">
              Boost Pro
            </Button>
          </Link>
          <Button className="inline-flex items-center flex-row border-2 border-black rounded-full space-x-4 w-[7.25rem] h-[3.1875rem]">
            <Image src={AVATAR_ICON} alt={"avatar"} imgClassName="h-18 w-11" />
            <Image src={MENU_ICON} alt={"menu"} imgClassName="h-7 w-7" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
