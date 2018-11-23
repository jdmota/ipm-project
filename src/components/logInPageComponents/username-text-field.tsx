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
  const { classes, onChange } = props;

  function handleKeyUp( e: any ) {
    if ( e.charCode === 13 || e.key === "Enter" ) {
      props.onEnter();
    }
  }

  return (
    <div className={classes.root}>
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InputLabel htmlFor="login-username">Username</InputLabel>
        <Input
          id="login-username"
          type="text"
          onChange={event => onChange( event.target.value )}
          onKeyUp={handleKeyUp}
        />
      </FormControl>
    </div>
  );
}

export default withStyles( styles )( UsernameField );
