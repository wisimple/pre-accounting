export type UnitTypes = "kg" | "lt" | "piece";
export interface IUnit {
  name: string;
  value: UnitTypes;
  abbr: string;
}
