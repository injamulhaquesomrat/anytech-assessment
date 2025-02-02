import React from "react";

const PhilosophySpecItem = ({ icon, name, info }) => {
  return (
    <div className="p-8 bg-[#F8FCFF] space-y-6 rounnded-[20px]">
      <div>{icon}</div>
      <div className="space-y-6">
        <h4 className="text-[#0b305b] text-2xl font-montserrat font-semibold leading-tight">
          {name}
        </h4>
        <p className="text-[#164377]">{info}</p>
      </div>
    </div>
  );
};

export default PhilosophySpecItem;
