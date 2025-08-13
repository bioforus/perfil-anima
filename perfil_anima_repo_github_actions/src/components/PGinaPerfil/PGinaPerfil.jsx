/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Autoria } from "../Autoria";
import { IaBotNPrincipal } from "../IaBotNPrincipal";
import { MenBarra } from "../MenBarra";

export const PGinaPerfil = ({
  className,
  MENBarraMenBarraClassName,
  AUTORIAAutoriaClassName,
}) => {
  return (
    <div
      className={`relative w-[1726px] h-[1116px] bg-gris-suau overflow-hidden overflow-y-scroll ${className}`}
    >
      <img
        className="absolute w-[133px] h-[18px] top-[376px] left-[796px]"
        alt="El meu perfil"
        src="https://c.animaapp.com/zs5uCaIr/img/el-meu-perfil-1.png"
      />

      <img
        className="absolute w-[556px] h-[202px] top-[423px] left-[585px]"
        alt="Dades de registre"
        src="https://c.animaapp.com/zs5uCaIr/img/dades-de-registre-1.png"
      />

      <img
        className="absolute w-[217px] h-4 top-[812px] left-[755px]"
        alt="Modifica la teva"
        src="https://c.animaapp.com/zs5uCaIr/img/modifica-la-teva-contrassenya-1.png"
      />

      <img
        className="absolute w-[340px] h-[22px] top-[648px] left-[693px]"
        alt="Frame"
        src="https://c.animaapp.com/zs5uCaIr/img/frame-54-1.png"
      />

      <img
        className="absolute w-60 h-[27px] top-[780px] left-[743px]"
        alt="Frame"
        src="https://c.animaapp.com/zs5uCaIr/img/frame-53-1.png"
      />

      <IaBotNPrincipal
        className="!absolute !left-[694px] !w-[338px] !top-[697px]"
        property1="default"
        showRobotTrans={false}
        text="GUARDAR CANVIS"
      />
      <MenBarra
        LOGOProducteRobotAiPluma="https://c.animaapp.com/zs5uCaIr/img/pluma-4.svg"
        className={MENBarraMenBarraClassName}
      />
      <Autoria
        className={AUTORIAAutoriaClassName}
        group="https://c.animaapp.com/zs5uCaIr/img/group-1-2@2x.png"
      />
    </div>
  );
};
