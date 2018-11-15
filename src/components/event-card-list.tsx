import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Event } from "../data/types";
import { installRouter } from "../helpers/router";
import EventCard from "./event-card";
import { events as allEvents } from "../helpers/search";
import { checkPropTypes } from "prop-types";

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
/*
const eventItems = allEvents.map( event => {
  return (
    <EventCard
      image="https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547"
      key = {event.title}
      events={event}
    />
  );
} );*/

class eventCardList extends React.Component<MainProps, MainState> {

  state = {
    pathname: location.pathname,
    search: location.search,
    eventList: allEvents,
  };


  /* EventSearch( eventName ) {
    let events: Array<Event> = [];
    allEvents.map( event => {
      if ( event.title === eventName ) {
        events.push( event );
      }
    } );
    this.setState( {
      eventList: events
    } );
  }*/

  componentDidMount() {
    installRouter( location => {
      this.setState( {
        pathname: location.pathname,
        search: location.search
      } );
    } );
  }

  renderList() {
    return this.state.eventList.map( event => {
      return (
        <EventCard
          image="https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547"
          key = {event.title}
          events={event}
        />
      );
    } );
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.main}>
      <div className={classes.margin}>
        {this.renderList()}
        {this.props.params.name}
      </div>
    </div>;
  }
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

export default connect( mapStateToProps )( withStyles( styles )( eventCardList ) );
