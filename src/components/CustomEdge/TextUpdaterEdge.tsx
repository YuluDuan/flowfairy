"use client";

import { EdgeDataType } from "@/types";
import React, { useState } from "react";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
} from "reactflow";

const TextUpdaterEdge = ({
  id,
  data,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps<EdgeDataType>) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const initinalLabel = data ? data.label : "";
  const [label, setLabel] = useState(initinalLabel);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(evt.target.value);
    if (data) {
      data.label = evt.target.value;
    }
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <input
            className={`focus:outline-none text-center ${
              label ? "bg-teal-50" : "bg-transparent"
            }`}
            value={label}
            onChange={handleChange}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default TextUpdaterEdge;
