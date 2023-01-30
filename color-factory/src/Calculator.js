import useFields from "./useFields";
import { useState } from "react";
import { Link } from "react-router-dom";

function Calculator(operation) {
  const [res, setRes] = useState(null);
  let [formData, handleChange] = useFields({
    x: "",
    y: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form data op selected", formData.operation);
    if (operation === "+") {
      setRes(Number(formData.x) + Number(formData.y));
    } else if (operation === "-") {
      setRes(Number(formData.x) - Number(formData.y));
    } else if (operation === "*") {
      setRes(Number(formData.x) * Number(formData.y));
    } else if (operation === "/") {
      setRes(Number(formData.x) / Number(formData.y));
    }

    console.log(`${formData.x} ${operation} ${formData.y} = ${res}`);
    return (
      <>
        {/* <GetResult calc={formData} /> */}
        <div>
          <h2>
            `${formData.x} ${operation} ${formData.y} = ${res}
            !`
          </h2>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>I am A Browser Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={formData.x}
          name="x"
          onChange={handleChange}
        />

        <select
          value={formData.operation}
          onChange={handleChange}
          id="operation"
          name="operation"
        >
          <option value="+" selected>
            +
          </option>
          ;<option value="-">-</option>;<option value="*">*</option>;
          <option value="/">/</option>;
        </select>

        <input
          type="number"
          value={formData.y}
          name="y"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Calculator;
