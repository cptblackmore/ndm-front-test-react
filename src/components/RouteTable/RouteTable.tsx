import { useSortableTable } from "../../hooks/useSortableTable/useSortableTable";
import type Ipv4Route from "../../types/Ipv4Route";
import { maskToCIDR } from "../../utils/maskToCIDR";
import { RouteTableHeader } from "./RouteTableHeader";

interface RouteTableProps {
  routes: Ipv4Route[];
}

export const RouteTable: React.FC<RouteTableProps> = ({ routes }) => {
  const { sort, toggleSort, sorted } = useSortableTable(routes);

  return (
    <table>
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
            <tr key={route.uuid}>
              <td>{route.address}/{maskToCIDR(route.mask)}</td>
              <td>{route.gateway}</td>
              <td>{route.interface}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
