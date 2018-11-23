import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import UsernameTextField from "./logInPageComponents/username-text-field";
import PasswordTextField from "./logInPageComponents/password-text-field";
import { loginUser } from "../actions/userActions";
import { navigateBack } from "../helpers/router";

const styles = theme => ( {
  flexContainerLogIn: {
    width: "fit-content",
    height: 500,
    margin: "auto"
  },
  titlePosition: {
    // marginBottom: 40
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
    padding: theme.spacing.unit
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
  createAccountLink: {
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

class SignInPage extends React.Component<any, any> {

  state = {
    errorMsg: "",
    username: "",
    password: "",
  };

  login = () => {
    const { username, password } = this.state;
    const user = this.props.users.userList.find( user => user.username === username );
    if ( !username || !password ) {
      this.setState( { errorMsg: "Please fill your username and password." } );
      return;
    }
    if ( !user || user.password !== password ) {
      this.setState( { errorMsg: "Wrong username or password." } );
    } else {
      this.setState( { errorMsg: "" } );
      this.props.loginUser( user );
      navigateBack();
    }
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.flexContainerLogIn}>

      <Typography variant="h3" color="inherit" align="center" className={classes.titlePosition}>
          Sign In
      </Typography>

      <Card style={{ width: 450, marginTop: 30 }}>
        <CardContent>
          <div style={{ width: 280, margin: "auto" }}>
            <div className={classes.controls}>
              <div style={{ width: "100%", margin: "auto" }} >
                <UsernameTextField
                  onChange={username => this.setState( { username } )}
                  onEnter={() => this.login()}
                />
              </div>
            </div>
            <div className={classes.controls}>
              <div style={{ width: "100%", margin: "auto" }} >
                <PasswordTextField
                  onChange={password => this.setState( { password } )}
                  onEnter={() => this.login()}
                />
              </div>
            </div>
            <div className={classes.linkDiv}>
              <Typography variant="caption" color="inherit" align="center">
                <a href="default.asp" className={classes.a}>Forgot your password?</a>
              </Typography>
            </div>
            <div style={{ width: "fit-content", margin: "auto", padding: 8 }}>
              <Typography color="error">{this.state.errorMsg}</Typography>
            </div>
            <div>
              <CardActions>
                <div className={classes.buttonLogin}>
                  <Button variant="contained" size="small" color="primary" onClick={() => this.login()}>
                    Sign In
                  </Button>
                </div>
              </CardActions>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className={classes.signUpContainer}>
        <Card className={classes.signUpCard}>
          <CardContent>
            <Typography variant="caption" color="inherit" align="center">
              <span style={{ marginRight: 10 }}>New to FCTicket?</span>
              <span>
                <a href="/sign-up" className={classes.createAccountLink} color="inherit">Create an account</a>
              </span>
            </Typography>
          </CardContent>
        </Card>
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
  return bindActionCreators( { loginUser: loginUser }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( SignInPage ) );
