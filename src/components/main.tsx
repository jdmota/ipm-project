import React, { lazy, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import { installRouter } from "../helpers/router";
import { getEventByUrl } from "../helpers/search";
import TabsBar from "./appbar-type";

const HomePage = lazy( () => import( "./home-page" ) );
const EventPage = lazy( () => import( "./event-page" ) );
const EventList = lazy( () => import( "./event-card-list" ) );
const PageOrLogin = lazy( () => import( "./page-or-login" ) );
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
  top: {
    marginTop: 64,
    "@media all and (max-width: 600px)": {
      marginTop: 48,
    }
  },
  main: {
    maxWidth: "1300px",
    margin: "auto",
  },
  padding: {
    padding: 30,
    paddingBottom: 100
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
        component = <PageOrLogin reversed><SignInPage /></PageOrLogin>;
        break;
      case "/sign-up":
        component = <PageOrLogin reversed><SignUpPage /></PageOrLogin>;
        break;
      case "/ticket-exchange":
        component = (
          <PageOrLogin>
            <TicketExchange onRightDrawerToggle={this.props.onRightDrawerToggle} />
          </PageOrLogin>
        );
        break;
      default: {
        const eventUrl = pathname.replace( /^\/buy/, "" );
        const isBuy = eventUrl !== pathname;

        const event = getEventByUrl( eventUrl );
        if ( event ) {
          component = isBuy ? <PageOrLogin><PaymentPage event={event} /></PageOrLogin> : <EventPage event={event} />;
        } else {
          component = <p>Not found.</p>;
        }
      }
    }

    return <div className={classes.top}>
      {pathname === "/" && <TabsBar />}
      <div className={classes.main}>
        <div className={classes.padding}>
          <Suspense fallback={<div>Loading...</div>}>
            {component}
          </Suspense>
        </div>
      </div>
    </div>;
  }
}

export default withStyles( styles )( Main );
