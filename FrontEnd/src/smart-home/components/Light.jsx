
const Light = ({ at: { x, y }, thickness, lightState }) => {
  
  if(!x || !y) return;

  return (
    <circle
      cx={x}
      cy={y}
      r={thickness * 4}
      stroke="black"
      strokeWidth={thickness / 3}
      fill={ lightState === "on" ? "rgba(231, 255, 2, 0.8)" : "rgb(255, 255, 255)"}
    />
  )
}


export default Light;
