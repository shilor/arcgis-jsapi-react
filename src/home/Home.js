import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <p>
        These are examples utilizing HTML, CSS, JavaScript and the following
        libraries:
        <ul>
          <li>
            <a
              href="https://developers.arcgis.com/javascript"
              target="_blank"
              rel="noreferrer"
            >
              ArcGIS API for Javascript
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>
          </li>
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              React Router
            </a>
          </li>
        </ul>
      </p>
      <p>
        Hosted on{" "}
        <a href="https://pages.github.com/" target="_blank" rel="noreferrer">
          GitHub Pages
        </a>
      </p>
      <p>
        See the source code here on{" "}
        <a
          href="https://github.com/shilor/arcgis-jsapi-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Home;
