import React from "react";

const Skill = ({ white, color }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className=" rounded border-2 h-48 md:w-48 w-full grid place-content-center p-4">
        <img
          className=" bg-transparent"
          style={{
            height: "auto",
            width: "auto",
          }}
          src={white}
        />
      </div>
      <div className="p-4 rounded absolute inset-0 bg-white border-2 h-48 md:w-48 w-full grid place-content-center translate-y-[-100%] transition-all duration-500 group-hover:translate-y-0 ">
        <img
          className="bg-transparent "
          style={{
            height: "auto",
            width: "auto",
          }}
          src={color}
        />
      </div>
    </div>
  );
};

export default Skill;
