import Wrapper from "./Wrapper";

const AutomatedQr = () => {
  return (
    <Wrapper>
      <div>
        <div className="text-center space-y-3 lg:space-y-5 mt-10">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Automated QR Scanner
          </h1>
          <p className="text-lg lg:text-xl font-normal text-[#8053FA]">
            Scan & Verify The Attendees Directly By Our QR Scanning Solution.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-4 mt-10">
          <div className="card w-full bg-[#F1F3FF] border text-primary-content">
            <div className="card-body">
              <div className="flex justify-center items-center bg-white rounded-full w-14 h-14">
                {" "}
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co/M7cc1C0/click-1-1.png"
                  alt=""
                />
              </div>

              <h2 className="card-title text-black font-bold text-3xl">
                One Click
              </h2>
              <p className="text-base font-normal text-gray-900">
                QR verification System
              </p>
            </div>
          </div>
          <div className="card w-full bg-[#F1F3FF] border text-primary-content">
            <div className="card-body">
              <div className="flex justify-center items-center bg-white rounded-full w-14 h-14">
                {" "}
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co/105p3kc/click.png"
                  alt=""
                />
              </div>

              <h2 className="card-title text-black font-bold text-3xl">
                One Time
              </h2>
              <p className="text-base font-normal text-gray-900">QR Code</p>
            </div>
          </div>
          <div className="card w-full bg-[#F1F3FF] border text-primary-content">
            <div className="card-body">
              <div className="flex justify-center items-center bg-white rounded-full w-14 h-14">
                {" "}
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co/55mz0LG/check-1.png"
                  alt=""
                />
              </div>

              <h2 className="card-title text-black font-bold text-3xl">
                Easy Access
              </h2>
              <p className="text-base font-normal text-gray-900">
                Lorem Ipsum Access
              </p>
            </div>
          </div>
          <div className="card w-full bg-[#F1F3FF] border text-primary-content">
            <div className="card-body">
              <div className="flex justify-center items-center bg-white rounded-full w-14 h-14">
                {" "}
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co/JrtmwT5/Vector-1.png"
                  alt=""
                />
              </div>

              <h2 className="card-title text-black font-bold text-3xl">Mail</h2>
              <p className="text-base font-normal text-gray-900">
                Send bulk personalized mail with attachments
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AutomatedQr;
