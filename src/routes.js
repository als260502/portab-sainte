import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Enter from "./pages/Enter";
import Dashboard from "./pages/Dashboard";
import Sheduler from "./pages/Sheduler";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Mail from "./pages/Mail";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portabilidade/app" exact component={Enter} />
        <Route path="/portabilidade/app/sheduler" component={Sheduler} />
        <Route path="/portabilidade/app/dashboard/:page?" component={Dashboard} />
        <Route path="/portabilidade/app/edit/:id" component={Edit} />
        <Route path="/portabilidade/app/delete/:id" component={Delete} />
        <Route path="/portabilidade/app/mail/:id" component={Mail} />
      </Switch>
    </BrowserRouter>
  );
}
