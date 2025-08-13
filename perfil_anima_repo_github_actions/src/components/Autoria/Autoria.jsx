/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Autoria = ({
  className,
  group = "https://c.animaapp.com/zs5uCaIr/img/group-1-1@2x.png",
}) => {
  return (
    <div
      className={`flex w-[318px] h-14 items-center justify-center gap-3.5 px-6 py-3 relative bg-blanc rounded-[50px] shadow-[4px_4px_8px_#00000024] ${className}`}
    >
      <div className="relative w-fit font-header-4 font-[number:var(--header-4-font-weight)] text-gris-fosc text-[length:var(--header-4-font-size)] tracking-[var(--header-4-letter-spacing)] leading-[var(--header-4-line-height)] whitespace-nowrap [font-style:var(--header-4-font-style)]">
        Eina desenvolupada per
      </div>

      <img
        className="relative w-[41px] h-[35.24px] mt-[-1.62px] mb-[-1.62px] aspect-[1.16]"
        alt="Group"
        src={group}
      />
    </div>
  );
};
