import { lazy } from 'react';

const SeriePage = lazy(() => import('./pages/Serie/SeriePage'));
const SerieRegisterPage = lazy(() => import('./pages/SerieRegister/SerieRegisterPage'));
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AllSeriesPage = lazy(() => import('./pages/AllSeries/AllSeriesPage'));

export interface Route {
  path: string;
  name: string;
  component: any;
  isNavLink: boolean;
}

export const Routes: Route[] = [
  {
    path: '/',
    name: 'Página Inicial',
    component: HomePage,
    isNavLink: true,
  },
  {
    path: '/series',
    name: 'Séries',
    component: AllSeriesPage,
    isNavLink: true,
  },
  {
    path: '/series/:slug',
    name: 'Séries',
    component: SeriePage,
    isNavLink: false,
  },
  {
    path: '/register',
    name: 'Cadastro',
    component: SerieRegisterPage,
    isNavLink: true,
  },
];
