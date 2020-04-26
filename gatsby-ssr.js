import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
      key="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
      crossOrigin="anonymous"
      defer
    />,
  ]);
};
