/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CargaDocum } from "../CargaDocum";
import { LogoProducte } from "../LogoProducte";
import { PropertyMen } from "../PropertyMen";
import { Usuario } from "../Usuario";

export const MenBarra = ({
  className,
  LOGOProducteRobotAiPluma = "https://c.animaapp.com/zs5uCaIr/img/pluma-2.svg",
}) => {
  return (
    <div
      className={`relative w-[1728px] h-[92px] bg-blanc shadow-[0px_2px_8px_#00000040] ${className}`}
    >
      <LogoProducte
        ROBOTAiPluma={LOGOProducteRobotAiPluma}
        className="!absolute !left-[108px] !top-[18px]"
        text="TranscriData"
      />
      <CargaDocum
        className="!absolute !left-[1236px] !top-[25px]"
        showNouDocument={false}
      />
      <Usuario className="!left-[1437px] !top-[25px]" property1="default" />
      <PropertyMen className="!absolute !left-[1512px] !top-[30px]" />
    </div>
  );
};
