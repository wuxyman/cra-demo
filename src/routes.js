import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import Me from './pages/me';

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/about/:id',
        component: About,
      },
      {
        path: '/me',
        component: Me,
      },
    ],
  },
];

export default routes;
