import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
      <Link to="/">Home Page Link Here This is a change at 6:56pm</Link>
      </li>
      <li>
        <Link to="/github/search">Github Search</Link>
      </li>
      <li>
        <Link to="/github/users/jimmynono">James's Github</Link>
      </li>
      <li>
        <Link to="/github/users/rainycitycoder">Chris's Github</Link>
      </li>
      <li>Version is this value: {import.meta.env.VITE_APP_VERSION}</li>
    </ul>
  );
}
