import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import purple from "@material-ui/core/colors/purple";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import { setParamsFilters } from "../actions/setParams";
import { navigate } from "../helpers/router";
import TypeSelectorCheckBox from "./advancedSearchComponents/type-selector-checkbox";
import TextFieldLocation from "./advancedSearchComponents/text-field-location";
import PriceRange from "./advancedSearchComponents/price-range";
import DatePickers from "./advancedSearchComponents/date-pickers";

const styles = theme => ( {
  drawer: {
    zIndex: 99
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
  onClose: () => void,
  setParamsFilters: any
};

class RightAdvancedSearchDrawer extends React.Component<RightAdvancedSearchDrawerProps, {}> {

  renderSideList() {
    const { classes, setParamsFilters } = this.props;
    return (
      <div>
        <List className={classes.list}>
          <IconButton onClick={this.props.onClose} className={classes.IconButton}>
            <ChevronRightIcon />
          </IconButton>
          <Divider />
          <ListItem>
            <TypeSelectorCheckBox onValueChange={type => setParamsFilters( { type } )}/>
          </ListItem>
          <ListItem>
            <TextFieldLocation onInputChange={location => setParamsFilters( { location } )}/>
          </ListItem>
          <ListItem>
            <PriceRange />
          </ListItem>
          <ListItem>
            <DatePickers />
          </ListItem>
          <Button variant="contained"
            size="medium"
            color="primary"
            className={classes.buttonSearch}
            onClick={() => {
              this.props.onClose();
              navigate( "/search" );
            }}
          >
            Search
          </Button>
        </List>
      </div>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <SwipeableDrawer
          className={classes.drawer}
          open={this.props.open}
          onOpen={this.props.onOpen}
          onClose={this.props.onClose}
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
          {this.renderSideList()}
        </SwipeableDrawer>
      </div>
    );
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { setParamsFilters: setParamsFilters }, dispatch );
}

export default connect( null, mapDispatchToProps )( withStyles( styles )( RightAdvancedSearchDrawer ) );
