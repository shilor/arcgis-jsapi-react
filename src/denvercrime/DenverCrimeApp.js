import React, { useRef, useEffect, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Legend from "@arcgis/core/widgets/Legend";
import jsonp from "jsonp";

import "./DenverCrimeApp.css";

const DenverCrimeApp = () => {
  const crimeAppDiv = useRef(null);

  const [crimeStats, setCrimeStats] = useState([]);
  const [retries, setRetries] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("In useEffect");

    if (crimeStats.length === 0 && retries < 3) {
      setRetries(retries + 1);
      getCrimeStats();
    }

    if (crimeAppDiv.current && isLoading === false) {
      // Initialize application and zoom to Denver
      const webmap = new WebMap({
        basemap: "streets-vector",
      });

      const mapView = new MapView({
        container: crimeAppDiv.current,
        map: webmap,
      });

      // Add the basemap toggle
      const basemapToggle = new BasemapToggle({
        view: mapView,
        nextBasemap: "hybrid",
      });

      mapView.ui.add(basemapToggle, "bottom-right");

      //Neighborhoods feature layer hosted by City & County of Denver
      const hostedNeighborhoodsLayer = new FeatureLayer({
        url: "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/ArcGIS/rest/services/ODC_ADMN_NEIGHBORHOOD_A/FeatureServer/13",
      });

      mapView.when(() => {
        console.log("In mapView.when()");

        // Query the features from the hosted neighborhoods layer and turn
        // them into a client-side FeatureLayer with a new CRIME_DENSITY field.
        // A hosted feature layer doesn't let you add a renderer with a new field.
        hostedNeighborhoodsLayer.queryFeatures().then(function (results) {
          const neighborhoodGeometries = [];

          // Iterate through the features and add them to the array.
          // Create a new attribute (CRIME_DENSITY) on each feature.
          crimeStats.map((stat) => {
            results.features.map((feature) => {
              if (feature.attributes.NBHD_NAME === stat.name) {
                feature.setAttribute(
                  "CRIME_DENSITY",
                  parseFloat(stat.summary.density)
                );
                neighborhoodGeometries.push(feature);
              }
            });
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
            field: "CRIME_DENSITY",
            theme: "above",
            type: "simple",
            symbol: defaultSym,
            visualVariables: [
              {
                type: "color",
                field: "CRIME_DENSITY",
                legendOptions: {
                  title: "Crime Density",
                },
                stops: [
                  {
                    value: 0.0,
                    color: [255, 255, 255, 0.5],
                    label: "Low",
                  },
                  {
                    value: 100,
                    color: [0, 0, 255, 0.5],
                    label: "High",
                  },
                ],
              },
            ],
          };

          if (crimeStats.length > 0) {
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
                  name: "CRIME_DENSITY",
                  type: "double",
                },
              ],
              renderer: renderer,
            });

            if (!webmap.layers.includes(localNeighborhoodCrimeLayer)) {
              webmap.add(localNeighborhoodCrimeLayer);

              localNeighborhoodCrimeLayer.when(() => {
                console.log("in zoom to extent");
                mapView.goTo(localNeighborhoodCrimeLayer.fullExtent);
              });
            }

            mapView.ui.add(
              new Legend({
                view: mapView,
              }),
              "top-right"
            );
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crimeStats]);

  async function getCrimeStats() {
    const crimeApiUrl =
      "https://www.denvergov.org/GISWebServices/CrimeService/1/statistics/neighborhood";

    console.log("In getCrimeStats()");
    jsonp(crimeApiUrl, null, (err, data) => {
      setIsLoading(false);
      if (err) {
        setCrimeStats([]);
      } else {
        setCrimeStats(data.results);
      }
    });
  }

  return <div className="crimeAppDiv" ref={crimeAppDiv}></div>;
};

export default DenverCrimeApp;
