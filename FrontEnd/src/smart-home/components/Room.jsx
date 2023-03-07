import React, { useMemo } from "react";
import Wall from "./Wall";
import Corner from "./Corner";

const WALL_THICKNESS = 80;

const Room = ({ id, coords }) => {
  const walls = useMemo(
    () =>
      coords.map((_, i) => {
        const a = coords[i];
        const b = coords[(i + 1) % coords.length];
        return [a, b];
      }),
    [coords]
  );
  return (
    <g>
      {walls.map(([a, b]) => (
        <Wall
          key={`wall-${a.x},${a.y}-${b.x},${b.y}`}
          corner1={a}
          corner2={b}
          thickness={WALL_THICKNESS}
        />
      ))}
      {coords.map(coord => (
        <Corner
          key={`corner-${coord.x},${coord.y}`}
          at={coord}
          thickness={WALL_THICKNESS}
        />
      ))}
      <text
        x={coords[0].x + 100}
        y={coords[0].y + 240}
        fill="red"
        fontSize="180"
      >
        {id}
      </text>
    </g>
  );
};

export default Room;
