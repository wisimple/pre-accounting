import { units } from "constants/units";
import { IUnit, UnitTypes } from "interfaces/IUnit";

export const getUnitFromValue = (value: UnitTypes): IUnit => {
  return units.find((u) => u.value === value) || { name: "", value: "piece", abbr: "" };
};
