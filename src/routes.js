import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Enter from "./pages/Enter";
import Dashboard from "./pages/Dashboard";
import Sheduler from "./pages/Sheduler";
import Edit from "./pages/Edit";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Enter} />
        <Route path="/sheduler" component={Sheduler} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/manage" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
