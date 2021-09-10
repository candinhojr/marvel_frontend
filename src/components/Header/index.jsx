import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import useStyles from "./Header.style";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Link to="/" className={classes.logo}>
          <img
            loading="lazy"
            className={classes.logoIcon}
            alt="Marvel"
            src="https://vignette.wikia.nocookie.net/siivagunner/images/a/a7/Marvel_Logo.png/revision/latest?cb=20170510074130"
          />
        </Link>
      </AppBar>
      ;
    </div>
  );
};

export default Header;
