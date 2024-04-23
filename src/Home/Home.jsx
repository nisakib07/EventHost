import Banner from "./Banner";
import Events from "./Events";
import HostEvent from "./HostEvent";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Events></Events>
      <HostEvent></HostEvent>
    </div>
  );
};

export default Home;
