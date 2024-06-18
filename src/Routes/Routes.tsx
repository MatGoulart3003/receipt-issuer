import { ReactNode } from 'react';
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { DailyEmissor, FreeValueEmissor, Initial } from '../pages';
import { Layout } from '../components';

export interface IRoute {
  element: ReactNode;
  path: string;
}

const routes: Array<IRoute> = [
  {
    element: <Navigate to='/initial' />,
    path: '*',
  },
  {
    element: <Initial />,
    path: '/initial',
  },
  {
    element: <FreeValueEmissor />,
    path: '/free-value-emissor',
  },
  {
    element: <DailyEmissor />,
    path: '/daily-emissor',
  },
];

export const Routes = () => {
  const appRoutes = routes.map((route) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });

  return createBrowserRouter(
    createRoutesFromElements(<Route element={<Layout />}>{appRoutes}</Route>)
  );
};
