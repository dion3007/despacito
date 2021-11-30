import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Planting from "./pages/Planting";
import ProgramDetail from "./pages/ProgramDetail";
import User from "./pages/User";
import PlantingDetail from "./pages/PlantingDetail";
import Emisi from "./pages/Emisi";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import PrivateRoute from "./utils/private-route";

const RootApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public */}
        <Route exact path="/" component={Home} />
        <Route exact path="/planting" component={Planting} />
        <Route exact path="/program-detail" component={ProgramDetail} />
        <Route
          exact
          path="/planting-detail"
          component={PlantingDetail}
        />
        <Route exact path="/emisi" component={Emisi} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/user" component={User} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<RootApp />, document.getElementById("root"));
