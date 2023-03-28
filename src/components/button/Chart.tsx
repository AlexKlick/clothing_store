import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import { stackOffsetDiverging, stackOffsetExpand, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAscending } from "d3-shape";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Band() {
  const { data, randomizeData } = useDemoConfig({
    series: 3,
    dataType: "ordinal",
    useR: true,
    tooltipGroupingMode: 'single',
    interactionMode: 'closest',
    secondaryAxisType:'band',
    primaryAxisType: 'band'
  });
  console.log(data)
  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      position: "right",
      getValue: (datum: { primary: any; }) => datum.primary,
      show: false,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        position: "top",
        show: true,
        getValue: (datum: any) => datum.secondary,
        stackOffset: stackOffsetSilhouette,
        stackOrder: stackOrderAscending,
        stacked: true,
        interactionMode: 'closest'
      },
    ],
    []
  );
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <div style={{height: 800, width: 800}}>

      {/* <ResizableBox style={{          background: "rgba(0, 27, 45, 0.9)",
          padding: ".5rem",
          borderRadius: "5px",}}> */}
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            padding: 20,
            // tooltip: {align: 'bottom', alignPriority:['bottom']},
            defaultColors: ['red', 'white', 'green'],
            // useIntersectionObserver: false,
            secondaryCursor: false,
            primaryCursor: false,
            // dark: true

          }}
        />

      {/* </ResizableBox> */}
      </div>
    </>
  );
}
