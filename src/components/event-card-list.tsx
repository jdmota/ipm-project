import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { advancedSearch } from "../helpers/search";
import EventCard from "./event-card";

const styles = {};

class EventCardList extends React.Component<any, any> {

  renderList() {
    const { params } = this.props;
    const eventList = advancedSearch(
      params.name,
      params.type,
      params.location,
      params.minPrice,
      params.maxPrice,
      params.startDate,
      params.endDate
    );

    return eventList.map( event => {
      return <EventCard key={event.url} event={event} />;
    } );
  }

  render() {
    const list = this.renderList();

    return <div>
      {list.length ? list : <Typography>No results found for query: {this.props.params.name}</Typography>}
    </div>;
  }
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

export default connect( mapStateToProps )( withStyles( styles )( EventCardList ) );
