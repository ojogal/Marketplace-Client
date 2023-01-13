import Admin from './pages/Admin.js';
import Basket from './pages/Basket.js';
import Auth from './pages/Auth.js';
import Shop from './pages/Shop.js';
import DevicePage from './pages/DevicePage.js';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE
} from './utils/consts.js'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]