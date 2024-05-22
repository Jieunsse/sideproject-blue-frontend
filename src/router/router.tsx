import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import LoginPage from '../page/LoginPage';
import BoardPage from '../page/BoardPage';
import ServiceTwoPage from '../page/ServiceTwoPage';
import ServiceThirdPage from '../page/ServiceThirdPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
