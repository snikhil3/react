import React, { useState } from "react";
function Colour_picker() {
  const [colour, setColour] = useState("#FFFFFF");
  function handleColorChange(event) {
    setColour(event.target.value);
  }
  return (
    <div className="container">
      <h1>Colour Picker</h1>
      <div className="colour-display" style={{ backgroundColor: colour }}>
        <p>Selected Colour:{colour}</p>
      </div>
      <input type="color" value={colour} onChange={handleColorChange} />
    </div>
  );
}
export default Colour_picker;
