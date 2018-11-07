import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import purple from "@material-ui/core/colors/purple";
import Input from "@material-ui/core/Input";

const styles = theme => ( {
  drawer: {
    top: 64
  },
  list: {
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[ 500 ],
    },
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[ 500 ],
    },
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: purple[ 500 ],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create( [ "border-color", "box-shadow" ] ),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join( "," ),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
} );

type RightAdvancedSearchDrawerProps = {
  classes: any,
  open: boolean,
  onOpen: () => void,
  onClose: () => void
};

function RightAdvancedSearchDrawer( { classes, open, onOpen, onClose }: RightAdvancedSearchDrawerProps ) {
  const sideList = (
    <div className={classes.list}>
      <List>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="custom-css-standard-input"
          >
          Custom CSS888
          </InputLabel>
          <Input
            id="custom-css-standard-input"
          />
        </FormControl>
      </List>
      <List>
        {[ "OLAAAAAAAAAAA Tickets", "Account" ].map( ( text, index ) => (
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
        className={classes.drawer}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        anchor={"right"}
        ModalProps={{
          disableEnforceFocus: true,
          BackdropProps: {
            style: {
              top: 64
            },
            invisible: true
          }
        }}
        classes={{
          paper: classes.drawer
        }}
      >
        {sideList}
      </SwipeableDrawer>
    </div>
  );
}

export default withStyles( styles )( RightAdvancedSearchDrawer );
