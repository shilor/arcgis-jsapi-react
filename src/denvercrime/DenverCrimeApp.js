import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";

import "./DenverCrimeApp.css";
//import crimeStats from "./ExampleCrimeStats.json";

const DenverCrimeApp = () => {
  const crimeAppDiv = useRef(null);

  /*
  async function getNeighborhoodStats() {
    // The Denver Crime API does not allow CORS. Check on getting whitelisted.
    const neighborhoodRequest = await fetch(
      "http://www.denvergov.org/GISWebServices/CrimeService/1/statistics/neighborhood?occurred_from=2022-07-15T00%3A00%3A00&occurred_to=2022-07-30T00%3A00%3A00&categories="
    );
    const json = await neighborhoodRequest.json();
    console.log(json);
  }
  */

  useEffect(() => {
    if (crimeAppDiv.current) {
      // Initialize application and zoom to Denver
      const webmap = new WebMap({
        basemap: "streets-vector",
      });

      const mapView = new MapView({
        container: crimeAppDiv.current,
        map: webmap,
        center: [-104.9, 39.75],
        zoom: 10,
      });

      // Add the basemap toggle
      const basemapToggle = new BasemapToggle({
        view: mapView,
        nextBasemap: "hybrid",
      });

      mapView.ui.add(basemapToggle, "bottom-right");

      //TODO: Get the crime stats from ExampleCrimeStats.json. Use random numbers for now.
      //getNeighborhoodStats();

      //Neighborhoods feature layer hosted by City & County of Denver
      const hostedNeighborhoodsLayer = new FeatureLayer({
        url: "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/ArcGIS/rest/services/ODC_ADMN_NEIGHBORHOOD_A/FeatureServer/13",
      });

      mapView.when(() => {
        console.log("In mapView.when()");

        // Query the features from the hosted neighborhoods layer and turn
        // them into a client-side FeatureLayer with a new CRIME_RATE field.
        // A hosted feature layer doesn't let you add a renderer with a new field.
        hostedNeighborhoodsLayer.queryFeatures().then(function (results) {
          const neighborhoodGeometries = [];

          // Iterate through the features and add them to the array.
          // Create a new attribute (CRIME_RATE) on each feature
          // TODO: Map the stats from the Crime API to the features
          results.features.map((feature) => {
            feature.setAttribute("CRIME_RATE", Math.random());
            neighborhoodGeometries.push(feature);
          });

          // Create the client-side FeatureLayer
          const localNeighborhoodCrimeLayer = new FeatureLayer({
            source: neighborhoodGeometries,
            objectIdField: "OBJECTID",
            fields: [
              {
                name: "OBJECTID",
                type: "oid",
              },
              {
                name: "NBHD_ID",
                type: "integer",
              },
              {
                name: "CRIME_RATE",
                type: "double",
              },
            ],
          });

          // Configure the rendere
          // TODO: Make it look nice
          const params = {
            layer: localNeighborhoodCrimeLayer,
            view: mapView,
            field: "CRIME_RATE",
            classificationMethod: "quantile",
            numClasses: 4,
          };

          colorRendererCreator
            .createClassBreaksRenderer(params)
            .then((response) => {
              localNeighborhoodCrimeLayer.renderer = response.renderer;
              if (!webmap.layers.includes(localNeighborhoodCrimeLayer)) {
                webmap.add(localNeighborhoodCrimeLayer);
              }
            });
        });
      });
    }
  }, []);

  return <div className="crimeAppDiv" ref={crimeAppDiv}></div>;
};

export default DenverCrimeApp;
