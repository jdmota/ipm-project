import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { trade } from "../../actions/userActions";
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
      ticketToGive: {
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
    }, () => {
      if ( this.state.step === 3 ) {
        let object = {
          ticket1: this.state.desiredTicket,
          ticket2: this.state.ticketToGive
        };
        this.props.trade( object );
      }
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
        return ( <div key= {ticket.id}>
          <TicketCard event= {ticketEvent} onClick={ () => { this.setState( { desiredTicket: ticket } ); }} />
          Ticket id: {ownedTicket.ticketId} event id: {ownedTicket.eventId} <br/>
          Desired Ticket: {this.state.desiredTicket.ticketId}
        </div>
        );
      } )
    );
  }

  printGive = () => {
    return (
      this.props.users.loggedInUser.ticketList.map( ticketToGive => {
        let ticketEvent = this.props.events.find( eventsTicket => { return eventsTicket.id === ticketToGive.eventId; } );
        return (
          <div key= {ticketToGive.id}>
            <TicketCard event= {ticketEvent} onClick={ () => { this.setState( { ticketToGive: { username: this.props.users.loggedInUser.username, ticketId: ticketToGive.ticketId } } ); }} />
          Desired Ticket: {this.state.desiredTicket.ticketId}
          Ticket To Give: {this.state.ticketToGive.ticketId}
          </div>
        );
      } )
    );
  }

  printConfirm = () => {
    const { desiredTicket, ticketToGive } = this.state;
    let ticketToGetOwner = this.props.users.userList.find( user => { return user.username === desiredTicket.username; } );
    let ticketToGetInfo = ticketToGetOwner.ticketList.find( ticket => { return ticket.ticketId === desiredTicket.ticketId; } );
    let eventTicketToGet = this.props.events.find( eventsTicket => { return eventsTicket.id === ticketToGetInfo.eventId; } );

    let ticketToGiveOwner = this.props.users.loggedInUser;
    let ticketToGiveInfo = ticketToGiveOwner.ticketList.find( ticket => { return ticket.ticketId === ticketToGive.ticketId; } );
    let eventTicketToGive = this.props.events.find( eventsTicket => { return eventsTicket.id === ticketToGiveInfo.eventId; } );

    return (
      <div>
      Are you sure you want to trade this:
        <TicketCard event= {eventTicketToGet} />
      For this:
        <TicketCard event= {eventTicketToGive} />
      </div>
    );
  }

  tradeTickets = () => {
    return (
      "All steps completed - you're finished"
    );
  }

  getStepContent = step => {
    switch ( step ) {
      case 0:
        return ( this.printGet() );
      case 1:
        return ( this.printGive() );
      case 2:
        return ( this.printConfirm() );
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
              { this.tradeTickets()}
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

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { trade: trade }, dispatch );
}


export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( TicketExchange ) );
