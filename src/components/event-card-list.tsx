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
      return (
        <EventCard
          image="https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547"
          key={event.title}
          events={event}
        />
      );
    } );
  }

  render() {
    const { params } = this.props;

    return <div>
      {this.renderList()}
      <p>Name: {params.name}</p>
      <p>Type: {params.type}</p>
      <p>Localização: {params.location}</p>
      <p>Range: {params.minPrice} - {params.maxPrice}</p>
      <p>Data de Início: {params.startDate.toString()}</p>
      <p>Data de Fim: {params.endDate.toString()}</p>
    </div>;
  }
}

function mapStateToProps( state ) {
  return {
    params: state.params
  };
}

export default connect( mapStateToProps )( withStyles( styles )( EventCardList ) );
