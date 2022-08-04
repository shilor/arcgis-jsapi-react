import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import DenverNeighborhoods from "./denverneighborhoods/DenverNeighborhoods";
import DenverCrimeApp from "./denvercrime/DenverCrimeApp";

import "./App.css";
import Layout from "./Layout";

export default function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="neighborhoods" element={<DenverNeighborhoods />} />
            <Route path="crime" element={<DenverCrimeApp />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There is nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
