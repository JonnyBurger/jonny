import React from "react";
import { keyframes } from "styled-components";

const rx = 8;
const ry = 22;
const arcLength = Math.PI * 2 * Math.sqrt((rx * rx + ry * ry) / 2);

const anim = keyframes`
  from {
    stroke-dashoffset: ${arcLength}
  }
  30% {
    stroke-dashoffset: 0
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    stroke-dashoffset: 0
  }
`;

export const Arc = ({ rotation, delay }) => {
  const height = 60;
  const width = 120;

  const opacity = 1;

  const progress = 0.4;

  const strokeWidth = 4;

  return (
    <g
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity,
        transformOrigin: "50% 50%",
      }}
    >
      <ellipse
        cx={width / 2}
        cy={height / 2}
        x={width / 2}
        y={height / 2}
        rx={rx}
        ry={ry}
        strokeLinecap="round"
        strokeDasharray={`${arcLength}`}
        stroke="url(#lg)"
        strokeDashoffset={arcLength}
        strokeWidth={strokeWidth}
        fill="none"
        style={{
          animation: `${anim} ${10}s infinite`,
          animationDelay: delay + "s",
          animationFillMode: "forwards",
        }}
      />
    </g>
  );
};
