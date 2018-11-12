import React, { lazy, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import { installRouter } from "../helpers/router";

const TicketExchange = lazy( () => import( "./ticket-exchange/ticket-exchange" ) );

type MainState = {
  pathname: string,
  search: string,
};

type MainProps = {
  classes: any
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

const eventItems = Events.map( event => {
  return (
    <EventCard
      image="https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547"
      key = {event.title}
      events={event}
    />
  );
} );

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
          <TicketExchange
            onRightDrawerToggle={this.props.onRightDrawerToggle}
          />
        </Suspense>
      </div>
    </div>;
  }
}

export default withStyles( styles )( Main );
