"use client";

import React, { useState, useRef, useEffect } from "react";
import SimpleAreaChart from "./SimpleAreaChart";

interface RangeSliderProps {
  basicColor?: string;
  accentColor?: string;
  peakHeight?: string;
  curveType?:
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
  initialRange?: number[];
  minRange?: number;
  width?: string;
}

export default function RangeSlider({
  basicColor = "#CCCCCC",
  accentColor = "#63AA75",
  peakHeight = "15px",
  curveType = "linear",
  initialRange = [20, 70],
  minRange = 5,
  width = "60%",
}: RangeSliderProps) {
  const [values, setValues] = useState<number[]>(initialRange);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging !== null && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const newValue = Math.round(
          ((e.clientX - rect.left) / rect.width) * 100
        );
        updateValue(isDragging, Math.max(0, Math.min(100, newValue)));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  const updateValue = (index: number, newValue: number) => {
    const minDistance = minRange;

    setValues((prev) => {
      const newValues = [...prev];

      if (index === 0) {
        newValues[index] = Math.min(newValue, newValues[1] - minDistance);
      } else if (index === 1) {
        newValues[index] = Math.max(newValue, newValues[0] + minDistance);
      }

      return newValues;
    });
  };

  return (
    <div className="mx-auto px-8 relative" style={{ width: width }}>
      <div
        className="absolute left-1 top-1/2 -translate-y-1/2 opacity-50 text-sm"
        style={{ userSelect: "none" }}
      >
        0
      </div>
      <div
        className="absolute -right-3 top-1/2 -translate-y-1/2 opacity-50 text-sm"
        style={{ userSelect: "none" }}
      >
        100
      </div>
      <div
        ref={sliderRef}
        className="relative h-5 py-10 w-full"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={values[1]}
        aria-valuetext={`Range from ${values[0]} to ${values[1]}`}
        tabIndex={0}
        onKeyDown={(e) => {
          const step = 1;
          if (e.key === "ArrowLeft") {
            updateValue(1, Math.max(values[0], values[1] - step));
          } else if (e.key === "ArrowRight") {
            updateValue(1, Math.min(100, values[1] + step));
          }
        }}
      >
        {/* Area chart */}
        <div
          className={`area-chart-mirror relative -translate-y-[100%]`}
          style={{ height: peakHeight }}
        >
          <SimpleAreaChart
            range={values}
            basicColor={basicColor}
            accentColor={accentColor}
            curveType={curveType}
          />
        </div>

        <div
          className={`absolute top-1/2 -translate-y-1/2 w-full h-[10px] bg-[${basicColor}] z-10 rounded-full`}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2  h-[10px] z-20 rounded-full"
          style={{
            left: `${values[0]}%`,
            width: `${values[1] - values[0]}%`,
            backgroundColor: accentColor,
          }}
        />
        {values.map((value, index) => (
          <div
            key={index}
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full cursor-pointer focus:outline-none flex items-center justify-center z-20 shadow"
            style={{
              left: `calc(${value}% - 14px)`,
              backgroundColor: accentColor,
              userSelect: "none",
            }}
            onMouseDown={() => setIsDragging(index)}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            tabIndex={0}
            onKeyDown={(e) => {
              const step = 1;
              if (e.key === "ArrowLeft") {
                updateValue(index, Math.max(0, value - step));
              } else if (e.key === "ArrowRight") {
                updateValue(index, Math.min(100, value + step));
              }
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#111111]" />

            {value !== 0 && value !== 100 ? (
              <div className="absolute top-8 text-xs">{value}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
