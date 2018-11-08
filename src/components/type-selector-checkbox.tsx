import React from "react";
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
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
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

class MultipleSelect extends React.Component {
  state = {
    name: []
  };

  handleChange = event => {
    this.setState( { name: event.target.value } );
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Type</InputLabel>
        <Select
          multiple = {true}
          value={this.state.name}
          onChange={this.handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join( ", " )}
          MenuProps={MenuProps}
        >
          {names.map( name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={this.state.name.indexOf( name ) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ) )}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles( styles )( MultipleSelect );
