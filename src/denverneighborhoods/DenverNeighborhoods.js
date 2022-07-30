import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Search from "@arcgis/core/widgets/Search";

import "./DenverNeighborhoods.css";

const DenverNeighborhoods = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application and zoom to Denver
       */
      const webmap = new WebMap({
        basemap: "streets-vector",
      });

      const mapView = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [-104.9, 39.75],
        zoom: 10,
      });

      const basemapToggle = new BasemapToggle({
        view: mapView,
        nextBasemap: "hybrid",
      });

      mapView.ui.add(basemapToggle, "bottom-right");

      // Define a pop-up for Neighborhoods
      const popupNeighborhood = {
        title: "Neighborhood",
        content: "<b>Neighborhood:</b> {NBHD_NAME}<br>",
      };

      webmap.add(popupNeighborhood);

      //Neighborhoods feature layer hosted by City & County of Denver
      const neighborhoodsLayer = new FeatureLayer({
        url: "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/ArcGIS/rest/services/ODC_ADMN_NEIGHBORHOOD_A/FeatureServer/13",
        opacity: 0.5,
        outFields: ["NBHD_ID", "NBHD_NAME"],
        popupTemplate: popupNeighborhood,
      });

      webmap.add(neighborhoodsLayer);

      //Add Search widget
      const search = new Search({
        view: mapView,
      });

      mapView.ui.add(search, "top-right");
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
};

export default DenverNeighborhoods;
