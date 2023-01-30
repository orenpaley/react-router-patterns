import { useState } from "react";
import App from "./App";
import { Redirect } from "react-router-dom";

function useFields(initialState) {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  const reset = () => {
    console.log("resetting");
    setFormData(initialState);
  };

  return [formData, handleChange, reset];
}

export default useFields;
