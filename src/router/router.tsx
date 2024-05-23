import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage.tsx';
import LoginPage from '@/pages/LoginPage';
import BoardPage from '@/pages/BoardPage';
import ServiceTwoPage from '@/pages/ServiceTwoPage';
import ServiceThirdPage from '@/pages/ServiceThirdPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/board',
    element: <BoardPage />,
  },
  {
    path: '/service02',
    element: <ServiceTwoPage />,
  },
  {
    path: '/service03',
    element: <ServiceThirdPage />,
  },
]);
