import React from "react";

const Corner = ({ at: { x, y }, thickness }) => (
  <circle
    cx={x}
    cy={y}
    r={thickness * 0.75}
    stroke="white"
    strokeWidth={thickness / 3}
    fill="rgba(8, 16, 128, 0.9)"
  />
);

export default Corner;
