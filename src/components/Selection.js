
import React, { useState } from "react";

const Selection = ({ applyColor }) => {

  const [selectionStyle, updateSelectionStyle] = useState({
    background: ""
  });

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
    </div>
  );
};

export default Selection;
