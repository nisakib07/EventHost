import ButtonTemp from "./ButtonTemp";
import love from "../assets/Vector-1.png";
import { FaLocationDot } from "react-icons/fa6";
import ticket from "../assets/Vector.png";

const EventCard = ({ img }) => {
  return (
    <div className="bg-[#F1F3FF] p-6 mx-6 md:mx-0 rounded-lg relative">
      <div className="border-b-2 border-dashed pb-4 border-[#591BFF]">
        <img className="w-full h-full object-cover" src={img} alt="" />
        <div className="absolute top-[12%] left-8">
          <ButtonTemp text={"Online"}></ButtonTemp>
        </div>
        <div className="absolute top-[12%] right-8">
          <ButtonTemp text={"Favorite"} img={love}></ButtonTemp>
        </div>
        <div className="w-10 h-10 bg-white rounded-full absolute top-[47%] md:top-[54%] left-[-4%]"></div>
        <div className="w-10 h-10 bg-white rounded-full absolute top-[47%] md:top-[54%] right-[-4%]"></div>
      </div>
      <div className="flex justify-between my-4">
        <div>
          <ButtonTemp text={"Music"}></ButtonTemp>
          <div className=" flex items-center my-4 gap-2">
            <FaLocationDot className="text-[#591BFF]"></FaLocationDot>
            <p>Celebrity Convention Hall</p>
          </div>
          <h3 className="text-2xl font-semibold">Roufian's HSC-24 Rag Day</h3>
        </div>

        <div>
          <div className="bg-white text-center p-2 rounded-md">
            <p className="text-lg">Apr</p>
            <p className="text-2xl text-[#591BFF] font-bold">20</p>
            <p className="text-lg">10:00 PM</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="bg-[#7342F9] max-w-fit px-2 text-white rounded-md flex items-center gap-2 py-2">
          <img className="" src={ticket} alt="" />
          See Ticket
        </div>

        <div className="bg-white px-3 rounded-lg flex items-center gap-3">
          <p className="text-4xl text-[#591BFF] font-bold">20</p>
          <p className="text-xl">
            Seat <br /> Left
          </p>
        </div>

        <p className="text-[#591BFF] text-lg">See More</p>
      </div>
    </div>
  );
};

export default EventCard;
