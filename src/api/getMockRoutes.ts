import type Ipv4Route from "../types/Ipv4Route";

export const getMockRoutes = async (): Promise<Ipv4Route[]> => {
  const response = await fetch('/routes.mock.json');

  if (!response.ok) {
    throw new Error(`Failed to load routes: ${response.status}`);
  }

  return response.json();
};
