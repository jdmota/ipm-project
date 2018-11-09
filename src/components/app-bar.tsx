import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LoginButton from "./account-popup";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "./search-bar";

const styles = theme => ( {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    width: "100%",
    marginLeft: 24,
    marginRight: 24
  },
  appBar: {
    zIndex: 2
  }
} );

type OurAppBarProps = {
  classes: {
    root: string,
    grow: string,
    menuButton: string,
    appBar: string
    loginButton: string
  },
  onLeftDrawerToggle: () => void
  onRightDrawerToggle: () => void
};

function OurAppBar( props: OurAppBarProps ) {
  const { classes, onLeftDrawerToggle } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={onLeftDrawerToggle} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FCTicket
          </Typography>
          <SearchBar
            className={classes.search}
            onRequestSearch={( ...args: any ) => console.log( "search onRequestSearch", args )}
            onRightAdvancedSearchDrawerToggle={() => props.onRightDrawerToggle()}
          />
          <div className={classes.grow} />
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles( styles )( OurAppBar );
