import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../page/MainPage.tsx';
import LoginPage from '../page/LoginPage';
import BoardPage from '../page/BoardPage';
import ServiceTwoPage from '../page/ServiceTwoPage';
import ServiceThirdPage from '../page/ServiceThirdPage';

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
