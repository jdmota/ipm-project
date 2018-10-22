import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

function LeftDrawer( { classes, open, onOpen, onClose } ) {
  const sideList = (
    <div className={classes.list}>
      <List>
        {[ "Festivals", "Concerts", "Theather plays" ].map( ( text, index ) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ) )}
      </List>
      <Divider />
      <List>
        {[ "Exchange Tickets", "Account" ].map( ( text, index ) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ) )}
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

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles( styles )( LeftDrawer );
