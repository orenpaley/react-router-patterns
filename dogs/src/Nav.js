import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <h1>Nav</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
}
export default Nav;
