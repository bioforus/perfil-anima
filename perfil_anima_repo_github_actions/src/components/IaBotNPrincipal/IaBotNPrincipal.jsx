/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const IaBotNPrincipal = ({
  showRobotTrans = true,
  showBotDestacat = true,
  property1,
  className,
  text = "BOTÓ PRINCIPAL",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[250px] flex items-center gap-3.5 px-[30px] py-[5px] h-[45px] rounded-[41px] justify-center relative ${state.property1 === "hover" ? "bg-[#13cedb]" : "bg-buttons"} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {showRobotTrans && (
        <img
          className="w-7 h-[16.7px] relative"
          alt="Robot trans"
          src="https://c.animaapp.com/zs5uCaIr/img/robot-trans-1@2x.png"
        />
      )}

      {showBotDestacat && (
        <div className="font-header-4 w-fit tracking-[var(--header-4-letter-spacing)] [font-style:var(--header-4-font-style)] text-[length:var(--header-4-font-size)] text-blanc font-[number:var(--header-4-font-weight)] text-center whitespace-nowrap leading-[var(--header-4-line-height)] relative">
          {text}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
