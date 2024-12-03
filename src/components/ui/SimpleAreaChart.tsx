import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";

interface SimpleAreaChartProps {
  range: number[];
  basicColor: string;
  accentColor: string;
  curveType:
    | "basis"
    | "cardinal"
    | "catmullRom"
    | "linear"
    | "monotoneX"
    | "monotoneY"
    | "natural"
    | "step"
    | "stepAfter"
    | "stepBefore";
}

// Generate completely random data from 0 to 100
const initialData = Array.from({ length: 102 }, (_, x) => ({
  x,
  y: x === 0 || x === 101 ? 0 : Math.floor(Math.random() * 100), // Random value between 0 and 100
}));

export default function SimpleAreaChart({
  range,
  basicColor,
  accentColor,
  curveType,
}: SimpleAreaChartProps) {
  const updatedData = useMemo(() => {
    const [start, end] = range;

    // Split the data into before, highlighted, and after segments
    const beforeData = initialData.filter((point) => point.x < start);
    const highlightedData = initialData.filter(
      (point) => point.x >= start && point.x <= end
    );
    const afterData = initialData.filter((point) => point.x > end);

    return [
      {
        id: "before",
        data: beforeData.map((point) => ({ ...point, color: basicColor })),
      },
      {
        id: "highlighted",
        data: highlightedData.map((point) => ({
          ...point,
          color: accentColor,
        })),
      },
      {
        id: "after",
        data: afterData.map((point) => ({ ...point, color: basicColor })),
      },
    ];
  }, [range]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveLine
        data={updatedData}
        curve={curveType}
        enableArea={true}
        areaOpacity={1}
        animate={false}
        colors={({ id }) => (id === "highlighted" ? accentColor : basicColor)}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        lineWidth={0}
        pointSize={0}
        enableCrosshair={false}
        isInteractive={false}
        useMesh={false}
        xScale={{
          type: "linear",
          min: 0,
          max: 101,
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: 100,
        }}
      />
    </div>
  );
}
