import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { InlineDatePicker } from "material-ui-pickers";

const styles = theme => ( {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 240
  }
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
      <FormControl className={`${classes.margin} ${classes.textField}`}>
        <InlineDatePicker
          keyboard
          clearable
          label="Expiration Date (MM/yyyy)"
          value={this.state.date}
          onChange={this.handleDateChange}
          format="MM/yyyy"
        />
      </FormControl>
    );
  }

}

export default withStyles( styles )( ExpirationDate );
