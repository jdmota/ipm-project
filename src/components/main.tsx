import React, { lazy, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import { getPathname, installRouter } from "../helpers/router";
import { getEventByUrl } from "../helpers/search";
import CategoryBar from "./home-page/category-bar";

const HomePage = lazy( () => import( "./home-page" ) );
const HomePageCategory = lazy( () => import( "./home-page/home-page-category" ) );
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
    pathname: getPathname()
  };

  componentDidMount() {
    installRouter( pathname => {
      this.setState( {
        pathname
      } );
    } );
  }

  render() {
    const { classes } = this.props;
    const pathname = this.state.pathname.replace( /\/+$/, "" ) || "/";

    let component;
    let showCategoryBar = false;
    switch ( pathname ) {
      case "/":
        component = <HomePage />;
        showCategoryBar = true;
        break;
      case "/festivals":
      case "/concerts":
      case "/theaters":
        component = <HomePageCategory pathname={pathname} />;
        showCategoryBar = true;
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
          component = isBuy ? <PageOrLogin><PaymentPage event={event} /></PageOrLogin> : <EventPage eventUrl={eventUrl} />;
        } else {
          component = <p>Not found.</p>;
        }
      }
    }

    return <div className={classes.top}>
      {showCategoryBar && <CategoryBar pathname={pathname} />}
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
