import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "100%",
    height: "70vh",
    border: "1px solid",
    borderRadius: "5px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const onLoadMarkeer = (marker) => {
    console.log("marker: ", marker);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCDoAXyYuYwkWfJjKf4CPiG-sWcbuIRJtg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      setMap(map);
      const zoom = 17;
      map.setZoom(zoom);
    },
    [map, center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={17} 
    >
      <Marker onLoad={onLoadMarkeer} position={center} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
