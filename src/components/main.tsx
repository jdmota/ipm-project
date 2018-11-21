import React, { lazy, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import { installRouter } from "../helpers/router";
import { getEventByUrl } from "../helpers/search";

const HomePage = lazy( () => import( "./home-page" ) );
const EventPage = lazy( () => import( "./event-page" ) );
const EventList = lazy( () => import( "./event-card-list" ) );
const SignInPage = lazy( () => import( "./signIn-page" ) );
const SignUpPage = lazy( () => import( "./signUp-page" ) );
const TicketExchange = lazy( () => import( "./ticket-exchange/ticket-exchange" ) );
const PaymentPage = lazy( () => import( "./payment-page" ) );

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
    marginTop: 30,
    marginBottom: 100
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
    const pathname = this.state.pathname.replace( /\/+$/, "" ) || "/";

    let component;
    switch ( pathname ) {
      case "/":
        component = <HomePage />;
        break;
      case "/search":
        component = <EventList />;
        break;
      case "/sign-in":
        component = <SignInPage />;
        break;
      case "/sign-up":
        component = <SignUpPage />;
        break;
      default: {
        const eventUrl = pathname.replace( /^\/buy/, "" );
        const isBuy = eventUrl !== pathname;

        const event = getEventByUrl( eventUrl );
        if ( event ) {
          component = isBuy ? <PaymentPage event={event} /> : <EventPage event={event} />;
        } else {
          component = <p>Not found.</p>;
        }
      }
    }

    return <div className={classes.main}>
      <div className={classes.margin}>
        <Suspense fallback={<div>Loading...</div>}>
          {component}
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
