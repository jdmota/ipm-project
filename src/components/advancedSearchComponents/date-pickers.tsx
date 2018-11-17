import React, { Fragment, PureComponent } from "react";
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

class InlineDatePickerDemo extends PureComponent<any, any> {

  handleDateChange1 = date => {
    this.props.setParamsFilters( { startDate: date } );
  }

  handleDateChange2 = date => {
    this.props.setParamsFilters( { endDate: date } );
  }

  render() {
    const { classes, params } = this.props;

    return (
      <Fragment>
        <div className="picker">
          <InlineDatePicker className={`${classes.margin} ${classes.textField}`}
            keyboard
            label="From"
            value={params.startDate}
            onChange={this.handleDateChange1}
            format="dd/MM/yyyy"
            mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
          />
          <InlineDatePicker className={`${classes.margin} ${classes.textField}`}
            keyboard
            label="To"
            value={params.endDate}
            onChange={this.handleDateChange2}
            format="dd/MM/yyyy"
            mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
          />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { setParamsFilters: setParamsFilters }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( InlineDatePickerDemo ) );
