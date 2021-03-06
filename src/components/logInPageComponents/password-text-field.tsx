import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = theme => ( {
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 300,
  },
} );

class PasswordTextField extends React.Component<any, any> {
  state = {
    password: "",
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState( { [ prop ]: event.target.value } );
    this.props.onChange( event.target.value );
  };

  handleClickShowPassword = () => {
    this.setState( state => ( { showPassword: !state.showPassword } ) );
  };

  handleKeyUp = ( e: any ) => {
    if ( e.charCode === 13 || e.key === "Enter" ) {
      this.props.onEnter();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={`${classes.margin} ${classes.textField}`}>
          <InputLabel htmlFor="login-password">Password</InputLabel>
          <Input
            id="login-password"
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.password}
            onChange={this.handleChange( "password" )}
            onKeyUp={this.handleKeyUp}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles( styles )( PasswordTextField );
