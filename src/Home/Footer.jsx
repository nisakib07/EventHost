import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Wrapper from "./Wrapper";
const Footer = () => {
  return (
    <div className="p-5 lg:p-10 bg-gradient-to-r from-[#591BFF] to-blue-300 mt-10">
      <Wrapper>
        <footer className="footer py-10  text-white">
          <aside>
            <img src="https://i.ibb.co/FXVYDK8/Event-Host.png" alt="" />
            <p className="mt-2 text-base">
              IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X, Agargaon,{" "}
              <br /> Dhaka - 1207 02222-222222, 01111111111
            </p>
          </aside>
          <nav>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contacts</a>
          </nav>
          <nav>
            <a className="link link-hover">Event Dashboard</a>
            <a className="link link-hover">Terms & Condition</a>
            <a className="link link-hover">Privacy & Refund Policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Follow Us</h6>
            <div className="grid grid-flow-col gap-4">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
              <FaYoutube></FaYoutube>
            </div>
          </nav>
        </footer>
        <footer className="footer px-10 py-4 border-t border-gray-300 text-white">
          <aside className="items-center grid-flow-col">
            <div className="flex justify-center items-center gap-5">
              <p>Pay With </p>
              <img
                className="w-14"
                src="https://i.ibb.co/DWpdvB7/image-9.png"
                alt=""
              />
              <img
                className="w-6"
                src="https://i.ibb.co/nRft0kz/Group-40.png"
                alt=""
              />
              <img
                className="w-14"
                src="https://i.ibb.co/HPRyzbb/rocket.png"
                alt=""
              />
            </div>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <p>©2023 TickHost & UVTR. All right reserved</p>
          </nav>
        </footer>
      </Wrapper>
    </div>
  );
};

export default Footer;
