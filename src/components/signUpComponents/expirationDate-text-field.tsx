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
    flexBasis: 300
  }
} );

function ExpirationDate( props: any ) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InputLabel
          htmlFor="signup-expiration-date"
          classes={{
            focused: classes.cssFocused,
          }}
        >
          Expiration Date
        </InputLabel>
        <Input
          id="signup-expiration-date"
          endAdornment={
            <InputAdornment position="end">mm/yy</InputAdornment>
          }
        />

      </FormControl>
    </div>
  );
}

export default withStyles( styles )( ExpirationDate );
