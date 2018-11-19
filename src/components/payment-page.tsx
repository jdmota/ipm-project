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
import SvgIcon from "@material-ui/core/SvgIcon";
import InputAdornment from "@material-ui/core/InputAdornment";
import { InlineDatePicker } from "material-ui-pickers";
import EmptySeatIcon from "../icons/emptySeat";
import FilledSeatIcon from "../icons/filledSeat";

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
    marginLeft: "10%",
    marginTop: 50,
    // float: "left"
  }
} );

class PaymentPage extends React.Component<any, any> {

  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState( { selectedDate: date } );
  };

  render() {
    const { classes, event } = this.props;
    const { selectedDate } = this.state;

    return <div>

      <div className={classes.title}>
        <Typography variant="h4" color="inherit">
          <b>{( event && event.title ) || "Event Title"}</b>
        </Typography>
      </div>

      <div style={{ display: "flex" }}>
        <div className = {classes.cardDiv}>
          <Card>
            <CardContent>
              <div className={classes.margin}>
                <div style = {{ float: "left", width: 130 }}>
                  <FormControl >
                    <InputLabel htmlFor="number-ticket">Number of tickets</InputLabel>
                    <Input defaultValue = {0} inputProps={{ min: 0 }} required type="number" id="number-ticket" />
                  </FormControl>
                </div>

                <div style = {{ float: "right", width: 140, marginRight: 20 }}>
                  <InlineDatePicker
                    keyboard
                    label="Date to Attend"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    format="dd/MM/yyyy"
                    mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
                  />
                </div>
              </div>


              <div className={classes.margin}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input id="name" required />
                </FormControl>
              </div>

              <div className={classes.margin}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="email">Email *</InputLabel>
                  <Input id="email" required />
                </FormControl>
              </div>

              <div className={classes.margin}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="credit-card">Credit Card *</InputLabel>
                  <Input type="number" required id="credit-card" />
                </FormControl>
              </div>

              <div className={classes.margin}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="expiration-date">Expiration Date *</InputLabel>
                  <Input required id="expiration-date" endAdornment={
                    <InputAdornment position="end">
                  mm/yy
                    </InputAdornment>
                  }/>
                </FormControl>
              </div>

              <div className={classes.margin}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="cvv">CVV *</InputLabel>
                  <Input type="number" required id="cvv" />
                </FormControl>
              </div>
              <div style={{ paddingLeft: 15, }}>
                <Typography color="inherit" variant = "caption">
                  * Required Fields
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <div style = {{ float: "right", marginTop: 70, marginLeft: "20%", height: "100%", }}>

          <div style={{ marginLeft: "54%", marginBottom: 20 }}>
            <Typography color="inherit" variant = "h5">
              <b>Venue</b>
            </Typography>
          </div>

          <div style={{ marginLeft: "30%" }}>
            <Typography color="inherit">
              <b style = {{ marginRight: 26 }}>1</b>
              <b style = {{ marginRight: 26 }}>2</b>
              <b style = {{ marginRight: 26 }}>3</b>
              <b style = {{ marginRight: 26 }}>4</b>
              <b style = {{ marginRight: 26 }}>5</b>
              <b style = {{ marginRight: 26 }}>6</b>
              <b style = {{ marginRight: 26 }}>7</b>

            </Typography>
          </div>

          <div style={{ float: "left", marginLeft: "15%", marginTop: 18 }}>
            <Typography color="inherit">
              <div style = {{ marginBottom: 28 }}>
                <b style = {{ }}>E</b>
              </div >
              <div style = {{ marginBottom: 28 }}>
                <b style = {{ }}>D</b>
              </div>
              <div style = {{ marginBottom: 28 }}>
                <b style = {{ }}>C</b>
              </div >
              <div style = {{ marginBottom: 28 }}>
                <b style = {{ }}>B</b>
              </div>
              <div>
                <b style = {{ }}>A</b>
              </div>
            </Typography>
          </div>

          <div style = {{ height: "100%", minWidth: 263, marginLeft: "20%", borderRadius: 25, borderColor: "#000000", borderWidth: 2, borderStyle: "solid" }}>

            <div style={{ paddingLeft: 19 }}>
              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />
            </div>
            <div style={{ paddingLeft: 19 }}>
              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />
            </div>
            <div style={{ paddingLeft: 19 }}>
              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />
            </div>
            <div style={{ paddingLeft: 19 }}>
              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />
            </div>
            <div style={{ paddingLeft: 19 }}>
              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />

              <FormControlLabel style={{ marginRight: 0 }}
                control={
                  <Checkbox icon={ <div style = {{ color: "#808080" }}><EmptySeatIcon></EmptySeatIcon></div>}
                    checkedIcon={<div style = {{ color: "#43A047" }}><FilledSeatIcon></FilledSeatIcon></div>} value="checkedH" />
                }
                label=""
              />
            </div>

            <div style = {{ textAlign: "center", borderColor: "#000000", borderWidth: 2, borderStyle: "solid", width: 100, height: 20, marginLeft: "30%", borderBottom: "none", paddingTop: 2 }}>
              <Typography color="inherit" variant = "caption">
                <b>Stage</b>
              </Typography></div>
          </div>
        </div>
      </div>
      <div style = {{ textAlign: "center", marginTop: 50 }}>
        <Button variant="contained" size="large" color="primary">Buy!</Button>
      </div>

    </div>;
  }
}

export default withStyles( styles )( PaymentPage );
