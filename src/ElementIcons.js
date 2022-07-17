import { SvgIcon } from "@mui/material";

import { ReactComponent as Pyro } from "./Element_Icons/Element_Pyro.svg";
import { ReactComponent as Hydro } from "./Element_Icons/Element_Hydro.svg";
import { ReactComponent as Cryo } from "./Element_Icons/Element_Cryo.svg";
import { ReactComponent as Electro } from "./Element_Icons/Element_Electro.svg";
import { ReactComponent as Anemo } from "./Element_Icons/Element_Anemo.svg";
import { ReactComponent as Geo } from "./Element_Icons/Element_Geo.svg";
import { ReactComponent as Dendro } from "./Element_Icons/Element_Dendro.svg";

export function PyroIcon() {
  return <SvgIcon><Pyro /></SvgIcon>;
}
export function HydroIcon() {
    return <SvgIcon><Hydro /></SvgIcon>;
}
export function CryoIcon() {
    return <SvgIcon><Cryo /></SvgIcon>;
}
export function ElectroIcon() {
    return <SvgIcon><Electro /></SvgIcon>;
}
export function AnemoIcon() {
    return <SvgIcon><Anemo /></SvgIcon>;
}
export function GeoIcon() {
    return <SvgIcon><Geo /></SvgIcon>;
}
export function DendroIcon() {
    return <SvgIcon><Dendro /></SvgIcon>;
}

