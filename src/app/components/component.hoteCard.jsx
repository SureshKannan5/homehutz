import { AiFillStar, AiOutlineWifi } from "react-icons/ai";

const HotelCard = () => {
  return (
    <div className="p-[0.938rem] rounded-[0.938rem] shadow-[0px_3px_12px_0px_#00000033]">
      <div className=" flex justify-between items-center">
        <div>
          <h6 className="text-base font-semibold text-black">
            ITC Grand Chola
          </h6>
          <p className="mt-[0.313rem] text-sm font-normal text-[#696767]">
            Chennai, Tamilnadu
          </p>
        </div>
        <div className="inline-flex gap-1 items-center">
          <AiFillStar color="#FFDC64" style={{ height: 20, width: 20 }} />
          4.3
        </div>
      </div>
      <div className="mt-[0.563rem] text-sm font-normal text-[#717171]">
        4 Guests - 2 Bedroom - 2 Bed - 2 Bath
      </div>
      <AiOutlineWifi
        className="mt-[1.313rem]"
        style={{ height: 20, width: 20 }}
      />
      <div className="mt-2">
        <p className="font-semibold text-xl">
          ₹<span className="underline underline-offset-[3.5px]">2,663.05</span>
          <span className="ml-2 text-sm font-normal">
            (23 Apr -&nbsp;24 Apr)
          </span>
        </p>
        <p className="mt-2 text-sm font-normal text-[#696767]">
          Final price for 1 night,Including taxes & fees
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
