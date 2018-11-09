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
    selectedDate: "2018-01-01T00:00:00.000Z",
  }

  handleDateChange = date => {
    this.setState( { selectedDate: date } );
  }

  render() {
    const { selectedDate } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        <div className="picker">
          <InlineDatePicker className= {classNames( classes.margin, classes.textField )}
            keyboard
            label="From"
            value={selectedDate}
            onChange={this.handleDateChange}
            format="dd/MM/yyyy"
            mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
          />
        </div>
      </Fragment>
    );
  }
}

export default withStyles( styles )( InlineDatePickerDemo );
