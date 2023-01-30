import { Link } from "react-router-dom";
function DogList({ dogs }) {
  return (
    <>
      <h1>Dog List</h1>
      <h4>Click On Me To See More</h4>
      <div>
        {dogs.map((d, i) => (
          <div key={i}>
            <h3>{d.name}</h3>
            <Link to={`/dogs/${d.name}`}>
              <img src={d.src} alt={d.name} height={200}></img>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default DogList;
