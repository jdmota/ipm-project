import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ( {
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
  textField: {
    flexBasis: 240
  },
  margin: {
    margin: theme.spacing.unit,
  },
} );

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

const names = [
  "Festival",
  "Concert",
  "Theater"
];

type State = {
  names: string[]
};

class MultipleSelect extends React.Component<any, State> {
  state = {
    names: [],
  };

  handleChange = event => {
    this.setState( { names: event.target.value } );
  };

  render() {
    const { classes } = this.props;

    return (

      <FormControl className= {classNames( classes.margin, classes.textField )}>
        <InputLabel htmlFor="select-multiple-checkbox">Type</InputLabel>
        <Select
          multiple={true}
          value={this.state.names}
          onChange={this.handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => ( Array.isArray( selected ) ? selected.join( ", " ) : selected )}
          MenuProps={MenuProps}
        >
          {names.map( name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={this.state.names.indexOf( name ) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ) )}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles( styles, { withTheme: true } )( MultipleSelect );
