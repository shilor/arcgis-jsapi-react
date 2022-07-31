import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Legend from "@arcgis/core/widgets/Legend";

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

          // Configure the renderer
          const defaultSym = {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [128, 128, 128, 0.2],
              width: "0.5px",
            },
          };
          const renderer = {
            view: mapView,
            field: "CRIME_RATE",
            theme: "above",
            type: "simple",
            symbol: defaultSym,
            visualVariables: [
              {
                type: "color",
                field: "CRIME_RATE",
                legendOptions: {
                  title: "Crime Density",
                },
                stops: [
                  {
                    value: 0.0,
                    color: [255, 255, 255, 0.5],
                    label: "0",
                  },
                  {
                    value: 1.0,
                    color: [0, 0, 255, 0.5],
                    label: "1",
                  },
                ],
              },
            ],
          };

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
            renderer: renderer,
          });

          if (!webmap.layers.includes(localNeighborhoodCrimeLayer)) {
            webmap.add(localNeighborhoodCrimeLayer);
          }

          mapView.ui.add(
            new Legend({
              view: mapView,
            }),
            "top-right"
          );
        });
      });
    }
  }, []);

  return <div className="crimeAppDiv" ref={crimeAppDiv}></div>;
};

export default DenverCrimeApp;
