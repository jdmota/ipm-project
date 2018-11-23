import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ( {
  root: {
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

function UsernameField( props: any ) {
  const { classes, onInputChange } = props;

  return (
    <div className={classes.root}>
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InputLabel htmlFor="login-username">Username</InputLabel>
        <Input
          id="login-username"
          type="text"
          onChange={event => onInputChange( event.target.value )}
        />
      </FormControl>
    </div>
  );
}

export default withStyles( styles )( UsernameField );
