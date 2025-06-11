import type Ipv4Route from "../types/Ipv4Route";

interface RouteTableProps {
  routes: Ipv4Route[];
}

export const RouteTable: React.FC<RouteTableProps> = ({ routes }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Адрес назначения</td>
          <td>Шлюз</td>
          <td>Интерфейс</td>
        </tr>
      </thead>
      <tbody>
        {
          routes.map(route => (
            <tr key={route.uuid}>
              <td>{route.address}</td>
              <td>{route.gateway}</td>
              <td>{route.interface}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
