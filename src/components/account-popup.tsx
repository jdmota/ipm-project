import React from "react";
import PropTypes from "prop-types";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ( {
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
} );

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState( state => ( { open: !state.open } ) );
  };

  handleClose = event => {
    if ( this.anchorEl.contains( event.target ) ) {
      return;
    }

    this.setState( { open: false } );
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <IconButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color="inherit"
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <AccountCircle/>
          </IconButton>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {( { TransitionProps, placement } ) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Create Account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Login</MenuItem>
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

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( MenuListComposition );
