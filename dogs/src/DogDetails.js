import { Link } from "react-router-dom";

function DogDetails({ dog }) {
  return (
    <div>
      <h1>
        Hi, I am {dog[0].name} and I am {dog[0].age}.
      </h1>
      <img src={dog[0].src} alt={dog[0].name} height={200}></img>
      <h2>Here are some facts</h2>
      {dog[0].facts.map((f, i) => (
        <h4 key={i}>{f}</h4>
      ))}
      <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetails;
