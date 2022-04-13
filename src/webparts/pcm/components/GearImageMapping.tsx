import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import ".../../../src/ExternalRef/css/style.css";
const bgimg = require("../../../ExternalRef/img/WhyPlayBook/PageOneBG.png");
const MapImage = require("../../../ExternalRef/img/WhyPlayBook/GearImage.png");

export default function GearImageMapping() {
  const [query, setQuery] = useState(1);

  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [{ id: 5, shape: "circle", coords: [170, 100, 10] }],
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

    // colors Array
    let colorArr = [];

    // green
    if (
      (coords[1] >= 20 &&
        coords[1] <= 117 &&
        coords[0] >= 235 &&
        coords[0] <= 245) ||
      (coords[1] >= 34 &&
        coords[1] <= 131 &&
        coords[0] >= 186 &&
        coords[0] <= 230) ||
      (coords[1] >= 60 &&
        coords[1] <= 146 &&
        coords[0] >= 171 &&
        coords[0] <= 192) ||
      (coords[1] >= 60 &&
        coords[1] <= 146 &&
        coords[0] >= 171 &&
        coords[0] <= 192) ||
      (coords[1] >= 56 &&
        coords[1] <= 142 &&
        coords[0] >= 140 &&
        coords[0] <= 182) ||
      (coords[1] >= 124 &&
        coords[1] <= 145 &&
        coords[0] >= 91 &&
        coords[0] <= 127) ||
      (coords[1] >= 111 &&
        coords[1] <= 145 &&
        coords[0] >= 118 &&
        coords[0] <= 143) ||
      (coords[1] >= 165 &&
        coords[1] <= 179 &&
        coords[0] >= 83 &&
        coords[0] <= 131) ||
      (coords[1] >= 158 &&
        coords[1] <= 164 &&
        coords[0] >= 104 &&
        coords[0] <= 129) ||
      (coords[1] >= 142 &&
        coords[1] <= 162 &&
        coords[0] >= 105 &&
        coords[0] <= 126) ||
      (coords[1] >= 86 &&
        coords[1] <= 107 &&
        coords[0] >= 110 &&
        coords[0] <= 146) ||
      (coords[1] >= 133 &&
        coords[1] <= 178 &&
        coords[0] >= 161 &&
        coords[0] <= 181) ||
      (coords[1] >= 152 &&
        coords[1] <= 178 &&
        coords[0] >= 153 &&
        coords[0] <= 181) ||
      (coords[1] >= 63 &&
        coords[1] <= 96 &&
        coords[0] >= 241 &&
        coords[0] <= 283) ||
      (coords[1] >= 46 &&
        coords[1] <= 56 &&
        coords[0] >= 142 &&
        coords[0] <= 161)
    ) {
      console.log("green");
      colorArr.push("Green");
      // window.location.href = "https://www.google.com";
    }
    // rose
    if (
      (coords[1] >= 20 &&
        coords[1] <= 67 &&
        coords[0] >= 246 &&
        coords[0] <= 259) ||
      (coords[1] >= 38 &&
        coords[1] <= 62 &&
        coords[0] >= 256 &&
        coords[0] <= 297) ||
      (coords[1] >= 23 &&
        coords[1] <= 43 &&
        coords[0] >= 272 &&
        coords[0] <= 298) ||
      (coords[1] >= 48 &&
        coords[1] <= 146 &&
        coords[0] >= 283 &&
        coords[0] <= 313) ||
      (coords[1] >= 45 &&
        coords[1] <= 70 &&
        coords[0] >= 313 &&
        coords[0] <= 340) ||
      (coords[1] >= 69 &&
        coords[1] <= 179 &&
        coords[0] >= 90 &&
        coords[0] <= 94) ||
      (coords[1] >= 78 &&
        coords[1] <= 179 &&
        coords[0] >= 313 &&
        coords[0] <= 350) ||
      (coords[1] >= 91 &&
        coords[1] <= 118 &&
        coords[0] >= 246 &&
        coords[0] <= 256) ||
      (coords[1] >= 96 &&
        coords[1] <= 121 &&
        coords[0] >= 255 &&
        coords[0] <= 366) ||
      (coords[1] >= 78 &&
        coords[1] <= 36 &&
        coords[0] >= 348 &&
        coords[0] <= 377) ||
      (coords[1] >= 124 &&
        coords[1] <= 147 &&
        coords[0] >= 282 &&
        coords[0] <= 398) ||
      (coords[1] >= 143 &&
        coords[1] <= 215 &&
        coords[0] >= 340 &&
        coords[0] <= 360) ||
      (coords[1] >= 189 &&
        coords[1] <= 215 &&
        coords[0] >= 335 &&
        coords[0] <= 365) ||
      (coords[1] >= 166 &&
        coords[1] <= 177 &&
        coords[0] >= 308 &&
        coords[0] <= 405) ||
      (coords[1] >= 77 &&
        coords[1] <= 102 &&
        coords[0] >= 347 &&
        coords[0] <= 375)
    ) {
      console.log("Rose");
      colorArr.push("Rose");
    }

    // blue
    if (
      (coords[1] >= 244 &&
        coords[1] <= 339 &&
        coords[0] >= 245 &&
        coords[0] <= 259) ||
      (coords[1] >= 240 &&
        coords[1] <= 319 &&
        coords[0] >= 257 &&
        coords[0] <= 278) ||
      (coords[1] >= 235 &&
        coords[1] <= 316 &&
        coords[0] >= 271 &&
        coords[0] <= 303) ||
      (coords[1] >= 311 &&
        coords[1] <= 333 &&
        coords[0] >= 278 &&
        coords[0] <= 305) ||
      (coords[1] >= 244 &&
        coords[1] <= 307 &&
        coords[0] >= 278 &&
        coords[0] <= 309) ||
      (coords[1] >= 217 &&
        coords[1] <= 238 &&
        coords[0] >= 292 &&
        coords[0] <= 400) ||
      (coords[1] >= 227 &&
        coords[1] <= 253 &&
        coords[0] >= 278 &&
        coords[0] <= 372) ||
      (coords[1] >= 254 &&
        coords[1] <= 279 &&
        coords[0] >= 351 &&
        coords[0] <= 371) ||
      (coords[1] >= 285 &&
        coords[1] <= 310 &&
        coords[0] >= 317 &&
        coords[0] <= 346) ||
      (coords[1] >= 252 &&
        coords[1] <= 302 &&
        coords[0] >= 288 &&
        coords[0] <= 324) ||
      (coords[1] >= 239 &&
        coords[1] <= 283 &&
        coords[0] >= 313 &&
        coords[0] <= 355) ||
      (coords[1] >= 180 &&
        coords[1] <= 193 &&
        coords[0] >= 360 &&
        coords[0] <= 405) ||
      (coords[1] >= 192 &&
        coords[1] <= 219 &&
        coords[0] >= 367 &&
        coords[0] <= 386) ||
      (coords[1] >= 181 &&
        coords[1] <= 192 &&
        coords[0] >= 308 &&
        coords[0] <= 338) ||
      (coords[1] >= 191 &&
        coords[1] <= 224 &&
        coords[0] >= 300 &&
        coords[0] <= 333) ||
      (coords[1] >= 260 &&
        coords[1] <= 292 &&
        coords[0] >= 209 &&
        coords[0] <= 236) ||
      (coords[1] >= 267 &&
        coords[1] <= 286 &&
        coords[0] >= 230 &&
        coords[0] <= 257)
    ) {
      console.log("Blue");
      colorArr.push("Blue");
    }

    // red
    if (
      (coords[1] >= 144 &&
        coords[1] <= 165 &&
        coords[0] >= 127 &&
        coords[0] <= 159) ||
      (coords[1] >= 164 &&
        coords[1] <= 178 &&
        coords[0] >= 133 &&
        coords[0] <= 153) ||
      (coords[1] >= 180 &&
        coords[1] <= 192 &&
        coords[0] >= 83 &&
        coords[0] <= 182) ||
      (coords[1] >= 189 &&
        coords[1] <= 220 &&
        coords[0] >= 104 &&
        coords[0] <= 184) ||
      (coords[1] >= 211 &&
        coords[1] <= 236 &&
        coords[0] >= 90 &&
        coords[0] <= 194) ||
      (coords[1] >= 227 &&
        coords[1] <= 247 &&
        coords[0] >= 117 &&
        coords[0] <= 206) ||
      (coords[1] >= 243 &&
        coords[1] <= 266 &&
        coords[0] >= 232 &&
        coords[0] <= 245) ||
      (coords[1] >= 231 &&
        coords[1] <= 260 &&
        coords[0] >= 118 &&
        coords[0] <= 214) ||
      (coords[1] >= 253 &&
        coords[1] <= 276 &&
        coords[0] >= 110 &&
        coords[0] <= 137) ||
      (coords[1] >= 238 &&
        coords[1] <= 260 &&
        coords[0] >= 199 &&
        coords[0] <= 229) ||
      (coords[1] >= 255 &&
        coords[1] <= 300 &&
        coords[0] >= 139 &&
        coords[0] <= 275) ||
      (coords[1] >= 284 &&
        coords[1] <= 311 &&
        coords[0] >= 143 &&
        coords[0] <= 170) ||
      (coords[1] >= 290 &&
        coords[1] <= 305 &&
        coords[0] >= 173 &&
        coords[0] <= 211) ||
      (coords[1] >= 311 &&
        coords[1] <= 333 &&
        coords[0] >= 183 &&
        coords[0] <= 211) ||
      (coords[1] >= 288 &&
        coords[1] <= 340 &&
        coords[0] >= 233 &&
        coords[0] <= 244) ||
      (coords[1] >= 294 &&
        coords[1] <= 320 &&
        coords[0] >= 201 &&
        coords[0] <= 233)
    ) {
      console.log("Red");
      colorArr.push("Red");
    }

    console.log(colorArr);

    if (
      (colorArr[0] == "Green" && colorArr[1] == "Rose") ||
      (colorArr[0] == "Green" && colorArr[1] == "Red")
    ) {
      console.log("The color is Green");
    }
    if (
      (colorArr[0] == "Rose" && colorArr[1] == "Blue") ||
      (colorArr[0] == "Rose" && colorArr[1] == "Green")
    ) {
      console.log("The color is Rose");
    }
    if (
      (colorArr[0] == "Blue" && colorArr[1] == "Rose") ||
      (colorArr[0] == "Blue" && colorArr[1] == "Red")
    ) {
      console.log("The color is Blue");
    }
    if (
      (colorArr[0] == "Red" && colorArr[1] == "Green") ||
      (colorArr[0] == "Red" && colorArr[1] == "Blue")
    ) {
      console.log("The color is Red");
    }

    const areas = mapAreas.areas.map((item) =>
      item.id === id ? { ...item, coords } : item
    );
    setMapAreas({
      name: mapAreas.name,
      areas,
    });
  };

  return (
    <div
      className="eigthSlide"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <div
        className="info-text"
        style={{
          width: "260px",
          padding: "20px",
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          margin: "30px 60px",
          color: "#000099",
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        <p>
          The holistic Change Management framework starts with leader alignment
          around a common vision and pre-liminary engagement, followed by
          stakeholder and change impact identification and analysis, stakeholder
          engagement and communication, and training. These change levers
          together drive and accelerate transformational change. Depending upon
          the initiative, different levers may be selected to develop a strategy
          and plan that supports sustainable behavior and performance change.
          When necessary, apply sequentially. This OCM methodology is in
          alignment with J&J Supply Chain Process Excellence Change Management
          approach.
        </p>
      </div>
      <ImageMapper
        src={MapImage}
        //onClick={area => getTipPosition(area)}
        onImageClick={handleUpdateMapArea}
        map={mapAreas}
        width={499.99}
        height={347.29}
      />
    </div>
  );
}
