import { css } from "@emotion/react";
import { useSortableTable } from "../../hooks/useSortableTable/useSortableTable";
import type Ipv4Route from "../../types/Ipv4Route";
import { RouteTableHeader } from "./RouteTableHeader";
import { RouteTableRow } from "./RouteTableRow";

interface RouteTableProps {
  routes: Ipv4Route[];
}

export const RouteTable: React.FC<RouteTableProps> = ({ routes }) => {
  const { sort, toggleSort, sorted } = useSortableTable(routes);

  const tableStyles = css`
    width: 100%;
    table-layout: fixed;
  `;

  return (
    <table css={tableStyles} cellSpacing={0}>
      <thead>
        <tr>
          <RouteTableHeader label="Адрес назначения" columnKey={"address"} sort={sort} onSort={toggleSort} />
          <RouteTableHeader label="Шлюз" columnKey={"gateway"} sort={sort} onSort={toggleSort} />
          <RouteTableHeader label="Интерфейс" columnKey={"interface"} sort={sort} onSort={toggleSort} />
        </tr>
      </thead>
      <tbody>
        {
          sorted.map(route => (
            <RouteTableRow key={route.uuid} route={route} />
          ))
        }
      </tbody>
    </table>
  );
};
