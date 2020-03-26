import React from "react";
import { Helmet } from "react-helmet";
import { Router, Redirect } from "@reach/router";
import QuoteBox from "../components/QuoteBox";
import MdPreviewer from "../components/MdPreviewer";
import Footer from "../components/Footer";
import { css } from "@emotion/core";

export default function App() {
  return (
    <React.StrictMode>
      <div
        className="center-contents"
        css={css`
          margin: 0 auto;
          text-align: center;
        `}
      >
        <Helmet>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1"
          />
          <title>Frontend Projects</title>
        </Helmet>
        <Router>
          <Redirect path="/" from="/" to="/quotes" noThrow />
          <QuoteBox path="/quotes" />
          <MdPreviewer path="/previewer" />
        </Router>
        <Footer />
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </div>
    </React.StrictMode>
  );
}
