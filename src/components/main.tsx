import React, { lazy, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import { installRouter } from "../helpers/router";
import EventCardList from "./event-card-list";
import { events as Events } from "../helpers/search";
import { checkPropTypes } from "prop-types";
import eventCard from "./event-card";
import HomePage from "./home-page";
import { Event } from "src/data/types";

const TicketExchange = lazy( () => import( "./ticket-exchange/ticket-exchange" ) );
const PaymentPage = lazy( () => import( "./payment-page" ) );
const SignInPage = lazy( () => import( "./signIn-page" ) );

type MainState = {
  pathname: string,
  search: string,
};

type MainProps = {
  classes: any,
  onRightDrawerToggle: () => void
};

const styles = {
  main: {
    maxWidth: "1600px",
    margin: "auto",
    marginTop: 30
  },
  margin: {
    marginLeft: 30,
    marginRight: 30
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
      <div className={classes.margin}>
        <Suspense fallback={<div>Loading...</div>}>
          <PaymentPage />
        </Suspense>
      </div>
    </div>;
  }
}

/*
<TicketExchange
  onRightDrawerToggle={this.props.onRightDrawerToggle}
/>
*/

export default withStyles( styles )( Main );
