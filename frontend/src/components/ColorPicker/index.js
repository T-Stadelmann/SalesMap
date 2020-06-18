import React, {useState} from "react";
import { SketchPicker } from "react-color";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const presetColors = [
  "rgb(0,0,0)",
  "rgb(0,0,255)",
  "rgb(0,255,0)",
  "rgb(255,0,0)",
  "rgb(255,255,255)"
];


const ColorPicker = (props) => {

  const [pinColor, setPinColor] = useState('#FAEEE6')

  const colorHandler = (color) => {
    setPinColor(color)
  }

  return (<>
    <div style={styles}>
      <SketchPicker color={pinColor} presetColors={presetColors} onChange={colorHandler} style={{'cursor':'default'}}/>
    </div>
  </>)
};

export default ColorPicker;