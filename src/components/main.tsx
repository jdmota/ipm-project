import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { installRouter } from "../helpers/router";
// import EventPage from "./event-page";
import HomePage from "./home-page";
import { Event } from "src/data/types";

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
        <HomePage events={[
          { id: "1",
            url: "",
            title: "NOS Alive",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: new Date(),
            images: [],
            type: "festival",
            location: "Alges",
            priceUnit: 50,
            comments: []
          },
          {
            id: "2",
            url: "",
            title: "A pior comédia do mundo",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: new Date(),
            images: [],
            type: "theater",
            location: "Lisboa",
            priceUnit: 50,
            comments: []
          },
          {
            id: "3",
            url: "",
            title: "Escape Room",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: new Date(),
            images: [],
            type: "other",
            location: "Almada",
            priceUnit: 50,
            comments: []
          }
        ]}></HomePage>
      </div>
    </div>;
  }
}

export default withStyles( styles )( Main );
