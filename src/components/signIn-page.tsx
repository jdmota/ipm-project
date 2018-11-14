import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import UsernameTextField from "./logInPageComponents/username-text-field";
import PasswordTextField from "./logInPageComponents/password-text-field";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ( {
  flexContainerLogIn: {
    width: 330,
    height: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "200",
    // top: "600"
  },
  titlePosition: {
    // marginBottom: 40
  },
  flexContainerLogInContent: {
    paddingBottom: "5%",
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
  }
} );

class SignInPage extends React.Component {

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
    const { visible } = this.state;

    return <div>
      <div className={classes.flexContainerLogInContent}></div>
      <div className={classes.flexContainerLogIn}>

        <Typography variant="h3" color="inherit" align="center" className={classes.titlePosition}>
          Sign In
        </Typography>

        <div className={classes.marginWrongPassword}>
        </div>
        <Card className={visible ? classes.wrongPasswordCardVisible : classes.wrongPasswordCardInvisible} id="wrongPasswordCard">

          <div className={classes.containerWrongPasswordAndClose}>

            <div className={classes.wrongPasswordText}>
              <Typography variant="caption" color="inherit" align="center">
                Wrong username or password.
              </Typography>
            </div>

            <div className={classes.closeWrongPasswordButton}>
              <IconButton aria-label="Close" onClick={this.handleCloseWrongPassword}>
                <CloseIcon fontSize="small" color="secondary" />
              </IconButton>
            </div>

          </div>
        </Card>

        <div className={classes.marginWrongPassword}></div>

        <Card >
          <CardContent >
            <div className={classes.controls}>
              <UsernameTextField></UsernameTextField>
            </div>
            <div className={classes.controls}>
              <PasswordTextField></PasswordTextField>
            </div>
            <div className={classes.linkDiv}>
              <div className={classes.linkDiv2}>
                <Typography variant="caption" color="inherit" align="center">
                  <a href="default.asp" className={classes.a} >Forgot password?</a>
                </Typography>
              </div>
            </div>
            <div>
              <CardActions>
                <div className={classes.buttonLogin}>
                  <Button variant="contained" size="small" color="primary">
                    Sign In
                  </Button>
                </div>
              </CardActions>
            </div>
          </CardContent>
        </Card>

        <div className={classes.signUpContainer} >
          <Card className={classes.signUpCard}>
            <CardContent>
              <Typography variant="caption" color="inherit" align="center">
                <span style={{ marginRight: 10 }}>New to FCTicket?</span>
                <span>
                  <a href="default.asp" className={classes.createAccontLink} color="inherit">Create an account</a>
                </span>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>;
  }
}

export default withStyles( styles )( SignInPage );
