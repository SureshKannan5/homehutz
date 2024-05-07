import NavBar from "../../app/components/component.header";
import HotelCard from "../../app/components/component.hoteCard";
import Image from "../../app/components/component.Image";
import {
  HANGING_ASSET,
  HOME_IMAGE,
  SEARCH_ICON,
} from "../../assets/assets.imports";
import MobileScreenContent from "../Mobile/page.mobile";

const HomePage = () => {
  return (
    <>
      <MobileScreenContent />
      <div className="xs:hidden sm:hidden lg:block">
        <section className="absolute right-auto h-auto xl:left-[30%] z-[999] ">
          <div className="flex items-center space-x-[3.75rem]">
            <Image
              src={HANGING_ASSET}
              alt={"hang"}
              imgClassName={" h-full w-[19.62px] xl:mt-0 xl:h-full"}
            />
            <Image
              src={HANGING_ASSET}
              alt={"hang"}
              imgClassName=" h-[20.97625rem;] w-[19.62px] xl:mt-0 xl:h-[20.97625rem]"
            />
          </div>
        </section>
        <NavBar />
        <section className="relative mx-auto pt-10 container">
          <div className="flex justify-between flex-wrap">
            <div className="mt-[4.13rem] max-w-[563px]">
              <h1 className="text-[4.9375rem] font-bold leading-[6.625rem] lg:text-[4rem] lg:leading-[6.625rem]">
                Luxury <span className="text-brand">House</span> Renting
              </h1>
              <p className="text-gradientGray font-normal mt-[0.94rem] text-lg lg:text-[1.1rem]">
                Lorem Ipsum is simply dummy text of the printingin and
                typesetting industry. has been the {"industry's "}text of the.
              </p>
            </div>
            <Image
              src={HOME_IMAGE}
              alt="home_iage"
              imgClassName={
                "mt-10 h-[33.125rem] w-[40.5rem] rounded-xl lg:w-[37rem] xl:mt-0"
              }
            />
          </div>

          <div className="absolute bottom-[3.69rem] h-[6.75rem] w-[77.4375rem] rounded-[5.625rem] bg-white p-[10px]">
            <div className="h-[5.6rem] w-[76.2rem] rounded-[5.625rem] bg-[#ff28000f] flex">
              <div className="h-full w-[29.72%]  border-r-[#D8D8D8] cursor-pointer hover:bg-[#ff28000d] hover:border-r-brand rounded-l-[5.625rem] group border-r transition-colors duration-300">
                <div className="flex flex-col pl-[3.13rem] py-[1.16rem] gap-[0.5rem]  ">
                  <label className="group-hover:text-brand text-base text-black font-semibold transition-colors duration-300">
                    Going To
                  </label>
                  <input
                    className="placeholder:text-gradientGray outline-none bg-transparent"
                    placeholder=" Search Desination"
                  />
                </div>
              </div>
              <div className="h-full w-[19.5%]  border-r-[#D8D8D8] cursor-pointer hover:bg-[#ff28000d] hover:border-r-brand  group border-r transition-colors duration-300">
                <div className="flex flex-col pl-[1rem] py-[1.16rem] gap-[0.5rem]  ">
                  <label className="group-hover:text-brand text-base text-black font-semibold transition-colors duration-300">
                    Start Date
                  </label>
                  <input
                    className="placeholder:text-gradientGray outline-none bg-transparent"
                    placeholder="Add Dates"
                  />
                </div>
              </div>
              <div className="h-full w-[19.5%]  border-r-[#D8D8D8] cursor-pointer hover:bg-[#ff28000d] hover:border-r-brand  group border-r transition-colors duration-300">
                <div className="flex flex-col pl-[1rem] py-[1.16rem] gap-[0.5rem]  ">
                  <label className="group-hover:text-brand text-base text-black font-semibold transition-colors duration-300">
                    End Date
                  </label>
                  <input
                    className="placeholder:text-gradientGray outline-none bg-transparent"
                    placeholder="Add Dates"
                  />
                </div>
              </div>
              <div className="h-full w-[20%]  border-r-[#D8D8D8] cursor-pointer hover:bg-[#ff28000d] hover:border-r-brand  group border-r transition-colors duration-300">
                <div className="flex flex-col pl-[1rem] py-[1.16rem] gap-[0.5rem]  ">
                  <label className="group-hover:text-brand text-base text-black font-semibold transition-colors duration-300">
                    Travelers
                  </label>
                  <input
                    className="placeholder:text-gradientGray outline-none bg-transparent"
                    placeholder="1 Guests"
                  />
                </div>
              </div>
              <div className="pl-[2.25rem] pt-[0.56rem]">
                <img
                  alt="search--icon"
                  className="cursor-pointer h-[71px] w-[71px]"
                  src={SEARCH_ICON}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-6">
          <h2 className="font-bold text-3xl text-center w-full">
            Explore Hotels
          </h2>
          <div className=" grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 10 }).map((data) => (
              <HotelCard key={data} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
