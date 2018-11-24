import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { InlineDatePicker } from "material-ui-pickers";
import EmptySeatIcon from "../icons/emptySeat";
import FilledSeatIcon from "../icons/filledSeat";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import { buy } from "../actions/userActions";
import { navigate } from "../helpers/router";

const styles = theme => ( {
  title: {
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing.unit * 2
  },
  formControl: {
    width: 300
  },
  checkboxRound: {
    width: 50,
    heigh: 50,
    borderRadius: "50%",
    border: "1 solid #ccc"
  },
  cardDiv: {
    width: 400,
    height: "auto",
    marginLeft: "15%",
    marginTop: 50
  },
  tooltipPlacementBottom: {
    transformOrigin: "center top",
    margin: "0 0",
    [ theme.breakpoints.up( "sm" ) ]: {
      margin: "0 0"
    }
  }
} );

const _1to7 = [ 1, 2, 3, 4, 5, 6, 7 ];

const places = new Map( [
  [ "E", _1to7 ],
  [ "D", _1to7 ],
  [ "C", _1to7 ],
  [ "B", _1to7 ],
  [ "A", _1to7 ],
] );

const icon = <div style={{ color: "#808080" }}>
  <EmptySeatIcon />
</div>;

const checkedIcon = <div style={{ color: "#43A047" }}>
  <FilledSeatIcon />
</div>;

const columns = (
  <div key="ui-columns" style={{ marginLeft: "30%" }}>
    <Typography color="inherit">
      <b style={{ marginRight: 26 }}>1</b>
      <b style={{ marginRight: 26 }}>2</b>
      <b style={{ marginRight: 26 }}>3</b>
      <b style={{ marginRight: 26 }}>4</b>
      <b style={{ marginRight: 26 }}>5</b>
      <b style={{ marginRight: 26 }}>6</b>
      <b style={{ marginRight: 26 }}>7</b>
    </Typography>
  </div>
);

const rows = (
  <div key="ui-rows" style={{ float: "left", marginLeft: "15%", marginTop: 35 }}>
    <Typography color="inherit">
      <b style={{ marginBottom: 28, display: "block" }}>E</b>
      <b style={{ marginBottom: 28, display: "block" }}>D</b>
      <b style={{ marginBottom: 28, display: "block" }}>C</b>
      <b style={{ marginBottom: 28, display: "block" }}>B</b>
      <b style={{ marginBottom: 28, display: "block" }}>A</b>
    </Typography>
  </div>
);

class PaymentPage extends React.Component<any, any> {

  constructor( props ) {
    super( props );
    const loggedInUser = this.props.users.loggedInUser || {};
    this.state = {
      numberOfTickets: 0,
      selectedDate: new Date(),
      seats: {},
      fullName: loggedInUser.fullName,
      email: loggedInUser.email,
      creditCardNumber: loggedInUser.creditCardNumber,
      dateCreditCard: loggedInUser.dateCreditCard,
      cvv: loggedInUser.cvv,
      errorMsg: "",
      openDialog: false,
      openFinalDialog: false
    };
  }

  toggleSeat( place ) {
    this.setState( state => {
      if ( state.seats[ place ] ) {
        return {
          numberOfTickets: state.numberOfTickets - 1,
          seats: {
            ...state.seats,
            [ place ]: false
          }
        };
      }
      return {
        numberOfTickets: state.numberOfTickets + 1,
        seats: {
          ...state.seats,
          [ place ]: true
        }
      };
    } );
  }

  buy = () => {
    const { numberOfTickets, email, fullName, creditCardNumber, dateCreditCard, cvv } = this.state;
    if ( !numberOfTickets ) {
      this.setState( { errorMsg: "Select the seats you want." } );
      return;
    }
    if ( !email || !fullName || !creditCardNumber || !dateCreditCard || !cvv ) {
      this.setState( { errorMsg: "Please fill the required fields." } );
      return;
    }
    if ( !/@/.test( email ) ) {
      this.setState( { errorMsg: "Please provide a valid email address." } );
      return;
    }
    this.setState( { errorMsg: "", openDialog: true } );
  };

  cancelBuy = () => {
    this.handleClose();
  };

  confirmBuy = () => {
    const tickets: any[] = [];
    const seats: any[] = Object.keys( this.state.seats ).filter( seat => this.state.seats[ seat ] );
    for ( let i = 0; i < this.state.numberOfTickets; i++ ) {
      tickets.push( {
        eventId: this.props.event.id,
        date: this.state.selectedDate,
        seat: seats[ i ]
      } );
    }
    this.props.buy( tickets );
    this.setState( { openDialog: false, openFinalDialog: true } );
  };

  handleClose = () => {
    this.setState( { openDialog: false } );
  };

  exit = () => {
    navigate( this.props.event.url );
  };

