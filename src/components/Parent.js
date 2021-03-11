import React, { useState } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";

const parentStyles = {
  border: "5px solid slategray",
  margin: "2rem",
};

function Parent() {
  const [child1Color, setChild1Color] = useState("salmon");
  const [child2Color, setChild2Color] = useState("lime");

  const handleChild1Click = () => {
    console.log("handleChild 1 Clicked");
    if (child1Color === "salmon") {
      setChild1Color("Crimson");
    } else {
      setChild1Color("salmon");
    }
  };

  const handleChild2Click = () => {
    console.log("handleChild 2 Clicked");
    if (child2Color === "lime") {
      setChild2Color("purple");
    } else {
      setChild2Color("lime");
    }
  };

  return (
    <div style={parentStyles}>
      <h1>Parent</h1>
      <Child1 color={child1Color} handleChild2Click={handleChild2Click} />
      <Child2 color={child2Color} handleChild1Click={handleChild1Click} />
    </div>
  );
}

export default Parent;
