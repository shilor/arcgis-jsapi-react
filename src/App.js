import { Outlet, NavLink } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ArcGIS API for JavaScript Examples</h1>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "App-header-link-active" : "App-header-link-default"
            }
            to="./neighborhoods"
          >
            Neighborhoods
          </NavLink>
          |{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "App-header-link-active" : "App-header-link-default"
            }
            to="./crime"
          >
            Crime
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
