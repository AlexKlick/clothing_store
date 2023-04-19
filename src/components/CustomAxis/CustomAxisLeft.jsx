import React from "react";
import { AxisLeft } from "@visx/axis";

const CustomAxisLeft = ({
  scale,
  margin,
  label = "Percentage",
  numTicks = 5,
  tickFormat = (value) => value,
  stroke = "black",
}) => {
  console.log();
  return (
    <AxisLeft
      scale={scale}
      hideAxisLine={false}
      hideTicks={false}
      hideZero={true}
      label={label}
      labelOffset={22}
      left={margin.left}
      numTicks={numTicks}
      orientation="left"
      rangePadding={0}
      stroke={stroke}
      strokeWidth={1}
      tickFormat={tickFormat}
      tickLabelProps={(value) => ({
        fill: "black",
        fontSize: 12,
        textAnchor: "end",
        verticalAnchor: "middle",
      })}
      tickLength={8}
      tickStroke="black"
      top={0}
    />
  );
};

export default CustomAxisLeft;
