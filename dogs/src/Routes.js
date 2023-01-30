import { Switch, Route, Redirect, useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import FindDogDetails from "./FindDogDetails";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <FindDogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
