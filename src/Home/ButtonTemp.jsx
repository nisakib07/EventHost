const ButtonTemp = ({ text, img }) => {
  return (
    <div>
      {img ? (
        <div className="bg-[#7342F9] max-w-fit px-2 text-white rounded-md flex items-center gap-2">
          <img className="" src={img} alt="" />
          {text}
        </div>
      ) : (
        <div className="bg-[#7342F9] max-w-fit px-2 text-white rounded-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default ButtonTemp;
