import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import ColorGetter from "./ColorGetter";
import NewColorForm from "./NewColorForm";
import Calculator from "./Calculator";
import Submit from "./Submit";

function Routes({ colors }) {
  if (window.localStorage.getItem("colors")) {
    colors = JSON.parse(window.localStorage.getItem("colors"));
  }
  console.log("Routes", colors);
  return (
    <div>
      <Switch>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
        <Route exact path="/calculator/add/:x/:y">
          <Calculator operation="+" />
        </Route>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Route exact path="/colors/new/submit">
          <Submit />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm colors={colors} />
        </Route>
        <Route exact path="/colors/:color">
          <ColorGetter colors={colors} />
        </Route>
        <Route exact path="/">
          <Redirect to="/colors" />
        </Route>
        <Route path="/">
          <Redirect to="/colors" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
