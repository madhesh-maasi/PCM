import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import ".../../../src/ExternalRef/css/style.css";
import { green } from "@material-ui/core/colors";
const arrowImage = require("../../../ExternalRef/img/WhyPlayBook/PageSevenImg.png");

let ImgUrl = [];
let RedLink = "";
let BlueLink = "";
let PinkLink = "";
let GreenLink = "";

export default function ArrowImageMapping(props) {
  const [query, setQuery] = useState(1);

  const [links, setLinks] = useState([]);

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

  useEffect(() => {
    props.sp.web.lists
      .getByTitle("ImageMappingUrl")
      .items.get()
      .then((data) => {
        console.log(data);
        ImgUrl = data;
        setLinks(ImgUrl);

        RedLink = ImgUrl.filter(
          (data) => data.Title == "Global Procurement OCM Playbook - Red"
        )[0].PCMLink;

        BlueLink = ImgUrl.filter(
          (data) => data.Title == "Global Procurement OCM Playbook - Blue"
        )[0].PCMLink;

        PinkLink = ImgUrl.filter(
          (data) => data.Title == "Global Procurement OCM Playbook - Pink"
        )[0].PCMLink;

        GreenLink = ImgUrl.filter(
          (data) => data.Title == "Global Procurement OCM Playbook - Green"
        )[0].PCMLink;
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateMapArea = (id, coords) => {
    console.log(id, coords);

    // colors Array
    let ArrowImageArr = [];

    //   red image
    if (
      (coords[1] >= 208 &&
        coords[1] <= 337 &&
        coords[0] >= 0 &&
        coords[0] <= 157) ||
      (coords[1] >= 279 &&
        coords[1] <= 339 &&
        coords[0] >= 157 &&
        coords[0] <= 216)
    ) {
      console.log("Blue image");
      ArrowImageArr.push("Red Image");
      window.open(RedLink);
    }

    //   blue image
    if (
      (coords[1] >= 149 &&
        coords[1] <= 277 &&
        coords[0] >= 159 &&
        coords[0] <= 315) ||
      (coords[1] >= 220 &&
        coords[1] <= 280 &&
        coords[0] >= 315 &&
        coords[0] <= 376)
    ) {
      console.log("Blue image");
      ArrowImageArr.push("Blue Image");
      window.open(BlueLink);
    }

    //   rose image
    if (
      (coords[1] >= 88 &&
        coords[1] <= 218 &&
        coords[0] >= 317 &&
        coords[0] <= 474) ||
      (coords[1] >= 158 &&
        coords[1] <= 217 &&
        coords[0] >= 473 &&
        coords[0] <= 532)
    ) {
      console.log("Rose image");
      ArrowImageArr.push("Rose Image");
      window.open(PinkLink);
    }

    //   Teal image
    if (
      (coords[1] >= 29 &&
        coords[1] <= 157 &&
        coords[0] >= 475 &&
        coords[0] <= 660) ||
      (coords[1] >= 2 &&
        coords[1] <= 26 &&
        coords[0] >= 646 &&
        coords[0] <= 659) ||
      (coords[1] >= 159 &&
        coords[1] <= 181 &&
        coords[0] >= 647 &&
        coords[0] <= 656) ||
      (coords[1] >= 65 &&
        coords[1] <= 125 &&
        coords[0] >= 672 &&
        coords[0] <= 683) ||
      (coords[1] >= 80 &&
        coords[1] <= 103 &&
        coords[0] >= 691 &&
        coords[0] <= 698) ||
      (coords[1] >= 122 &&
        coords[1] <= 138 &&
        coords[0] >= 666 &&
        coords[0] <= 676) ||
      (coords[1] >= 31 &&
        coords[1] <= 156 &&
        coords[0] >= 660 &&
        coords[0] <= 693)
    ) {
      console.log("Teal image");
      ArrowImageArr.push("Teal Image");
      window.open(GreenLink);
    }

    console.log(ArrowImageArr);

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
      className="seventhSlide"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <ImageMapper
        src={arrowImage}
        //onClick={area => getTipPosition(area)}
        onImageClick={handleUpdateMapArea}
        map={mapAreas}
        width={700}
        height={340.43}
      />
    </div>
  );
}
