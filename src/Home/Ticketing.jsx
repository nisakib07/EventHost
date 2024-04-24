import Wrapper from "./Wrapper";

const Ticketing = () => {
  return (
    <Wrapper>
      <div className="bg-gradient-to-t from-[#F1F3FF] to-white rounded mt-10">
        <div className="text-center space-y-3 lg:space-y-5 ">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Simplify Ticketing
          </h1>
          <p className="text-lg lg:text-xl font-normal text-[#8053FA]">
            First Ever Unique QR Ticketing <br />
            Platform For Event Registration & Booking
          </p>
          <button className="btn bg-gradient-to-r from-[#7342F9] to-[#8053FA] text-white">
            <img src="https://i.ibb.co/tQR5cCm/fi-sr-shield-check.png" alt="" />
            Secure Payment with
          </button>
        </div>
        {/* <div className="relative">
        <div className="absolute left-2 w-96 h-80 bg-[#8C3494] rounded-t-3xl"></div>
        <div className="absolute left-80 w-96 h-96 bg-[#ED0A80] rounded-t-3xl"></div>
        <div className="absolute right-2 w-96 h-80 bg-gradient-to-b from-[#F7941D] to-[#ED1C24] rounded-t-3xl"></div>
      </div> */}

        <div className="flex items-end justify-center mt-10 mx-3 md:mx-0">
          <div className="bg-[#8C3494] w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-tl-3xl flex justify-center items-center relative">
            <img
              className="h-[100px]"
              src="https://i.ibb.co/HPRyzbb/rocket.png"
              alt=""
            />
            <div className="w-14 rounded-lg h-2 bg-white absolute top-3"></div>
          </div>
          <div className="bg-[#ED0A80] w-[200px] h-[250px] md:w-[350px] md:h-[450px] rounded-t-3xl flex justify-center items-center border-4 border-b-0 border-white relative">
            <img
              className="md:marker:h-[100px] w-3/5"
              src="https://i.ibb.co/DWpdvB7/image-9.png"
              alt=""
            />
            <div className="w-14 rounded-lg h-2 bg-white absolute top-3"></div>
          </div>
          <div className="bg-gradient-to-b from-[#F7941D] to-[#ED1C24] w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-tr-3xl flex justify-center items-center relative">
            <img
              className="h-[100px]"
              src="https://i.ibb.co/nRft0kz/Group-40.png"
              alt=""
            />
            <div className="w-14 rounded-lg h-2 bg-white absolute top-3"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Ticketing;
