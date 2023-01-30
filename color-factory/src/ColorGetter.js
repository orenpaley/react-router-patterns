import { useParams, Link } from "react-router-dom";

function ColorGetter() {
  let { color } = useParams();

  if (!color) return null;

  return (
    <>
      <div style={{ backgroundColor: color, width: "100%", height: "800px" }}>
        <Link to="/">Go Back</Link>
      </div>
    </>
  );
}

export default ColorGetter;
