import React from "react";

const Wall = ({ corner1, corner2, thickness }) => (
  <g>
    <line
      x1={corner1.x}
      y1={corner1.y}
      x2={corner2.x}
      y2={corner2.y}
      stroke="white"
      strokeWidth={thickness}
    />
    <line
      x1={corner1.x}
      y1={corner1.y}
      x2={corner2.x}
      y2={corner2.y}
      stroke=" rgba(8, 16, 128, 0.9)"
      strokeWidth={thickness / 2}
      strokeDasharray={`${thickness * 3} ${thickness}`}
    />
  </g>
);

export default Wall;
