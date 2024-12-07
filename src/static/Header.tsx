import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleclick1 = () => {
    navigate("/wisdom");
  };

  const handleclick2 = () => {
    navigate("/sam");
  };
  return (
    <div className="w-full h-[80px] bg-slate-400 flex items-center justify-center ">
      <div className="w-[90%] h-[100%] bg-slate-200 gap-[40px] font-semibold text-center text-[20px] flex">
        <p onClick={handleclick1}>Sam</p>
        <p onClick={handleclick2}>Wisdom</p>
      </div>
    </div>
  );
};

export default Header;
