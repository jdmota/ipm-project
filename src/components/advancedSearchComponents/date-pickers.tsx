import { InlineDatePicker } from "material-ui-pickers";
import React, { Fragment, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

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

class InlineDatePickerDemo extends PureComponent {
  state = {
    selectedDate1: new Date(),
    selectedDate2: new Date()
  }

  handleDateChange1 = date => {
    this.setState( { selectedDate1: date } );
    this.props.onBeginDateChange( date );
  }

  handleDateChange2 = date => {
    this.setState( { selectedDate2: date } );
    this.props.onEndDateChange( date );
  }

  render() {
    const { selectedDate1, selectedDate2 } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        <div className="picker">
          <InlineDatePicker className= {classNames( classes.margin, classes.textField )}
            keyboard
            label="From"
            value={selectedDate1}
            onChange={this.handleDateChange1}
            format="dd/MM/yyyy"
            mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
          />
          <InlineDatePicker className= {classNames( classes.margin, classes.textField )}
            keyboard
            label="To"
            value={selectedDate2}
            onChange={this.handleDateChange2}
            format="dd/MM/yyyy"
            mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
          />
        </div>
      </Fragment>
    );
  }
}

export default withStyles( styles )( InlineDatePickerDemo );
