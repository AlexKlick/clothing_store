import { Tooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
const CustomToolTip = ({
  tooltipTop,
  tooltipLeft,
  tooltipStyles,
  units,
  formatDate,
  getStockValue,
  tooltipData,
  getDate,
  height,
  margin,
  innerHeight,
}) => {
  return (
    tooltipData && (
      <div>
        <TooltipWithBounds
          key={Math.random()}
          top={tooltipTop - 12}
          left={tooltipLeft + 12}
          style={tooltipStyles}
        >
          {units}
          {getStockValue(tooltipData)} <br />
          {formatDate(getDate(tooltipData))}
        </TooltipWithBounds>
        <Tooltip
          top={innerHeight + margin.top - 12}
          left={tooltipLeft}
          style={{
            ...defaultStyles,
            minWidth: 72,
            textAlign: "center",
            transform: `translate(-50%, -${height - margin.top * 2}px)`,
          }}
        >
          {formatDate(getDate(tooltipData))}
        </Tooltip>
      </div>
    )
  );
};
export default CustomToolTip;
