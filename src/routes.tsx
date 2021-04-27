import React from "react";
import { Route, Switch } from "react-router-dom";
import Governance from "views/Governance/Governance";
import Home from "views/Home/Home";
import Learn from "views/Learn/Learn";

import Compensation from "views/Compensation/Compensation";




function Routes() {
  return (
    <Switch>
      <Route path="/learn" component={Learn}></Route>

      <Route path="/governance" component={Governance}></Route>
      <Route path="/compensation" component={Compensation}></Route>

      <Route path="/" component={Home}></Route>

    </Switch>
  );
}

export default Routes;
