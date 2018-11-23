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
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={`${classes.margin} ${classes.textField}`}>
          <InputLabel htmlFor="signup-confirm-password">Confirm Password *</InputLabel>
          <Input
            id="signup-confirm-password"
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.password}
            onChange={this.handleChange( "password" )}
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
