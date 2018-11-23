import React from "react";
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
import InputAdornment from "@material-ui/core/InputAdornment";
import { InlineDatePicker } from "material-ui-pickers";
import EmptySeatIcon from "../icons/emptySeat";
import FilledSeatIcon from "../icons/filledSeat";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";

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
  <div key="ui-rows" style={{ float: "left", marginLeft: "15%", marginTop: 18 }}>
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
  state = {
    numberOfTickets: 0,
    selectedDate: new Date(),
    fullName: "",
    email: "",
    creditCardNumber: "",
    dateCreditCard: "",
    cvv: "",
    openDialog: false
  };

  handleClickOpen = () => {
    this.setState( { openDialog: true } );
  };

  handleClose = () => {
    this.setState( { openDialog: false } );
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
              title="50.00 €"
              classes={{ tooltipPlacementBottom: classes.tooltipPlacementBottom }}
            >
              <FormControlLabel
                style={{ marginRight: 0 }}
                control={
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    value="checkedH"
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
                  <div style={{ float: "left", width: 130 }}>
                    <FormControl>
                      <InputLabel htmlFor="number-ticket">Number of tickets</InputLabel>
                      <Input
                        type="number"
                        id="number-ticket"
                        required
                        inputProps={{ min: 0 }}
                        value={this.state.numberOfTickets}
                        onChange={e => this.setState( { numberOfTickets: e.target.value } )}
                      />
                    </FormControl>
                  </div>

                  <div style={{ float: "right", width: 140, marginRight: 20 }}>
                    <InlineDatePicker
                      keyboard
                      label="Date to Attend"
                      value={this.state.selectedDate}
                      onChange={date => this.setState( { selectedDate: date } )}
                      format="dd/MM/yyyy"
                      mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
                    />
                  </div>
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="fullname">Full name</InputLabel>
                    <Input
                      id="fullname"
                      required
                      value={this.state.fullName}
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
                      value={this.state.email}
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
                      value={this.state.creditCardNumber}
                      onChange={e => this.setState( { creditCardNumber: e.target.value } )}
                    />
                  </FormControl>
                </div>

                <div className={classes.margin}>
                  <InlineDatePicker
                    keyboard
                    clearable
                    label="Expiration Date (MM/yyyy)"
                    value={this.state.dateCreditCard}
                    onChange={dateCreditCard => this.setState( { dateCreditCard } )}
                    format="MM/yyyy"
                  />
                </div>

                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="cvv">CVV *</InputLabel>
                    <Input
                      id="cvv"
                      type="number"
                      required
                      onChange={cvv => this.setState( { cvv } )}
                    />
                  </FormControl>
                </div>
                <div style={{ paddingLeft: 15 }}>
                  <Typography color="inherit" variant="caption">* Required Fields</Typography>
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
                <span><b>00.00 </b></span>
                <span><b>€</b></span>
              </Typography>
              <div style={{ marginTop: 20 }}>
                <Button variant="contained" size="large" color="primary" onClick={this.handleClickOpen}>Buy!</Button>
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
              <Button onClick={this.handleClose} color="primary">
                No
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default withStyles( styles )( PaymentPage );