  render() {
    const { classes, event } = this.props;
    const checkboxes: any[] = [];

    for ( const [ row, columns ] of places ) {
      checkboxes.push(
        <div key={`row-${row}`} style={{ paddingLeft: 19 }}>
          {columns.map( column => (
            <Tooltip
              key={`${row}.${column}`}
              title={`${event.priceUnit}`}
              classes={{ tooltipPlacementBottom: classes.tooltipPlacementBottom }}
            >
              <FormControlLabel
                style={{ marginRight: 0 }}
                control={
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    onChange={() => this.toggleSeat( `${row}.${column}` )}
                  />
                }
                label=""
              />
            </Tooltip>
          ) )}
        </div>
      );
    }

    return (
      <div>
        <div className={classes.title}>
          <Typography variant="h4" color="inherit">
            <b>{( event && event.title ) || "Event Title"}</b>
          </Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div className={classes.cardDiv}>
            <Card>
              <CardContent>
                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InlineDatePicker
                      keyboard
                      label="Date to Attend"
                      value={this.state.selectedDate}
                      onChange={date => this.setState( { selectedDate: date } )}
                      format="dd/MM/yyyy"
                      mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
                    />
                  </FormControl>
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="fullname">Full name *</InputLabel>
                    <Input
                      id="fullname"
                      required
                      value={this.state.fullName || ""}
                      onChange={e => this.setState( { fullName: e.target.value } )}
                    />
                  </FormControl>
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="email">Email *</InputLabel>
                    <Input
                      id="email"
                      required
                      value={this.state.email || ""}
                      onChange={e => this.setState( { email: e.target.value } )}
                    />
                  </FormControl>
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="credit-card">Credit Card *</InputLabel>
                    <Input
                      id="credit-card"
                      type="number"
                      required
                      value={this.state.creditCardNumber || ""}
                      onChange={e => this.setState( { creditCardNumber: parseInt( e.target.value, 10 ) || undefined } )}
                    />
                  </FormControl>
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InlineDatePicker
                      keyboard
                      clearable
                      label="Expiration Date (MM/yyyy) *"
                      value={this.state.dateCreditCard || null}
                      onChange={dateCreditCard => this.setState( { dateCreditCard } )}
                      format="MM/yyyy"
                    />
                  </FormControl>
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="cvv">CVV *</InputLabel>
                    <Input
                      id="cvv"
                      type="number"
                      required
                      value={this.state.cvv || ""}
                      onChange={e => this.setState( { cvv: parseInt( e.target.value, 10 ) || undefined } )}
                    />
                  </FormControl>
                </div>
                <div style={{ padding: 8 }}>
                  <Typography color="inherit" variant="caption">* Required Fields</Typography>
                </div>
                <div style={{ width: "fit-content", margin: "auto", padding: 8 }}>
                  <Typography color="error">{this.state.errorMsg}</Typography>
                </div>
              </CardContent>
            </Card>
          </div>

          <div style={{ float: "right", marginTop: 45, marginLeft: "10%", height: "100%" }}>
            <div style={{ marginLeft: "54%", marginBottom: 20 }}>
              <Typography color="inherit" variant="h5">
                <b>Venue</b>
              </Typography>
            </div>

            {rows}
            {columns}

            <div key="ui-checkboxes"
              style={{
                height: "100%",
                minWidth: 263,
                marginLeft: "20%",
                borderRadius: 25,
                borderColor: "#000000",
                borderWidth: 2,
                borderStyle: "solid"
              }}
            >
              {checkboxes}
              <div
                style={{
                  textAlign: "center",
                  borderColor: "#000000",
                  borderWidth: 2,
                  borderStyle: "solid",
                  width: 100,
                  height: 20,
                  marginLeft: "30%",
                  borderBottom: "none",
                  paddingTop: 2
                }}
              >
                <Typography color="inherit" variant="caption">
                  <b>Stage</b>
                </Typography>
              </div>
            </div>

            <div style={{ marginLeft: "25%", marginTop: 15 }}>
              <Typography variant="h6" color="primary" paragraph={false}>
                <span><b>Total Price: </b></span>
                <span><b>${this.props.event.priceUnit * this.state.numberOfTickets} </b></span>
                <span><b>€</b></span>
              </Typography>
              <div style={{ marginTop: 20 }}>
                <Button variant="contained" size="large" color="primary" onClick={this.buy}>Buy!</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Dialog
            open={this.state.openDialog}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to confirm this purchase?"}
            </DialogTitle>
            <DialogActions style={{ display: "initial", margin: "auto" }}>
              <Button onClick={this.cancelBuy} color="primary">
                No
              </Button>
              <Button onClick={this.confirmBuy} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.openFinalDialog}
            onClose={this.exit}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Purchase done!"}
            </DialogTitle>
            <DialogActions style={{ display: "initial", margin: "auto" }}>
              <Button onClick={this.exit} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { users: state.users };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { buy: buy }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( PaymentPage ) );
