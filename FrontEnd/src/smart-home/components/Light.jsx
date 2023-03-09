import React from "react";

const Light = ({ at: { x, y }, thickness }) => {

  if(!x || !y) return;

  return (
    <circle
      cx={x}
      cy={y}
      r={thickness * 4}
      stroke="black"
      strokeWidth={thickness / 3}
      fill="rgba(231, 255, 2, 0.8)"
    />
  )
}


export default Light;
