import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { RouteTable } from "../components/RouteTable/RouteTable";
import { getMockRoutes } from "../api/getMockRoutes";
import type Ipv4Route from "../types/Ipv4Route";
import { css } from "@emotion/react";

export const RoutesPage: React.FC = () => {
  const [routes, setRoutes] = useState<Ipv4Route[]>([]);

  useEffect(() => {
    getMockRoutes()
      .then((routes) => setRoutes(routes))
      .catch(console.error);
  }, []);

  return (
    <Container>
      <h1
        css={css`
          font-size: 1.2rem;
          font-weight: 500;
          margin: 32px 0 16px 0;
        `}
      >
        Действующие маршруты IPv4
      </h1>
      <RouteTable routes={routes} />
    </Container>
  );
};
