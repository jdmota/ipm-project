import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { setParamsFilters } from "../../actions/setParams";
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

function LocationField( props: any ) {
  const { classes, params, setParamsFilters } = props;

  return (
    <FormControl className={`${classes.margin} ${classes.textField}`}>
      <InputLabel
        htmlFor="location"
        classes={{
          focused: classes.cssFocused,
        }}
      >Location</InputLabel>
      <Input
        id="location"
        value={params.location}
        onChange={event => setParamsFilters( { location: event.target.value } )}
      />
    </FormControl>
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

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( LocationField ) );
