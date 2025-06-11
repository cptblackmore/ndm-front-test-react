export const ipToNumber = (ip: string) => {
  return ip
    .split('.')
    .reduce((acc, octet) => ((acc << 8) + Number(octet)) >>> 0, 0);
};
