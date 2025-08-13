/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { RobotAi } from "../RobotAi";

export const LogoProducte = ({
  showNomDeLEinaAi = true,
  showRobotAi = true,
  className,
  ROBOTAiPluma = "https://c.animaapp.com/zs5uCaIr/img/pluma-2.svg",
  text = "Nom de l’Eina AI",
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[7px] relative ${className}`}
    >
      {showRobotAi && (
        <RobotAi
          PLUMA={ROBOTAiPluma}
          PLUMAClassName="!h-[33.13px] !w-[19.92px]"
          ROBOT="https://c.animaapp.com/zs5uCaIr/img/robot-4@2x.png"
          ROBOTClassName="!h-[32.39px] !w-[54.31px]"
          className="!h-[42px] !w-[77.54px]"
          property1="default"
        />
      )}

      {showNomDeLEinaAi && (
        <div className="relative w-60 h-14 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-gris-fosc text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
          {text}
        </div>
      )}
    </div>
  );
};
