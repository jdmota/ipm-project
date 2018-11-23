import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EventCard from "../event-card";
import { categories } from "./categories";

const styles = {};

function HomePageCategory( { pathname, events }: any ) {

  const { title, type, index } = categories[ pathname ];

  const filteredEvents = events.filter( e => e.type === type );

  return <div>

    <Typography variant="h4" color="inherit" >
      <b>{title}</b>
    </Typography>

    {
      filteredEvents.map( event => {
        return <EventCard key={event.url} event={event} />;
      } )
    }

  </div>;
}

function mapStateToProps( state ) {
  return {
    events: state.events
  };
}

export default connect( mapStateToProps )( withStyles( styles )( HomePageCategory ) );
