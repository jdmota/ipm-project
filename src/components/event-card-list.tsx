import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
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
    const { params } = this.props;

    return <div>
      {this.renderList()}
    </div>;
  }
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

export default connect( mapStateToProps )( withStyles( styles )( EventCardList ) );
