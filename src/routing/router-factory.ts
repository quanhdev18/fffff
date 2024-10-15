import { createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';

interface CreateRouterProps {
  name?: string;
}

export function createRouter({ name }: CreateRouterProps) {
  const initialEntries = [name || '/'];
  return createMemoryRouter(routes, { initialEntries });
}
