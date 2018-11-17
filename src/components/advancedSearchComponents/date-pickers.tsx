import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InlineDatePicker } from "material-ui-pickers";
import { withStyles } from "@material-ui/core/styles";
import { setParamsFilters } from "../../actions/setParams";

const styles = theme => ( {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  },
  textField: {
    flexBasis: 40
  }
} );

function DatePicker( props:any ) {
  const { classes, params, setParamsFilters } = props;

  return (
    <div className="picker">
      <InlineDatePicker className={`${classes.margin} ${classes.textField}`}
        keyboard
        label="From"
        value={params.startDate}
        onChange={date => setParamsFilters( { startDate: date } )}
        format="dd/MM/yyyy"
        mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
      />
      <InlineDatePicker className={`${classes.margin} ${classes.textField}`}
        keyboard
        label="To"
        value={params.endDate}
        onChange={date => setParamsFilters( { endDate: date } )}
        format="dd/MM/yyyy"
        mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
      />
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

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( DatePicker ) );
