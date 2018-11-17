import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { setParamsFilters } from "../../actions/setParams";
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

function CustomizedInputs( props: any ) {
  const { classes, setParamsFilters } = props;

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
          onChange={event => setParamsFilters( { minPrice: event.target.value } )}
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
          onChange={event => setParamsFilters( { maxPrice: event.target.value } )}
          endAdornment={<InputAdornment position="end">€</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { setParamsFilters: setParamsFilters }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( CustomizedInputs ) );
