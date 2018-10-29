import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const styles = ( theme: any ) => ( {
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
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade( theme.palette.common.white, 0.15 ),
    "&:hover": {
      backgroundColor: fade( theme.palette.common.white, 0.25 ),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [ theme.breakpoints.up( "sm" ) ]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 10,
    transition: theme.transitions.create( "width" ),
    width: "100%",
    [ theme.breakpoints.up( "md" ) ]: {
      width: 200,
    },
  },
} );

type OurAppBarProps = {
  classes: {
    root: string,
    grow: string,
    menuButton: string,
    search: string,
    searchIcon: string,
    inputRoot: string,
    inputInput: string
  },
  onLeftDrawerToggle: () => void
};

function OurAppBar( props: OurAppBarProps ) {
  const { classes, onLeftDrawerToggle } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={onLeftDrawerToggle} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            FCTicket
          </Typography>
          <div className={classes.search}>
            <Input
              placeholder="Search…"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.grow} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles( styles )( OurAppBar );
