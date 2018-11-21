import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ( {
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
  textField: {
    flexBasis: 100
  }
} );

function PriceRange( props: any ) {
  const { classes, min, max, onMinChange, onMaxChange } = props;

  return (
    <div className={classes.container}>
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InputLabel
          htmlFor="min-price"
          classes={{
            focused: classes.cssFocused
          }}
        >Min</InputLabel>
        <Input
          id="min-price"
          type="number"
          inputProps={{ min: 0 }}
          value={min}
          onChange={event => onMinChange( event.target.value )}
          endAdornment={<InputAdornment position="end">€</InputAdornment>}
        />
      </FormControl>
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InputLabel
          htmlFor="max-price"
          classes={{
            focused: classes.cssFocused,
          }}
        >Max</InputLabel>
        <Input
          id="max-price"
          type="number"
          inputProps={{ min: 0 }}
          value={max}
          onChange={event => onMaxChange( event.target.value )}
          endAdornment={<InputAdornment position="end">€</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}

export default withStyles( styles )( PriceRange );
