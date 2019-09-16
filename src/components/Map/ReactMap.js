/*import React, { Component, useState } from "react";

import logo from "./logo.png";

import Recipe from "./Recipe";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DrawingManager
} from "react-google-maps";

import * as CanteenData from "./data/canteens.json";

import mapStyles from "./mapStyles";

const REACT_APP_GOOGLE_KEY = "AIzaSyAtiPH_H4EuezcOGztvA1_UP_sRtNP7CVA";

function Map() {
  const [seletedCanteen, setSeletedCanteen] = useState(null);

  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 5.9381, lng: 80.5761 }}
      defaultOptions={{ styles:mapStyles }}
    >
      <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />

      {CanteenData.canteens.map(canteen => (
        <Marker
          key={canteen.id}
          position={{ lat: canteen.lat, lng: canteen.lng }}
          options={{ icon: logo }}
          onClick={() => {
            setSeletedCanteen(canteen);
          }}
        />
      ))}

      {seletedCanteen && (
        <div>
          <InfoWindow
            position={{ lat: seletedCanteen.lat, lng: seletedCanteen.lng }}
            onCloseClick={() => {
              setSeletedCanteen(null);
            }}
          >
            <div>
               <Recipe canteen={seletedCanteen.name} />
            </div>
          </InfoWindow>
        </div>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class ReactMap extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default ReactMap;*/
