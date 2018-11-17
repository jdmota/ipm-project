import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
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
    flexBasis: 240
  }
} );

function CustomizedInputs( props ) {
  const { classes, onInputChange } = props;

  return (
    <FormControl className={classNames( classes.margin, classes.textField )} >
      <InputLabel
        htmlFor="custom-css-standard-input"
        classes={{
          // root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
      >
        Location
      </InputLabel>
      <Input
        id="custom-css-standard-input"
        /* classes={{
            underline: classes.cssUnderline,
          }}*/
        onChange = { event => onInputChange( event.target.value ) }
      />
    </FormControl>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( CustomizedInputs );
