import useFields from "./useFields";
import App from "./App";
import { Link, useHistory } from "react-router-dom";

function NewColorForm({ colors }) {
  const [formData, handleChange, resetForm] = useFields({
    red: "",
    green: "",
    blue: "",
    colorName: "",
  });
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.colorName.value !== "") {
      colors.unshift(e.target.colorName.value);
      window.localStorage.setItem("colors", JSON.stringify(colors));
    } else if (
      e.target.red.value === "" ||
      e.target.blue.value === "" ||
      e.target.green.value === ""
    ) {
      console.log("nothing happened");
      history.push("/colors/new");
      return;
    } else {
      colors.unshift(
        `rgb(${String(e.target.red.value)},${String(
          e.target.green.value
        )},${String(e.target.blue.value)})`
      );
      window.localStorage.setItem("colors", JSON.stringify(colors));
    }
    resetForm();
    history.push("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add A Color</h2>
        <h4>(range: 0-256)</h4>
        <input
          type="number"
          min="0"
          max="256"
          name="red"
          value={formData.red}
          onChange={handleChange}
          placeholder="red"
        />
        <input
          type="number"
          min="0"
          max="256"
          name="green"
          value={formData.green}
          onChange={handleChange}
          placeholder="green"
        />
        <input
          type="number"
          min="0"
          max="256"
          name="blue"
          value={formData.blue}
          onChange={handleChange}
          placeholder="blue"
        />
        <h4> - or -</h4>
        <input
          type="text"
          name="colorName"
          value={formData.colorName}
          onChange={handleChange}
          placeholder="name a color"
          style={{ display: "block", margin: " 10px auto", padding: "3px 0" }}
        />
        <button>Submit</button>
        <Link
          style={{
            display: "block",
            margin: "40px 0",
          }}
          to="/"
        >
          Go Back
        </Link>
      </form>
    </>
  );
}

export default NewColorForm;
