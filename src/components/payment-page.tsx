import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const styles = theme => ( {
  title: {
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing.unit * 2
  },
  formControl: {
    width: 300
  }
} );

class PaymentPage extends React.Component<any, any> {

  render() {
    const { classes, event } = this.props;

    return <div>

      <div className={classes.title}>
        <Typography variant="h4" color="inherit">
          {( event && event.title ) || "Event Title"}
        </Typography>
      </div>

      <div className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="number-ticket">Number of tickets</InputLabel>
          <Input value={1} inputProps={{ min: 1 }} required type="number" id="number-ticket" />
        </FormControl>
      </div>

      <div className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" required />
        </FormControl>
      </div>

      <div className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" required />
        </FormControl>
      </div>

      <div className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="credit-card">Credit Card</InputLabel>
          <Input type="number" required id="credit-card" />
        </FormControl>
      </div>

      <div className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="expiration-date">Expiration date</InputLabel>
          <Input required id="expiration-date" />
        </FormControl>
      </div>

      <div className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="cvv">CVV</InputLabel>
          <Input type="number" required id="cvv" />
        </FormControl>
      </div>

      <div className={classes.margin}>
        <Button variant="contained" size="small" color="primary">Buy!</Button>
      </div>

    </div>;
  }
}

export default withStyles( styles )( PaymentPage );
