import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header-layout">
        <h1>ArcGIS API for JavaScript React Examples</h1>

        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-default"
            }
            to="/"
          >
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-default"
            }
            to="neighborhoods"
          >
            Neighborhoods
          </NavLink>{" "}
          |{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-default"
            }
            to="crime"
          >
            Crime
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
