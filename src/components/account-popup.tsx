import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import { navigate } from "../helpers/router";
import { logoutUser } from "../actions/userActions";

const styles = {
  root: {
    display: "flex",
  },
  popper: {
    zIndex: 20
  },
  MenuList: {
    overflow: "visible",
  },
};

const noop = () => {};

class MenuListComposition extends React.Component<any, any> {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState( state => ( { open: !state.open } ) );
  };

  handleClose = ( event, cb = noop ) => {
    if ( this.anchorEl && this.anchorEl.contains( event.target ) ) {
      return;
    }
    this.setState( { open: false }, cb );
  };

  createAccount = event => {
    this.handleClose( event );
    navigate( "/sign-up" );
  };

  login = event => {
    this.handleClose( event );
    navigate( "/sign-in" );
  };

  logout = event => {
    this.handleClose( event, () => {
      setTimeout( () => {
        this.props.logoutUser();
        navigate( "/" );
      }, 100 );
    } );
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const { loggedInUser } = this.props.users;

    const list = loggedInUser ?
      <MenuItem key="logout" onClick={this.logout}>Logout</MenuItem> :
      [
        <MenuItem key="signin" onClick={this.createAccount}>Create Account</MenuItem>,
        <MenuItem key="login" onClick={this.login}>Login</MenuItem>
      ];

    return (
      <div className={classes.root}>
        <div>
          <IconButton
            buttonRef={node => { this.anchorEl = node; }}
            color="inherit"
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <AccountCircle />
          </IconButton>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            className={classes.popper}
            placement="bottom-end"
            transition
            modifiers={{
              preventOverflow: {
                enabled: true,
                boundariesElement: "viewport",
              },
            }}
          >
            {( { TransitionProps } ) => (
              <Grow {...TransitionProps}>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {list}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    users: state.users
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { logoutUser: logoutUser }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MenuListComposition ) );
