import type Ipv4Route from "../../types/Ipv4Route";
import type RouteTableSort from "../../types/RouteTableSort";
import { getNetworkAddress } from "../../utils/getNetworkAddress";
import { ipToNumber } from "../../utils/ipToNumber";

export const getSortFn = (sort: RouteTableSort) => (a: Ipv4Route, b: Ipv4Route) => {
  if (sort.column === "address") {
    const ipA = getNetworkAddress(a.address, a.mask);
    const ipB = getNetworkAddress(b.address, b.mask);
    return sort.direction === "asc"
      ? ipA - ipB
      : ipB - ipA
  }
  
  if (sort.column === "gateway") {
    const ipA = ipToNumber(a.gateway);
    const ipB = ipToNumber(b.gateway);
    return sort.direction === "asc"
      ? ipA - ipB
      : ipB - ipA
  }

  const valA = a[sort.column];
  const valB = b[sort.column];

  if (typeof valA === "string" && typeof valB === "string") {
    return sort.direction === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA)
  }

  return 0
};
