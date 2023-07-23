import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="Logo">
          <h4>Nodes-Notes</h4>
        </Link>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add-note">Add Note</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
