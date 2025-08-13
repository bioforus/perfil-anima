/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const RobotAi = ({
  showPluma = true,
  property1,
  className,
  ROBOTClassName,
  ROBOT = "https://c.animaapp.com/zs5uCaIr/img/robot-3@2x.png",
  PLUMAClassName,
  PLUMA = "https://c.animaapp.com/zs5uCaIr/img/pluma-3.svg",
}) => {
  return (
    <div
      className={`flex w-24 h-[52px] items-center justify-center relative ${className}`}
    >
      <img
        className={`relative w-[67.24px] h-[40.1px] ${ROBOTClassName}`}
        alt="Robot"
        src={ROBOT}
      />

      {showPluma && (
        <img
          className={`relative w-[24.66px] h-[41.02px] ${PLUMAClassName}`}
          alt="Pluma"
          src={PLUMA}
        />
      )}
    </div>
  );
};
