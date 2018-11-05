import React from "react";
import { withStyles } from "@material-ui/core/styles";
import installRouter from "../helpers/router";

type MainState = {
  pathname: string,
  search: string,
};

type MainProps = {
  classes: any
};

const styles = {
  main: {
    maxWidth: "1200px",
    margin: "20px"
  }
};

class Main extends React.Component<MainProps, MainState> {

  state = {
    pathname: location.pathname,
    search: location.search
  };

  componentDidMount() {
    installRouter( location => {
      this.setState( {
        pathname: location.pathname,
        search: location.search
      } );
    } );
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.main}>
      <div>{this.state.pathname}</div>
      <div>{this.state.search}</div>
      <div><a href="/abc">/abc</a></div>
      <div><a href="/cba">/cba</a></div>
    </div>;
  }
}

export default withStyles( styles )( Main );
