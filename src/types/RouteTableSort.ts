import type Ipv4Route from "./Ipv4Route";

type SortableRouteColumn = Extract<keyof Ipv4Route, "address" | "gateway" | "interface">

export default interface RouteTableSort {
  column: SortableRouteColumn;
  direction: "asc" | "desc";
}
