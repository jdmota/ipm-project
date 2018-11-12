import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Search from "../search/search-without-auto";

const styles = theme => ( {
  ticketExchange: {

  },
  title: {
    textAlign: "center"
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
} );

const steps = [
  "Ticket to get",
  "Ticket to give",
  "Confirmation"
];

function getStepContent( step ) {
  switch ( step ) {
    case 0:
      return "Select a ticket to get";
    case 1:
      return "Select a ticket to give";
    case 2:
      return "Now you just need to confirm your exchange";
    default:
      return "Unknown step";
  }
}

class TicketExchange extends React.Component<any, any> {

  constructor( props ) {
    super( props );
    this.state = {
      step: 0
    };
  }

  next = () => {
    this.setState( state => {
      return {
        step: state.step + 1
      };
    } );
  }

  back = () => {
    this.setState( state => {
      return {
        step: state.step === 0 ? 0 : state.step + 1
      };
    } );
  }

  reset = () => {
    this.setState( {
      step: 0
    } );
  };

  render() {

    const { classes } = this.props;
    const activeStep = this.state.step;

    return <div>
      <div className={classes.title}>
        <Typography variant="h4" color="inherit">
          Ticket Exchange
        </Typography>
      </div>
      <Stepper activeStep={activeStep}>
        {steps.map( ( label, index ) => {
          const props = {};
          const labelProps = {};
          return (
            <Step key={label} {...props}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        } )}
      </Stepper>
      <Search
        onRequestSearch={( ...args ) => console.log( args )}
        onRightDrawerToggle={this.props.onRightDrawerToggle}
      />
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              {"All steps completed - you're finished"}
            </Typography>
            <Button onClick={this.reset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent( activeStep )}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={this.back}
                className={classes.button}
              >Back</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.next}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>;
  }

}

export default withStyles( styles )( TicketExchange );
