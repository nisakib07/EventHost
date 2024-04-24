import AutomatedQr from "./AutomatedQr";
import Banner from "./Banner";
import Events from "./Events";
import Footer from "./Footer";
import HostEvent from "./HostEvent";
import Navbar from "./Navbar";
import Ticketing from "./Ticketing";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Events></Events>
      <HostEvent></HostEvent>
      <Ticketing></Ticketing>
      <AutomatedQr></AutomatedQr>
      <Footer></Footer>
    </div>
  );
};

export default Home;
