import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import ".../../../src/ExternalRef/css/style.css";
let MapImage = require("../../../ExternalRef/img/ImageMap.png");
export default function App() {
  const [query, setQuery] = useState(1);

  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { id: 5, shape: "circle", coords: [170, 100, 10], preFillColor: "#fff" },
    ],
  });

  // const getTipPosition = area => {
  //   const obj = { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  //   console.log(obj);
  // };

  const handleUpdateMapArea = useCallback(
    (evt) => updateMapArea(5, [evt.nativeEvent.layerX, evt.nativeEvent.layerY]),
    []
  );

  /**
   * Update image area when updated
   *
   * @see https://github.com/coldiary/react-image-mapper/issues/32
   */
  useEffect(() => {
    setQuery(Math.random());
  }, [mapAreas]);

  const updateMapArea = (id, coords) => {
    console.log(id, coords);
    const areas = mapAreas.areas.map((item) =>
      item.id === id ? { ...item, coords } : item
    );
    setMapAreas({
      name: mapAreas.name,
      areas,
    });
  };
  const LeaderShipCoords = [
    [239, 22],
    [237, 32],
    [237, 42],
    [239, 54],
    [240, 64],
    [236, 76],
    [243, 84],
    [241, 98],
    [242, 109],
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ImageMapper
        src={MapImage}
        //onClick={area => getTipPosition(area)}
        onImageClick={handleUpdateMapArea}
        map={mapAreas}
        width={500}
      />
      <pre>On each click, circle should be position of the clicked</pre>
    </div>
  );
}
