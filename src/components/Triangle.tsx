import { css } from "@emotion/react";

const TRIANGLE_BASE = 10
const TRIANGLE_EDGE = 8

interface TriangleProps {
  direction: "up" | "down";
  color?: string;
  size?: number;
}

const triangleStyles = ({ direction, color="black", size=1 }: TriangleProps) => css`
  width: 0;
  height: 0;
  border-left: ${TRIANGLE_EDGE * size}px solid transparent;
  border-right: ${TRIANGLE_EDGE * size}px solid transparent;
  transition: border-color 0.2s ease-in-out;

  ${direction === "up"
    ? `border-bottom: ${TRIANGLE_BASE * size}px solid ${color};`
    : `border-top: ${TRIANGLE_BASE * size}px solid ${color};`}
`;

export const Triangle: React.FC<TriangleProps> = (props) => {
  return (
    <div css={triangleStyles(props)}></div>
  );
};
