import { AreaClosed, Line } from "@visx/shape";
const CustomVerticalCursor = ({
  tooltipLeft,
  tooltipTop,
  margin,
  innerHeight,
  accentColorDark,
  strokeDasharray = "3,2",
  fillOpacity = 0.1,
  strokeWidth = 3,
  stroke = "#1636ab",
  tooltipData,
}) => {
  return (
    tooltipData && (
      <g>
        <Line
          from={{ x: tooltipLeft, y: margin.top }}
          to={{ x: tooltipLeft, y: innerHeight + margin.top }}
          stroke={stroke}
          strokeWidth={strokeWidth}
          pointerEvents="none"
          strokeDasharray={strokeDasharray}
        />
        <circle
          cx={tooltipLeft}
          cy={tooltipTop + 1}
          r={4}
          fill="black"
          fillOpacity={fillOpacity}
          stroke="black"
          strokeOpacity={0.2}
          strokeWidth={2}
          pointerEvents="none"
        />
        <circle
          cx={tooltipLeft}
          cy={tooltipTop}
          r={4}
          fill={accentColorDark}
          stroke="#fafafa"
          strokeWidth={2}
          pointerEvents="none"
        />
      </g>
    )
  );
};
export default CustomVerticalCursor;
