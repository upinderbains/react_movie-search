import React from "react";
import gif from "./giphy.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={gif}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Laoding..."
      />
    </div>
  );
};

export default Spinner;
