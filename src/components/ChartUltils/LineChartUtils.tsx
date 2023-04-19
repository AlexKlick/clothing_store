// define types and data accessors

import { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { timeFormat } from "d3-time-format";
import { bisector, max } from "d3-array";
import { scaleTime, scaleLinear } from "@visx/scale";
// accessors
export const formatDate = timeFormat("%b %d, '%y");
export const getDate = (d: AppleStock) => new Date(d.date);
export const getStockValue = (d: AppleStock) => d.close;
export const bisectDate = bisector<AppleStock, Date>((d) => new Date(d.date))
  .left;

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};
export type LineProps = {
  stockValueScale: (value: number) => number;
  accentColor: string;
  dateScale: (value: number) => number;
  innerWidth: number;
  innerHeight: number;
};
const margin = { top: 20 };
