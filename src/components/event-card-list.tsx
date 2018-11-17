import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { advancedSearch } from "../helpers/search";
import EventCard from "./event-card";

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
} );
*/

class EventCardList extends React.Component<any, any> {

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

  renderList() {
    // let eventList = this.EventSearch( this.props.params );
    // let eventList = search( this.props.params.name );
    const eventList = advancedSearch(
      this.props.params.name,
      this.props.params.type,
      this.props.params.location,
      this.props.params.minPrice,
      this.props.params.maxPrice,
      this.props.params.startDate,
      this.props.params.endDate
    );

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
    const { classes, params } = this.props;

    return <div className={classes.main}>
      <div className={classes.margin}>
        {this.renderList()}
        Name: {params.name} <p></p>
        Type: {params.type} <p></p>
        Localização: {params.location} <p></p>
        Range: {params.minPrice} - {params.maxPrice} <p></p>
        Data de Início: {params.startDate.toString()}<p></p>
        Data de Fim: {params.endDate.toString()}<p></p>
      </div>
    </div>;
  }
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

export default connect( mapStateToProps )( withStyles( styles )( EventCardList ) );
