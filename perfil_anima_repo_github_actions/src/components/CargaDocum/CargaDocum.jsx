/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Cargar } from "../Cargar";

export const CargaDocum = ({
  showNouDocument = true,
  showCargar = true,
  className,
}) => {
  return (
    <div className={`relative w-44 h-[42px] ${className}`}>
      {showNouDocument && (
        <div className="absolute w-[126px] h-3 top-3.5 left-0 font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] text-right tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
          Nou document
        </div>
      )}

      {showCargar && <Cargar className="!left-[134px]" property1="default" />}
    </div>
  );
};
