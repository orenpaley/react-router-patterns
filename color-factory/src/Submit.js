import { Redirect } from "react-router-dom";
import App from "./App";

function Submit({ red, blue, green }) {
  console.log("default props", App.defaultProps);
  console.log("RGB VALUES", { red }, { green }, { blue });
  App.defaultProps.colors.push(
    `rgb(${String(red)},${String(green)},${String(blue)})`
  );
  console.log("SUBMITTING");
  console.log(App.defaultProps.colors);
  return <Redirect to="/" />;
}

export default Submit;
