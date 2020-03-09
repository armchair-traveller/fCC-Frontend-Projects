import React from "react";
import { render } from "react-dom";
import { Router, Redirect } from "@reach/router";
import QuoteBox from "./QuoteBox";
import Footer from "./Footer";
import MdPreviewer from "./MdPreviewer";

const App = () => {
  return (
    <React.StrictMode>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <Router>
          <Redirect from="/" to="/quotes" />
          <QuoteBox path="/quotes" />
          <MdPreviewer path="/previewer" />
        </Router>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
