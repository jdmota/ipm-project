import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import TicketCard from "../ticket-card";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Search from "../search/search-without-auto";
import ticketToGet from "./ticket-to-get";

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
  appBar: {
    top: "auto",
    bottom: 0,
    zIndex: 20
  },
  toolbar: {
    margin: "auto"
  }
} );

const steps = [
  "Ticket to get",
  "Ticket to give",
  "Confirmation"
];

class TicketExchange extends React.Component<any, any> {

  constructor( props ) {
    super( props );
    this.state = {
      step: 0,
      desiredTicket: {
        username: "",
        ticketId: ""
      },
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
        step: state.step === 0 ? 0 : state.step - 1
      };
    } );
  }

  reset = () => {
    this.setState( {
      step: 0
    } );
  };

  printGet = () => {
    return (
      this.props.tickets.map( ticket => {
        let user = this.props.users.userList.find( user => { return ticket.username === user.username; } );
        let ownedTicket = user.ticketList.find( ownedTicket => { return ticket.id === ownedTicket.id; } );
        let ticketEvent = this.props.events.find( event => { return event.id === ownedTicket.eventId; } );
        return ( <>
          <TicketCard key={ ticket } event= {ticketEvent} onClick={ () => { this.setState( { desiredTicket: ticket } ); }} />
          Ticket id: {ownedTicket.ticketId} event id: {ownedTicket.eventId} <br/>
          Desired Ticket: {this.state.desiredTicket.ticketId}
          </>
        );
      } )
    );
  }


  getStepContent = step => {
    switch ( step ) {
      case 0:
        return ( this.printGet() );
      case 1:
        return "Select a ticket to give";
      case 2:
        return "Now you just need to confirm your exchange";
      default:
        return "Unknown step";
    }
  }

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
        {
          activeStep === steps.length ?
            <Typography className={classes.instructions}>
              {"All steps completed - you're finished"}
            </Typography> :
            this.getStepContent( activeStep )
        }
      </div>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {activeStep === steps.length ? (
            <Button onClick={this.reset} className={classes.button}>
              Reset
            </Button>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>;
  }

}


function mapStateToProps( state ) {
  return {
    tickets: state.tickets,
    users: state.users,
    events: state.events
  };
}


export default connect( mapStateToProps )( withStyles( styles )( TicketExchange ) );
