export const maskToCIDR = (mask: string) => {
  return mask
    .split('.')
    .map(octet => parseInt(octet).toString(2).padStart(8, '0'))
    .join('')
    .split('1')
    .length - 1;
};
