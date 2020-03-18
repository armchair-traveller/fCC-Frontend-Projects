import React from "react";
import { Link } from "gatsby";
import { Button } from "@material-ui/core";
import { GitHub, ArrowDownward } from "@material-ui/icons";
import { css } from "@emotion/core";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/armchair-traveller/fCC-Frontend-Projects">
        <Button>
          <GitHub />
        </Button>
      </a>

      <Link to="/quotes">
        <Button>Quotes</Button>
      </Link>

      <Link to="/previewer">
        <Button>
          M
          <ArrowDownward
            css={css`
              font-size: 17;
            `}
          />
          Previewer
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;
