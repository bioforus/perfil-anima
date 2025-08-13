/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const PropertyMen = ({ className }) => {
  return (
    <div
      className={`flex w-[100px] h-8 items-center justify-end gap-2.5 pl-3 pr-3.5 py-1 relative bg-buttons rounded-[18px] ${className}`}
    >
      <div className="relative w-fit font-header-4 font-[number:var(--header-4-font-weight)] text-blanc text-[length:var(--header-4-font-size)] text-right tracking-[var(--header-4-letter-spacing)] leading-[var(--header-4-line-height)] whitespace-nowrap [font-style:var(--header-4-font-style)]">
        Menú
      </div>

      <img
        className="relative w-[11.5px] h-[6.5px] mr-[-0.75px]"
        alt="Vector"
        src="https://c.animaapp.com/zs5uCaIr/img/vector-3.svg"
      />
    </div>
  );
};
