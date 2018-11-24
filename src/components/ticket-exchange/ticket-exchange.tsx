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
  },
  margin: {
    margin: 30
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
      text: "",
      step: 0,
      desiredTicket: null,
      ticketToGive: null,
    };
  }

  next = () => {
    this.setState( state => {
      return {
        text: "",
        step: state.step + 1
      };
    }, () => {
      if ( this.state.step === 3 ) {
        this.props.trade( {
          ticket1: this.state.desiredTicket,
          ticket2: this.state.ticketToGive
        } );
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
      step: 0,
      desiredTicket: null,
      ticketToGive: null,
    } );
  };

  printGet = () => {
    const owner = this.props.users.loggedInUser.username;

    return (
      this.props.tickets.map( ticket => {
        if ( ticket.owner === owner ) {
          return null;
        }

        const ticketEvent = this.props.events.find( event => event.id === ticket.eventId );
        if ( !ticketEvent.title.toUpperCase().includes( this.state.text.toUpperCase() ) ) {
          return null;
        }

        return (
          <div key={ticket.ticketId}>
            <TicketCard
              event={ticketEvent}
              ticket={ticket}
              selected={this.state.desiredTicket === ticket}
              onClick={() => this.setState( { desiredTicket: ticket } )}
            />
          </div>
        );
      } ).filter( Boolean )
    );
  }

  printGive = () => {
    const owner = this.props.users.loggedInUser.username;

    return (
      this.props.tickets.map( ticket => {

        if ( ticket.owner !== owner ) {
          return null;
        }

        const ticketEvent = this.props.events.find( event => event.id === ticket.eventId );
        if ( !ticketEvent.title.toUpperCase().includes( this.state.text.toUpperCase() ) ) {
          return null;
        }

        return (
          <div key={ticket.ticketId}>
            <TicketCard
              event={ticketEvent}
              ticket={ticket}
              selected={this.state.ticketToGive === ticket}
              onClick={() => this.setState( { ticketToGive: ticket } )}
            />
          </div>
        );
      } ).filter( Boolean )
    );
  }

  printConfirm = () => {
    const { desiredTicket, ticketToGive } = this.state;

    const eventTicketToGive = this.props.events.find( eventsTicket => eventsTicket.id === ticketToGive.eventId );
    const eventTicketToGet = this.props.events.find( eventsTicket => eventsTicket.id === desiredTicket.eventId );

    return (
      <div>
        <Typography>Are you sure you want to trade this ticket:</Typography>
        <TicketCard event={eventTicketToGive} ticket={ticketToGive} />
        <Typography>For this ticket:</Typography>
        <TicketCard event={eventTicketToGet} ticket={desiredTicket} />
      </div>
    );
  }

  finished = () => {
    return <Typography>All steps completed - trade completed!</Typography>;
  }

  printStep = list => {
    return list.length ? list : <Typography>No results found for query: {this.state.text}</Typography>;
  }

  getStepContent = step => {
    switch ( step ) {
      case 0:
        return this.printStep( this.printGet() );
      case 1:
        return this.printStep( this.printGive() );
      case 2:
        return this.printConfirm();
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
        {steps.map( label => {
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
        onRequestSearch={ text => { this.setState( { text } ); } }
        // onRightDrawerToggle={this.props.onRightDrawerToggle}
      />
      <div className={classes.margin}>
        {
          activeStep === steps.length ?
            this.finished() :
            this.getStepContent( activeStep )
        }
      </div>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {activeStep === steps.length ? (
            <Button onClick={this.reset} className={classes.button}>
              Make new trade
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
                disabled={!this.state.desiredTicket || ( activeStep === 1 && !this.state.ticketToGive )}
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
