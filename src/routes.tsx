import React from "react";
import { Route, Switch } from "react-router-dom";
import Governance from "views/Governance/Governance";
import Home from "views/Home/Home";
import Learn from "views/Learn/Learn";
import Pools from "views/Pools/Pools";
import Compensation from "views/Compensation/Compensation";
import Vaults from "views/Vault/Vaults";
import Exchange from "views/exchange/exchange";


function Routes() {
  return (
    <Switch>
      <Route path="/learn" component={Learn}></Route>
      <Route path="/pools" component={Pools}></Route>
      <Route path="/governance" component={Governance}></Route>
      <Route path="/compensation" component={Compensation}></Route>
      <Route path="/vault" component={Vaults}></Route>
      <Route path="/" component={Home}></Route>
      <Route path="https://exchange.backup.finance" component={exchange}></Route>
    </Switch>
  );
}

export default Routes;
