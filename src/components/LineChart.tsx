import React, { useMemo, useCallback } from "react";
import { Bar } from "@visx/shape";
import appleStock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { curveBasis } from "@visx/curve";
import { GridRows, GridColumns } from "@visx/grid";
import { scaleTime, scaleLinear } from "@visx/scale";
import { withTooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { localPoint } from "@visx/event";
import { max, extent } from "d3-array";
import { LinePath } from "@visx/shape";
import CustomAxisLeft from "./CustomAxis/CustomAxisLeft.jsx";
import CustomAxisBottom from "./CustomAxis/CustomAxisBottom.jsx";
import CustomVerticalCursor from "./CustomToolTip/CustomCursor.jsx";
import CustomToolTip from "./CustomToolTip/CustomToolTip.jsx";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import {
  getDate,
  getStockValue,
  bisectDate,
  formatDate,
  AreaProps,
} from "./ChartUltils/LineChartUtils";
import CustomGrids from "./CustomAxis/CustomGrids";

type TooltipData = AppleStock;
const stock = appleStock;
export const background = "#cacaca";
export const background2 = "#fafafafa";
export const accentColor = "#6686fa";
export const accentColorDark = "#75daad";
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: "1px solid white",
  color: "black",
};

export default withTooltip<AreaProps, TooltipData>(
  ({
    width,
    height,
    margin = { top: 20, right: 20, bottom: 30, left: 20 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
    // bounds
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left],
          domain: extent(stock, getDate) as [Date, Date],
        }),
      [innerWidth, margin.left]
    );
    const stockValueScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top, margin.top],
          domain: [0, (max(stock, getStockValue) || 0) + innerHeight / 3],
          nice: true,
        }),
      [margin.top, innerHeight]
    );
    // tooltip handler
    const handleTooltip = useCallback(
      (
        event:
          | React.TouchEvent<SVGRectElement>
          | React.MouseEvent<SVGRectElement>
      ) => {
        const { x } = localPoint(event) || { x: 0 };
        const x0 = dateScale.invert(x);
        const index = bisectDate(stock, x0, 1);
        const d0 = stock[index - 1];
        const d1 = stock[index];
        let d = d0;
        if (d1 && getDate(d1)) {
          d =
            x0.valueOf() - getDate(d0).valueOf() >
            getDate(d1).valueOf() - x0.valueOf()
              ? d1
              : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: stockValueScale(getStockValue(d)),
        });
      },
      [showTooltip, stockValueScale, dateScale]
    );
    return (
      <div
        className="relative"
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: "1rem",
          border: "1px solid lightgray",
        }}
      >
        <svg width={width} height={height} viewBox={`0 0 ${800}px ${500}px`}>
          {/* <CustomGrids
            margin={margin}
            stockValueScale={stockValueScale}
            accentColor={accentColor}
            dateScale={dateScale}
            width={width}
            height={height}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          /> */}
          <GridRows
            left={margin.left}
            scale={stockValueScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.9}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.9}
            pointerEvents="none"
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          <CustomAxisLeft scale={stockValueScale} margin={margin} />
          <CustomAxisBottom
            scale={dateScale}
            top={height - margin.bottom}
            tickFormat={(value: string | number | Date) => {
              //@ts-ignore
              let date: Date | number | string = new Date(value);
              if (date.getMonth() === 0) {
                date = date.getFullYear();
              } else {
                date = date.toLocaleString("default", { month: "short" });
              }
              return date;
            }}
          />

          <LinePath
            data={stock}
            curve={curveBasis}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => stockValueScale(getStockValue(d)) ?? 0}
            stroke="black"
            strokeWidth={2}
          />

          <CustomVerticalCursor
            tooltipLeft={tooltipLeft}
            tooltipTop={tooltipTop}
            margin={margin}
            innerHeight={innerHeight}
            accentColorDark={accentColorDark}
            tooltipData={tooltipData}
            strokeDasharray={"12,7"}
          />
        </svg>
        <CustomToolTip
          getDate={getDate}
          height={height}
          margin={margin}
          tooltipTop={tooltipTop}
          tooltipLeft={tooltipLeft}
          tooltipStyles={{
            ...defaultStyles,
            background,
            border: "1px solid white",
            color: "black",
          }}
          units={"$"}
          formatDate={formatDate}
          getStockValue={getStockValue}
          tooltipData={tooltipData}
          innerHeight={innerHeight}
        />
      </div>
    );
  }
);
