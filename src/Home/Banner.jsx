import Wrapper from "./Wrapper";
import ticket from "../assets/Vector.png";

const Banner = () => {
  return (
    <div>
      <Wrapper>
        <div
          className="hero mt-10 h-[450px] rounded-lg"
          style={{
            backgroundImage: "url(https://i.ibb.co/vccw2pF/Rectangle-8.png)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content">
            <div className="flex flex-col justify-start items-start">
              <h1 className="mb-5 text-5xl font-bold">CMA Fest</h1>
              <p className="mb-5 text-xl">
                Make memories that will last a lifetime. See your favorite
                artists live at CMA Fest!
              </p>
              <div className="flex gap-9">
                <div className="flex items-center gap-3 bg-[#7848F9] px-3 py-2 rounded-lg">
                  <img src={ticket} alt="" />
                  <p>Get Ticket</p>
                </div>
                <div className="border rounded-lg px-3 py-2">
                  <p>Explore All Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
