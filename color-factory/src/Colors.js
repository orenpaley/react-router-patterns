// import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
function Colors({ colors }) {
  return (
    <>
      <h1>Colors</h1>
      <div
        style={{
          margin: "auto",
          width: "50%",
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "200px",
            height: "200px",
            border: "black 2px solid",
            margin: ".5px",
            fontSize: "100px",
            color: "black",
            textAlign: "center",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              margin: "27px",
              display: "block",
            }}
            to="/colors/new"
          >
            +
          </Link>
        </div>
        {colors.map((c) => {
          return (
            <Link
              to={`/colors/${c}`}
              style={{
                backgroundColor: c,
                width: "200px",
                height: "200px",
                border: "black 2px solid",
                margin: ".5px",
              }}
            ></Link>
          );
        })}
      </div>
    </>
  );
}

export default Colors;
