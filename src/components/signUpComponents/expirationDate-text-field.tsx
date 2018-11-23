import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { InlineDatePicker } from "material-ui-pickers";

const styles = theme => ( {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
  },
} );

class ExpirationDate extends React.Component<any, any> {

  state = {
    date: null
  };

  handleDateChange = date => {
    this.setState( { date } );
    this.props.onChange( date );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={`${classes.container} ${classes.margin}`}>
        <InlineDatePicker
          keyboard
          clearable
          label="Expiration Date (MM/yyyy)"
          value={this.state.date}
          onChange={this.handleDateChange}
          format="MM/yyyy"
        />
      </div>
    );
  }

}

export default withStyles( styles )( ExpirationDate );
