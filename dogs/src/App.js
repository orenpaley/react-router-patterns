import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes.js";
import Nav from "./Nav.js";

const whiskey = require("/Users/oren/Documents/code/react/react-router-patterns/react-router-patterns/dogs/src/img/whiskey.jpg");
const duke = require("/Users/oren/Documents/code/react/react-router-patterns/react-router-patterns/dogs/src/img/duke.jpg");
const perry = require("/Users/oren/Documents/code/react/react-router-patterns/react-router-patterns/dogs/src/img/perry.jpg");
const tubby = require("/Users/oren/Documents/code/react/react-router-patterns/react-router-patterns/dogs/src/img/tubby.jpg");

function App(defaultProps) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes dogs={defaultProps.dogs} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
