import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import purple from "@material-ui/core/colors/purple";
import TypeSelectorCheckBox from "./advancedSearchComponents/type-selector-checkbox";
import TextFieldLocation from "./advancedSearchComponents/text-field-location";
import PriceRange from "./advancedSearchComponents/price-range";
import DatePickers from "./advancedSearchComponents/date-pickers";

const styles = theme => ( {
  drawer: {
    zIndex: 1
  },
  list: {
    width: 300,
    top: 64
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
} );

type RightAdvancedSearchDrawerProps = {
  classes: any,
  open: boolean,
  onOpen: () => void,
  onClose: () => void
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function RightAdvancedSearchDrawer( { classes, open, onOpen, onClose }: RightAdvancedSearchDrawerProps ) {

  const sideList = (
    <div className={classes.list}>
      <List className = {classes.list}>
        <ListItem>
          <TypeSelectorCheckBox></TypeSelectorCheckBox>
        </ListItem>
        <ListItem>
          <TextFieldLocation></TextFieldLocation>
        </ListItem>
        <ListItem>
          <PriceRange></PriceRange>
        </ListItem>
        <ListItem>
          <DatePickers></DatePickers>
        </ListItem>
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
