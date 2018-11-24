import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
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
    marginRight: 24,
  },
  searchHide: {
    "@media all and (max-width: 600px)": {
      display: "none"
    }
  },
  searchFillAll: {
    position: "fixed",
    margin: 0,
    top: 0,
    left: 0,
    zIndex: 9999,
    borderRadius: 0,
    backgroundColor: "rgb(92, 107, 192)",
    minHeight: 48,
    paddingTop: 8,
    paddingBottom: 8,
    "@media all and (max-width: 600px)": {
      minHeight: 48,
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  appBar: {
    zIndex: 20
  },
  home: {
    cursor: "pointer"
  },
  iconButton: {
    color: "white",
    transform: "scale(1, 1)",
    transition: "transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    display: "none",
    "@media all and (max-width: 600px)": {
      display: "block"
    }
  },
  icon: {
    transition: "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)"
  },
} );

type OurAppBarProps = {
  classes: any,
  onLeftDrawerToggle: () => void
  onRightDrawerToggle: () => void,
  setParamsName: any
};

const navigateHome = () => navigate( "/" );

class OurAppBar extends React.Component<OurAppBarProps, any> {

  state = {
    smallScreen: false,
    searchOpened: false
  };

  render() {
    const { smallScreen, searchOpened } = this.state;
    const { classes, setParamsName, onLeftDrawerToggle, onRightDrawerToggle } = this.props;
    const fullMode = searchOpened;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={onLeftDrawerToggle} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className={classes.home} onClick={navigateHome} role="button" aria-label="Home">
              <Typography variant="h6" color="inherit">FCTicket</Typography>
            </div>
            <SearchWithAutoComplete
              fullMode={fullMode}
              handleLeaveFullMode={() => this.setState( { searchOpened: false } )}
              className={`${classes.search} ${fullMode ? classes.searchFillAll : classes.searchHide}`}
              onRequestSearch={( text, event ) => {
                if ( event ) {
                  navigate( event.url );
                } else {
                  setParamsName( text );
                  navigate( "/search" );
                }
              }}
              onRightDrawerToggle={onRightDrawerToggle}
            />
            <div className={classes.grow} />
            <IconButton
              onClick={() => this.setState( { searchOpened: true } )}
              className={classes.iconButton}
            >
              <SearchIcon className={classes.icon} />
            </IconButton>
            <LoginButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { setParamsName: setParamsName }, dispatch );
}

export default connect( null, mapDispatchToProps )( withStyles( styles )( OurAppBar ) );
