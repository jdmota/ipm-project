import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";

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
    flexBasis: 240
  }
} );

function CVVField( props: any ) {
  const { classes, onChange } = props;

  return (
    <FormControl className={`${classes.margin} ${classes.textField}`}>
      <InputLabel
        htmlFor="signup-cvv"
        classes={{
          focused: classes.cssFocused,
        }}
      >
        CVV
      </InputLabel>
      <Input
        id="signup-cvv"
        type="number"
        onChange={event => onChange( parseInt( event.target.value, 10 ) || undefined )}
      />
    </FormControl>
  );
}

export default withStyles( styles )( CVVField );
