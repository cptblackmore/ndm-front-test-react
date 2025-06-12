import { css } from "@emotion/react";
import type Ipv4Route from "../../types/Ipv4Route";
import { maskToCIDR } from "../../utils/maskToCIDR";
import type { Theme } from "@emotion/react";

interface Props {
  route: Ipv4Route;
}

const trStyles = (theme: Theme) => css`
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.colors.grey[200]};
  }
  & td {
    padding: 15px 10px;
    border-bottom: 2px solid ${theme.colors.grey[100]};
  }
`;

export const RouteTableRow: React.FC<Props> = ({ route }) => {
  return (
    <tr css={trStyles} role="row">
      <td>{route.address}/{maskToCIDR(route.mask)}</td>
      <td>{route.gateway}</td>
      <td>{route.interface}</td>
    </tr>
  );
};
