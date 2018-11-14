import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import purple from "@material-ui/core/colors/purple";
import TypeSelectorCheckBox from "./advancedSearchComponents/type-selector-checkbox";
import TextFieldLocation from "./advancedSearchComponents/location-text-field";
import PriceRange from "./advancedSearchComponents/price-range";
import DatePickers from "./advancedSearchComponents/date-pickers";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";

const styles = theme => ( {
  drawer: {
    zIndex: 1
  },
  list: {
    width: 280
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
  buttonSearch: {
    marginTop: 20,
    marginLeft: 30
  },
  IconButton: {
    marginLeft: 15
  }
} );

type RightAdvancedSearchDrawerProps = {
  classes: any,
  open: boolean,
  onOpen: () => void,
  onClose: () => void
};

function RightAdvancedSearchDrawer( { classes, open, onOpen, onClose }: RightAdvancedSearchDrawerProps ) {

  const sideList = (
    <div>
      <List className={classes.list}>
        <IconButton onClick={onClose} className = {classes.IconButton}>
          <ChevronRightIcon />
        </IconButton>
        <Divider />
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
        <Button variant="contained" size="medium" color="primary" className={classes.buttonSearch} >
            Search
        </Button>
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
