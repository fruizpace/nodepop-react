import Button from "../common/Button";
import AuthContext from "../auth/context";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { isLogged, handleLogout } = useContext(AuthContext);
  return (
    <header className="header">
      <Link to="/">
        <div>Nodepop</div>
      </Link>
      <nav className="header-nav">
        <NavLink to="/ads">
          <Button className="navBar-button">Home</Button>
        </NavLink>
        <NavLink to="/adv/new">
          <Button className="navBar-button">New Ad</Button>
        </NavLink>
        {isLogged ? (
          <Button
            className="header-button"
            as={Link}
            to="/login"
            onClick={handleLogout}
          >
            Log out
          </Button>
        ) : (
          <Button
            variant="primary"
            className="header-button"
            as={Link}
            to="/login"
          >
            Log in
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;