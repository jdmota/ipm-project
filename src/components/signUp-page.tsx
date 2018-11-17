import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import UsernameTextField from "./signUpComponents/username-text-field";
import PasswordTextField from "./signUpComponents/password-text-field";
import EmailTextField from "./signUpComponents/email-text-field";
import ConfirmPasswordTextField from "./signUpComponents/confirmPassword-text-field";
import FullNameTextField from "./signUpComponents/fullName-text-field";
import CardNumberTextField from "./signUpComponents/cardNumber-text-field";
import ExpirationDateTextField from "./signUpComponents/expirationDate-text-field";
import CCVTextField from "./signUpComponents/ccv-text-field";
import FastIcon from "@material-ui/icons/FastForwardRounded";
import EuroIcon from "@material-ui/icons/EuroSymbolOutlined";
import TicketIcon from "@material-ui/icons/LocalPlayOutlined";

const styles = theme => ( {
  flexContainerLogIn: {
    width: 730,
    // height: 1000,
    marginLeft: "10%",
    marginTop: "200",
    display: "inline-block",
    float: "left"
    // top: "600"
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
    // marginRight: "10%",
    marginTop: "11%",
    marginLeft: "75%",
    minWidth: 100,
    width: 230
    // top: "600"
  }
} );

class SignUpPage extends React.Component<any, any> {

  state = {
    visible: false,
  };

  handleCloseWrongPassword = () => {
    this.setState( { visible: false } );
  }

  handleOpenWrongPassowrd = () => {
    this.setState( { visible: true } );
  }
  render() {
    const { classes } = this.props;

    return <div>
      <div className={classes.marginFromAppBar}></div>
      <div className={classes.flexContainerLogIn}>
        <Typography variant="h4" color="inherit" align="center" className={classes.titlePosition}>
          Sign Up
        </Typography>

        <div className={classes.marginWrongPassword}></div>
        <div className={classes.marginWrongPassword}></div>

        <Card >
          <CardContent >
            <div style={{ float: "left" }}>
              <div className={classes.controls}>
                <EmailTextField></EmailTextField>
              </div>
              <div className={classes.controls}>
                <UsernameTextField></UsernameTextField>
              </div>
              <div className={classes.controls}>
                <PasswordTextField></PasswordTextField>
              </div>
              <div className={classes.controls}>
                <ConfirmPasswordTextField></ConfirmPasswordTextField>
              </div>
              <div style={{ paddingLeft: 15, }}>
                <Typography color="inherit" variant = "caption">
                  * Required Fields
                </Typography>
              </div>

            </div>
            <div style={{ float: "right" }}>
              <div className={classes.controls}>
                <FullNameTextField></FullNameTextField>
              </div>
              <div className={classes.controls}>
                <CardNumberTextField></CardNumberTextField>
              </div>
              <div className={classes.controls}>
                <ExpirationDateTextField></ExpirationDateTextField>
              </div>

              <div className={classes.controls}>
                <CCVTextField></CCVTextField>
              </div>
            </div>
            <div style={{ marginTop: 320 }}>
              <CardActions>
                <div className={classes.buttonLogin}>
                  <Button variant="contained" size="medium" color="primary">
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
                <div style={{ float: "left" }}>
                  <FastIcon style={{ fontSize: 50 }} ></FastIcon>
                </div>
                <div style={{ paddingTop: 6, paddingLeft: 60 }}>
                  <Typography variant="h4" color="inherit" >
                  Fast
                  </Typography>
                </div>
              </div>

              <div style={{ marginBottom: 30 }}>
                <div style={{ float: "left" }}>
                  <EuroIcon style={{ fontSize: 50 }} ></EuroIcon>
                </div>
                <div style={{ paddingTop: 6, paddingLeft: 60 }}>
                  <Typography variant="h4" color="inherit" >
                  Cheap
                  </Typography>
                </div>
              </div>

              <div style={{ marginBottom: 30 }}>
                <div style={{ float: "left" }}>
                  <TicketIcon style={{ fontSize: 50 }} ></TicketIcon>
                </div>
                <div style={{ paddingTop: 6, paddingLeft: 60 }}>
                  <Typography variant="h4" color="inherit" >
                  Tickets
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>;
  }
}

export default withStyles( styles )( SignUpPage );
