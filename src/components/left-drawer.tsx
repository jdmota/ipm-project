import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { navigate, navigateLogout } from "../helpers/router";
import { logoutUser } from "../actions/userActions";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

function LeftDrawer( { classes, open, onOpen, onClose, users, logoutUser }: any ) {

  function navigateAndClose( url ) {
    onClose();
    navigate( url );
  }

  function logout() {
    onClose();
    logoutUser();
    navigateLogout();
  }

  function item( [ text, onClick ]: [ string, any ] ) {
    return (
      <ListItem button key={text} onClick={onClick}>
        <ListItemText primary={text} />
      </ListItem>
    );
  }

  const sideList = (
    <div className={classes.list}>
      <List>
        {[
          [ "Festivals", () => null ] as [ string, any ],
          [ "Concerts", () => null ] as [ string, any ],
          [ "Theathers", () => null ] as [ string, any ],
        ].map( item )}
      </List>
      <Divider />
      <List>
        {item( [ "Exchange Tickets", () => navigateAndClose( "/ticket-exchange" ) ] )}
        {
          users.loggedInUser ?
            item( [ "Logout", logout ] ) :
            [
              [ "Login", () => navigateAndClose( "/sign-in" ) ] as [ string, any ],
              [ "Create Account", () => navigateAndClose( "/sign-up" ) ] as [ string, any ],
            ].map( item )
        }
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={onClose}
      >
        {sideList}
      </SwipeableDrawer>
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    users: state.users
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { logoutUser: logoutUser }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( LeftDrawer ) );
