import React from "react";
import { Router } from "@reach/router";
import QuoteBox from "../components/QuoteBox";
import MdPreviewer from "../components/MdPreviewer";
import Footer from "../components/Footer";

const App = () => (
  <React.StrictMode>
    <div
      className="center-contents"
      style={{ margin: "0 auto", textAlign: "center" }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="../migrate TODO/style.css" />
      {/* <QuoteBox path="/quotes" /> */}
      {/* <Redirect from="/" to="/quotes" /> */}
      <Router>
        <QuoteBox path="/" />
        <MdPreviewer path="previewer" />
      </Router>
      <Footer />
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  </React.StrictMode>
);

export default App;
