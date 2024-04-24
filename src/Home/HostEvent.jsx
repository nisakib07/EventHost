import hostImg from "../assets/Group 29.png";
import Wrapper from "./Wrapper";
import { TiTick } from "react-icons/ti";

import Clock from "../assets/Group.png";

const HostEvent = () => {
  return (
    <Wrapper>
      <div className="mt-10 bg-gradient-to-br from-[#7B4AFF] to-[#8053FA] rounded-lg py-12 px-8 flex items-center flex-col justify-center md:flex-row gap-10 relative">
        <img
          className="w-3/5 md:w-2/5 border-2 border-dashed p-2"
          src={hostImg}
          alt=""
        />
        <div className="text-white md:w-[700px]">
          <h1 className="text-2xl md:text-4xl mb-3">
            Host Your Event Easily & Automatedly With Us
          </h1>
          <p className="text-md md:text-xl">
            We Provide The Best Event Ticketing & Management Solutions
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-2">
              <span className="bg-white text-[#7B4AFF] rounded-lg">
                <TiTick></TiTick>
              </span>{" "}
              Host Your Event With Easy Steps!
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-white text-[#7B4AFF] rounded-lg">
                <TiTick></TiTick>
              </span>{" "}
              Automated Payment System & Ticket Will Be Sent to Mail.
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-white text-[#7B4AFF] rounded-lg">
                <TiTick></TiTick>
              </span>{" "}
              Access To Registration & Transaction Reports.
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-white text-[#7B4AFF] rounded-lg">
                <TiTick></TiTick>
              </span>{" "}
              Send Bulk Personalized Mail With Attachments.
            </p>
          </div>
        </div>

        <div className="absolute w-1/5 bottom-[0] right-[0]">
          <img className="" src={Clock} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HostEvent;
