import React from "react";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";
import { GitHub, ArrowDownward } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/armchair-traveller/fCC-Frontend-Projects">
        <Button>
          <GitHub />
        </Button>
      </a>

      {/* <Link to="/quotes"> */}
      <Link to="/">
        <Button>Quotes</Button>
      </Link>

      <Link to="/previewer">
        <Button>
          M
          <ArrowDownward style={{ fontSize: 17 }} />
          Previewer
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;
