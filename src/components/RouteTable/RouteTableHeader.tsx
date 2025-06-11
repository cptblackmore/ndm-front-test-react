import type RouteTableSort from "../../types/RouteTableSort";

interface RouteTableHeaderProps {
  label: string;
  columnKey: RouteTableSort["column"];
  sort: RouteTableSort;
  onSort: (column: RouteTableSort["column"]) => void;
}

export const RouteTableHeader: React.FC<RouteTableHeaderProps> = ({ label, columnKey, sort, onSort }) => {
  const isSorted = sort.column === columnKey;
  const directionIndicator = isSorted ? (sort.direction === "asc" ? " ▴" : " ▾") : "";

  return (
    <th 
      onClick={() => onSort(columnKey)}
    >
      {label}{directionIndicator}
    </th>
  );
};
