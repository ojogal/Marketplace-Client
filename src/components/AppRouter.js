import React from "react";
import { Switch, Route, Redirect } from 'react';
import { authRoutes } from "../routes";
import { publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Switch>
      { isAuth && authRoutes.map(({ path, Component }) => {
        return <Route key={ path } path={ path } component={ Component } exact />
      }) };
      { publicRoutes.map(({ path, Component }) => {
        return <Route key={ path } path={ path } component={ Component } exact />
      }) };
      <Redirect to={ SHOP_ROUTE } />
    </Switch>
  )
};

export default AppRouter;