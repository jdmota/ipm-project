import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { setParamsName } from "../actions/setParams";
import LoginButton from "./account-popup";
import SearchWithAutoComplete from "./search/search-auto-complete";
import { navigate } from "../helpers/router";

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
  },
  home: {
    cursor: "pointer"
  }
} );

type OurAppBarProps = {
  classes: any,
  onLeftDrawerToggle: () => void
  onRightDrawerToggle: () => void,
  setParamsName: any
};

const navigateHome = () => navigate( "/" );

function OurAppBar( props: OurAppBarProps ) {
  const { classes, onLeftDrawerToggle } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={onLeftDrawerToggle} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.home} onClick={navigateHome} role="button" aria-label="Home">
            <Typography variant="h6" color="inherit">FCTicket</Typography>
          </div>
          <SearchWithAutoComplete
            className={classes.search}
            onRequestSearch={( text, event ) => {
              if ( event ) {
                navigate( event.url );
              } else {
                props.setParamsName( text );
                navigate( "/search" );
              }
            }}
            onRightDrawerToggle={() => props.onRightDrawerToggle()}
          />
          <div className={classes.grow} />
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { setParamsName: setParamsName }, dispatch );
}

export default connect( null, mapDispatchToProps )( withStyles( styles )( OurAppBar ) );
