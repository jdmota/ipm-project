import React from "react";
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import InputAdornment from "@material-ui/core/InputAdornment";
import classNames from "classnames";


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

function CustomizedInputs( props ) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className= {classNames( classes.margin, classes.textField )}>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            // root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
        Min
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          /* classes={{
            underline: classes.cssUnderline,
          }}*/
          endAdornment={
            <InputAdornment position="end">
                  €
            </InputAdornment>
          }
        />

      </FormControl>
      <FormControl className= {classNames( classes.margin, classes.textField )}>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            // root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
        Max
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          /* classes={{
            underline: classes.cssUnderline,
          }}*/
          endAdornment={
            <InputAdornment position="end">
              €
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( CustomizedInputs );
