import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { installRouter } from "../helpers/router";
import EventPage from "./event-page";

type MainState = {
  pathname: string,
  search: string,
};

type MainProps = {
  classes: any
};

const styles = {
  main: {
    maxWidth: "1200px",
    margin: "20px"
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

    return <div className={classes.main}>
      <div>
        <EventPage event={{ id: "1",
          title: "NOS Alive",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date(),
          images: [],
          type: "festival",
          location: "Alges",
          priceUnit: 50,
          comments: [ {
            author: {
              id: "1",
              mail: "bestcostumer@gmail.com",
              nickname: "Thebest",
              password: "best123",
              firstName: "John",
              lastName: "Smith",
              creditCardNumber: "0000 1111 2222 3333",
              dateCreditCard: new Date( 2020, 5, 20 ),
              cvc: "123"
            },
            data: new Date(),
            text: "Adorei!"
          }, {
            author: {
              id: "2",
              mail: "worstcustomer@gmail.com",
              nickname: "Theworst",
              password: "worst123",
              firstName: "Potatoes",
              lastName: "Smith",
              creditCardNumber: "0000 1111 2222 3333",
              dateCreditCard: new Date( 2020, 5, 20 ),
              cvc: "123"
            },
            data: new Date(),
            text: "Odiei!"
          } ] }}>
        </EventPage>
      </div>
    </div>;
  }
}

export default withStyles( styles )( Main );
