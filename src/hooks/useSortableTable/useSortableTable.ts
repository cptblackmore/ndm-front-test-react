import { useMemo, useState } from "react";
import type RouteTableSort from "../../types/RouteTableSort";
import type Ipv4Route from "../../types/Ipv4Route";
import { getSortFn } from "./getSortFn";

export const useSortableTable = (routes: Ipv4Route[]) => {
  const [sort, setSort] = useState<RouteTableSort>({
    column: "address",
    direction: "asc"
  });

  const toggleSort = (column: RouteTableSort["column"]) => {
    setSort((prev) => {
      if (prev.column === column) {
        return {
          ...prev,
          direction: prev.direction === "asc" ? "desc" : "asc"
        }
      } else {
        return {
          column,
          direction: "asc"
        }
      }
    })
  };

  const sorted = useMemo(() => {
    return [...routes].sort(getSortFn(sort));
  }, [routes, sort]);

  return {
    sort,
    toggleSort,
    sorted
  }
};
