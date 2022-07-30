import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

const DenverCrimeApp = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        basemap: "streets",
      });

      new MapView({
        container: mapDiv.current,
        map: webmap,
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
};

export default DenverCrimeApp;
