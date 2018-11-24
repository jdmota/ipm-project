import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FastIcon from "@material-ui/icons/FastForwardRounded";
import EuroIcon from "@material-ui/icons/EuroSymbolOutlined";
import TicketIcon from "@material-ui/icons/LocalPlayOutlined";
import UsernameTextField from "./signUpComponents/username-text-field";
import PasswordTextField from "./signUpComponents/password-text-field";
import EmailTextField from "./signUpComponents/email-text-field";
import ConfirmPasswordTextField from "./signUpComponents/confirmPassword-text-field";
import FullNameTextField from "./signUpComponents/fullName-text-field";
import CardNumberTextField from "./signUpComponents/cardNumber-text-field";
import ExpirationDateTextField from "./signUpComponents/expirationDate-text-field";
import CVVTextField from "./signUpComponents/cvv-text-field";
import { addUser } from "../actions/userActions";
import { navigateBack } from "../helpers/router";

const styles = theme => ( {
  flexContainer: {
    marginTop: 30,
    float: "left"
  },
  titlePosition: {
    // marginBottom: 40
  },
  marginFromAppBar: {
    paddingBottom: "1%",
  },
  cardContentPosition: {
    // position: "absolute",
    left: "50%"
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  buttonLogin: {
    margin: "0 auto",
    display: "table"
  },
  link: {
    background: "none",
    border: "none",
    underline: "none",
  },
  linkDiv: {
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: "100%",
    float: "right"
  },
  linkDiv2: {
    float: "right",
    marginRight: 30
  },
  a: {
    textDecoration: "none",
    fontSize: 13,
  },
  signUpContainer: {
    marginTop: 20,
    height: 100
  },
  signUpCard: {
    border: "1px solid #d8dee2",
    height: 50,
  },
  createAccontLink: {
    textDecoration: "none",
    fontSize: 16
  },
  wrongPasswordContainer: {
    width: 330,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  marginWrongPassword: {
    margin: 30
  },
  wrongPasswordCardInvisible: {
    border: "1px solid #d8dee2",
    height: 50,
    color: "#b30000",
    backgroundColor: "#ffdce0",
    display: "none"
  },
  wrongPasswordCardVisible: {
    border: "1px solid #d8dee2",
    height: 50,
    color: "#b30000",
    backgroundColor: "#ffdce0",
  },
  wrongPasswordPadding: {
    padding: 5,
  },
  containerWrongPasswordAndClose: {
    margin: "0 auto",
    width: "100%",
    height: 50,
    display: "inline-flex",
  },
  wrongPasswordText: {
    margin: "auto",
    marginRight: 0
  },
  closeWrongPasswordButton: {
    margin: "auto",
    marginRight: 0,
    marginLeft: 20,
    color: "#b30000"
  },
  imagesContainer: {
    width: 230,
    float: "left",
    marginTop: 70,
    marginLeft: 50,
    minWidth: 100,
  },
  font: {
    fontFamily: "Verdana, Geneva, sans-serif",
  },
  fontGreen: {
    fontFamily: "Verdana, Geneva, sans-serif",
    color: "#7DB901"
  },
  fontDarkBlue: {
    fontFamily: "Verdana, Geneva, sans-serif",
    color: "#426BBA"
  },
  fontLightBlue: {
    fontFamily: "Verdana, Geneva, sans-serif",
    color: "#5CB9CB"
  },
  containerInfoCard: {
    display: "flex"
  },
  info: {
    textAlign: "center"
  },
  widthfit: {
    width: "fit-content",
    margin: "auto"
  }
} );

class SignUpPage extends React.Component<any, any> {

  state = {
    errorMsg: "",
    email: "",
    username: "",
    password: "",
    confirmedPass: "",
    fullName: undefined,
    creditCardNumber: undefined,
    dateCreditCard: null,
    cvv: undefined,
  };

  signUp() {
    const { email, username, password, confirmedPass, fullName, creditCardNumber, dateCreditCard, cvv } = this.state;
    if ( !email || !username || !password || !confirmedPass ) {
      this.setState( { errorMsg: "Please fill the required fields." } );
      return;
    }
    if ( !/@/.test( email ) ) {
      this.setState( { errorMsg: "Please provide a valid email address." } );
      return;
    }
    if ( password.length < 5 ) {
      this.setState( { errorMsg: "Your password is not very strong." } );
      return;
    }
    if ( creditCardNumber || dateCreditCard || cvv ) {
      if ( !creditCardNumber || !dateCreditCard || !cvv ) {
        this.setState( { errorMsg: "To prefill your credit card information, you have to fill all 3 related camps." } );
        return;
      }
    }
    if ( password !== confirmedPass ) {
      this.setState( { errorMsg: "Your passwords do not match." } );
      return;
    }
    if ( this.props.users.userList.find( u => u.email === email || u.username === username ) ) {
      this.setState( { errorMsg: "There is already a user with the same email or username." } );
      return;
    }
    this.setState( { errorMsg: "" } );
    this.props.addUser( {
      email,
      username,
      password,
      fullName,
      creditCardNumber,
      dateCreditCard,
      cvv
    } );
    navigateBack();
  }

  render() {
    const { classes } = this.props;

    return <div>
      <Typography variant="h4" color="inherit" align="center" className={classes.titlePosition}>
        Sign Up
      </Typography>

      <div className={classes.widthfit}>

        <div className={classes.flexContainer}>
          <Card>
            <CardContent>
              <div className={classes.widthfit}>
                <div style={{ width: 265, float: "left" }}>
                  <div className={classes.controls}>
                    <EmailTextField onChange={email => this.setState( { email } )}/>
                  </div>
                  <div className={classes.controls}>
                    <UsernameTextField onChange={username => this.setState( { username } )}/>
                  </div>
                  <div className={classes.controls}>
                    <PasswordTextField onChange={password => this.setState( { password } )}/>
                  </div>
                  <div className={classes.controls}>
                    <ConfirmPasswordTextField onChange={confirmedPass => this.setState( { confirmedPass } )}/>
                  </div>
                  <div style={{ paddingLeft: 15 }}>
                    <Typography color="inherit" variant="caption">
                    * Required Fields
                    </Typography>
                  </div>
                </div>
                <div style={{ width: 265, float: "left" }}>
                  <div className={classes.controls}>
                    <FullNameTextField onChange={fullName => this.setState( { fullName } )}/>
                  </div>
                  <div className={classes.controls}>
                    <CardNumberTextField onChange={creditCardNumber => this.setState( { creditCardNumber } )}/>
                  </div>
                  <div className={classes.controls}>
                    <ExpirationDateTextField onChange={dateCreditCard => this.setState( { dateCreditCard } )}/>
                  </div>

                  <div className={classes.controls}>
                    <CVVTextField onChange={cvv => this.setState( { cvv } )}/>
                  </div>
                </div>
              </div>
              <div style={{ clear: "left" }}></div>
              <div className={classes.widthfit} style={{ padding: 20 }}>
                <Typography color="error">{this.state.errorMsg}</Typography>
              </div>
              <div>
                <CardActions>
                  <div className={classes.buttonLogin}>
                    <Button variant="contained" size="medium" color="primary" onClick={() => this.signUp()}>
                    Register
                    </Button>
                  </div>
                </CardActions>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={classes.imagesContainer}>
          <Card>
            <CardContent>
              <div style={{ width: 100 }}>
                <div style={{ marginBottom: 30 }}>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ float: "left" }}>
                      <FastIcon style={{ fontSize: 50 }} ></FastIcon>
                    </div>
                    <div className={classes.containerInfoCard} style={{ paddingTop: 6 }}>
                      <Typography className={`${classes.info} ${classes.fontGreen}`} variant="h4" color="inherit" >
                      F
                      </Typography>
                      <Typography className={`${classes.info} ${classes.font}`} variant="h4" color="inherit" >
                      ast
                      </Typography>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 30 }}>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ float: "left" }}>
                      <EuroIcon style={{ fontSize: 50 }} ></EuroIcon>
                    </div>
                    <div className={classes.containerInfoCard} style={{ paddingTop: 6 }}>
                      <Typography className={`${classes.info} ${classes.fontDarkBlue}`} variant="h4" color="inherit" >
                      C
                      </Typography>
                      <Typography className={`${classes.info} ${classes.font}`} variant="h4" color="inherit" >
                      heap
                      </Typography>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 30 }}>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ float: "left" }}>
                      <TicketIcon style={{ fontSize: 50 }} ></TicketIcon>
                    </div>
                    <div className={classes.containerInfoCard} style={{ paddingTop: 6 }}>
                      <Typography className={`${classes.info} ${classes.fontLightBlue}`} variant="h4" color="inherit" >
                      T
                      </Typography>
                      <Typography className={`${classes.info} ${classes.font}`} variant="h4" color="inherit" >
                      ickets
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

    </div>;
  }
}

function mapStateToProps( state ) {
  return {
    users: state.users
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { addUser: addUser }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( SignUpPage ) );
