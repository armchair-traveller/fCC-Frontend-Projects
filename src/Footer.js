import React from "react";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Link to="/quotes">
        <Button>Quotes</Button>
      </Link>

      <Link to="/previewer">
        <Button>Markdown Previewer</Button>
      </Link>
    </footer>
  );
};

export default Footer;
