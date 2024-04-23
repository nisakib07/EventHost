import Logo from "../../src/assets/EventHost.png";
import Wrapper from "./Wrapper";
import profile from "../assets/Ellipse 3.png";
import cart from "../assets/Group 7.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Events</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <Wrapper>
        <div className="navbar bg-gradient-to-r from-[#5d20ff] to-[#9F7CFF] rounded-lg px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white text-lg">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end flex gap-4">
            <img src={profile} alt="" />
            <img src={cart} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
