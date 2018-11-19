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

function TypeSelector( props: any ) {
  const { classes, value, onChange } = props;

  return (
    <FormControl className={`${classes.margin} ${classes.textField}`}>
      <InputLabel htmlFor="select-multiple-checkbox">Type</InputLabel>
      <Select
        multiple={true}
        value={value}
        onChange={event => onChange( event.target.value )}
        input={<Input id="select-multiple-checkbox" />}
        renderValue={selected => ( Array.isArray( selected ) ? selected.join( ", " ) : selected )}
        MenuProps={MenuProps}
      >
        {names.map( name => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={value.indexOf( name ) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ) )}
      </Select>
    </FormControl>
  );
}

export default withStyles( styles )( TypeSelector );
