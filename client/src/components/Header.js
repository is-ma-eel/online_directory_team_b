import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Online Business Directory</h1>
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Business List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active" active>
          Add Business
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
