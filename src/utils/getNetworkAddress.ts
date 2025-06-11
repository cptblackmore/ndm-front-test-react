import { ipToNumber } from "./ipToNumber";

export const getNetworkAddress = (ip: string, mask: string) =>
  (ipToNumber(ip) & ipToNumber(mask)) >>> 0;
