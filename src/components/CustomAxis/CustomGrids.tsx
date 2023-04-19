import { GridRows, GridColumns } from "@visx/grid";
import { AreaProps } from "../ChartUltils/LineChartUtils";

type GridsProps = AreaProps & {
  stockValueScale: any;
  accentColor: string;
  dateScale: any;
  innerWidth: number;
  innerHeight: number;
  strokeOpacity?: number;
  strokeDasharray?: string;
};
const CustomGrids: React.FC<GridsProps> = ({
  margin,
  stockValueScale,
  accentColor,
  dateScale,
  innerWidth,
  innerHeight,
  strokeOpacity = 0.5,
  strokeDasharray = "1,3",
}) => {
  return margin ? (
    <>
      <GridRows
        left={margin.left}
        scale={stockValueScale}
        width={innerWidth}
        strokeDasharray={strokeDasharray}
        stroke={accentColor}
        strokeOpacity={strokeOpacity}
        pointerEvents="none"
      />
      <GridColumns
        top={margin.top}
        scale={dateScale}
        height={innerHeight}
        strokeDasharray={strokeDasharray}
        stroke={accentColor}
        strokeOpacity={strokeOpacity}
        pointerEvents="none"
      />
    </>
  ) : null;
};

export default CustomGrids;
