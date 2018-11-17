import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { search, advancedSearch } from "../helpers/search";
import { installRouter } from "../helpers/router";
import EventCard from "../components/event-card";
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
    search: location.search
  };

  /*
  EventSearch( params ) {
    let events: Array<Event> = [];
    allEvents.map( event => {
      if ( event.title.toLowerCase().includes( params.name.toLowerCase() ) ) {
        events.push( event );
      }
    } );
    return events;
  }
  */

  componentDidMount() {
    installRouter( location => {
      this.setState( {
        pathname: location.pathname,
        search: location.search
      } );
    } );
  }

  renderList() {
    // let eventList = this.EventSearch( this.props.params );
    // let eventList = search( this.props.params.name );
    let eventList = advancedSearch( this.props.params.name, this.props.params.type, this.props.params.location, this.props.params.minPrice, this.props.params.maxPrice, this.props.params.startDate, this.props.params.endDate );

    return eventList.map( event => {
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
        Name: {this.props.params.name} <p></p>
        Type: {this.props.params.type} <p></p>
        Localização: {this.props.params.location} <p></p>
        Range: {this.props.params.minPrice} - {this.props.params.maxPrice} <p></p>
        Data de Início: {this.props.params.startDate.toString()}<p></p>
        Data de Fim: {this.props.params.endDate.toString()}<p></p>

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
