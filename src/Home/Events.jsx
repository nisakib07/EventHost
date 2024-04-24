import first from "../assets/Rectangle 16.png";
import second from "../assets/Rectangle 16-1.png";
import third from "../assets/Rectangle 16-2.png";
import Wrapper from "./Wrapper";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <Wrapper>
      <div className="mt-10 text-3xl lg:text-5xl text-center font-semibold">
        <h1>Events</h1>
      </div>
      <div className="flex justify-center my-8 gap-8 items-center flex-wrap">
        <p>All</p>
        <p>For You</p>
        <p>This Day</p>
        <p>This Week</p>
        <p className="bg-[#7342F9] text-white px-3 py-2 rounded-lg">Music</p>
        <p>Union</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EventCard img={first}></EventCard>
        <EventCard img={second}></EventCard>
        <EventCard img={third}></EventCard>
      </div>
    </Wrapper>
  );
};

export default Events;
