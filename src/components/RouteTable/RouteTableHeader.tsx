import { css, useTheme } from "@emotion/react";
import type RouteTableSort from "../../types/RouteTableSort";
import type { Theme } from "@emotion/react";
import { Triangle } from "../Triangle";
import { useState } from "react";

interface RouteTableHeaderProps {
  label: string;
  columnKey: RouteTableSort["column"];
  sort: RouteTableSort;
  onSort: (column: RouteTableSort["column"]) => void;
}

const thStyles = (theme: Theme) => css`
  cursor: pointer;
  font-weight: 500;
  background-color: ${theme.colors.grey[100]};
  text-align: start;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.grey[200]};
  }
`

const thContentStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RouteTableHeader: React.FC<RouteTableHeaderProps> = ({ label, columnKey, sort, onSort }) => {
  const theme = useTheme();
  const isSorted = sort.column === columnKey;
  const triangleDirection = sort.direction === "asc" ? "up" : "down";
  const [hovered, setHovered] = useState(false);

  return (
    <th
      css={thStyles}
      onClick={() => onSort(columnKey)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      scope="col"
      aria-sort={isSorted ? (sort.direction === "asc" ? "ascending" : "descending") : "none"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSort(columnKey);
        }
      }}
    >
      <div css={thContentStyles}>
        {label}
        {isSorted && (
          <Triangle 
            direction={triangleDirection} 
            color={hovered ? theme.colors.text : theme.colors.grey[300]}
            size={0.8}
          />
        )}
      </div>
    </th>
  );
};
