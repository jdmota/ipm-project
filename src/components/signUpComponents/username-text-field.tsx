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

function UsernameField( props: any ) {
  const { classes } = props;

  return (
    <FormControl className={`${classes.margin} ${classes.textField}`}>
      <InputLabel
        htmlFor="custom-css-standard-input"
        classes={{
          focused: classes.cssFocused,
        }}
      >
        Username *
      </InputLabel>
      <Input
        id="custom-css-standard-input"
      />
    </FormControl>
  );
}

export default withStyles( styles )( UsernameField );
