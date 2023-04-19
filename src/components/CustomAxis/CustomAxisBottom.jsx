import React from "react";
import { AxisBottom } from "@visx/axis";

const CustomAxisBottom = ({
  scale,
  top,
  label = "X Axis",
  numTicks = 5,
  tickFormat,
}) => {
  console.log();
  return (
    <AxisBottom
      scale={scale}
      hideAxisLine={false}
      hideTicks={false}
      hideZero={false}
      label={label}
      labelOffset={8}
      left={0}
      top={top}
      numTicks={numTicks}
      orientation="bottom"
      rangePadding={0}
      stroke="black"
      strokeWidth={1}
      tickFormat={tickFormat}
      tickLabelProps
      tickLength={8}
      tickStroke="black"
    />
  );
};

export default CustomAxisBottom;
