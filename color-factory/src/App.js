import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes colors={colors} />
      </BrowserRouter>
    </div>
  );
}

export const colors = ["red", "blue", "green", "yellow", "orange"];

App.defaultProps = { colors };

export default App;
