import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import SwapIcon from "@material-ui/icons/SwapHoriz";
import { Event } from "../data/types";
import { navigate, fixPathname } from "../helpers/router";
import Slider from "./slider";

const styles = theme => ( {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    "@media all and (max-width: 1300px)": {
      flexFlow: "column"
    },
    "& > div": {
      marginBottom: 20
    }
  },
  link: {
    textDecoration: "none",
    width: "fit-content",
  },
  withfit: {
    width: "fit-content",
    margin: "auto",
  },
  mostPopularContainer: {
    flex: "1 1 0%",
    maxWidth: "100%",
    width: 900,
    margin: "auto",
  },
  recentlyAnnouncedContiner: {
    flex: "0%",
    width: "100%",
    "@media all and (min-width: 1300px)": {
      marginLeft: 30
    }
  },
  eventContainer: {
    flex: "1 1 0%",
    maxWidth: "100%",
    width: 900,
    height: 500,
    margin: "auto",
  },
  flexContainerEvent: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    "@media all and (max-width: 1300px)": {
      flexFlow: "column"
    },
    "& > div": {
      marginBottom: 20
    }
  },
  imageContainer: {
    width: "94%",
    height: 450,
    margin: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  card: {
    maxWidth: 500,
    // height: 227
  },
  image: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: 110
  },
  force: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0
  },
  size: {
    width: 500,
    height: 120,
    marginTop: 15,
    marginBottom: 0
  },
  cardHighlight: {
    maxWidth: 500,
    // height: 227
  },
  imageHighlight: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: 110
  },
  forceHighlight: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0
  },
  sizeHighlight: {
    // width: 300,
    height: 500,
    marginTop: 15,
    marginBottom: 0
  },
  next: {
    marginTop: 0
  },
  icon: {
    color: "rgb(180, 180, 180)",
  },
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: 0,
    marginRight: 0
  },
  hiddenExchangeIcon: {
    "@media all and (max-width: 600px)": {
      display: "none",
      // margin: 0
    }
  }
} );


function HomePage( props: { classes: any, events: Event[] } ) {
  const { classes } = props;
  const events = props.events;

  return <div>
    <div>
      <Typography variant="h4" color="inherit" >
        <b>Highlights</b>
      </Typography>
      <div className={classes.imageContainer}>
        <Slider images ={[
          "/images/NOS/nos_alive_1.jpg",
          "/images/escapeRooms/wrongOne/wrongOne.jpg",
          "/images/escapeRooms/rightOne/rightOne3.jpg"
        ].map( fixPathname )}/>
      </div>
    </div>

    <div
      onClick={() => navigate( "/ticket-exchange" )}
      style={{ backgroundColor: "#cccccc", height: 100, width: "100%", borderRadius: 20, marginBottom: 30, cursor: "pointer" }}
    >
      <div
        className={classes.withfit}
      >
        <div className={classes.hiddenExchangeIcon} style={{ float: "left", marginRight: 20 }}>
          <SwapIcon style={{ fontSize: 100 }}></SwapIcon>
        </div>
        <div style={{ float: "left", paddingTop: 15 }}>
          <div>
            <Typography variant="h5">
              <b style={{ color: "#000000" }}>Exchange Your Tickets Here</b>
            </Typography>
          </div>
          <div style={{ marginTop: 10 }}>
            <Typography variant="body1">
              <b style={{ color: "#000000" }}>The first platform to provide online ticket exchange!</b>
            </Typography>
          </div>
        </div>
      </div>
    </div>

    <div className={classes.container}>
      <div className={classes.mostPopularContainer}>
        <Typography variant="h4" color="inherit">
          <b>Most Popular</b>
        </Typography>

        <div className={classes.size}>
          <a className={classes.link} href={events[ 0 ].url}>
            <Card className={classes.card}>

              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={events[ 0 ].images[ 0 ]}/>
                  </div>
                }
                title={events[ 0 ].title}
                subheader={`${events[ 0 ].date.getDay()}/${events[ 0 ].date.getMonth()}/${events[ 0 ].date.getFullYear()}`}
              />

            </Card>
          </a>
        </div>

        <div className={`${classes.size} ${classes.next}`}>
          <a className={classes.link} href={events[ 1 ].url}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={events[ 1 ].images[ 0 ]}/>
                  </div>
                }
                title={events[ 1 ].title}
                subheader={`${events[ 1 ].date.getDay()}/${events[ 1 ].date.getMonth()}/${events[ 1 ].date.getFullYear()}`}
              />
            </Card>
          </a>
        </div>

      </div>


      <div className={classes.recentlyAnnouncedContiner}>
        <Typography variant="h4" color="inherit">
          <b>Recently Announced</b>
        </Typography>

        <div className={classes.size}>
          <a className={classes.link} href={events[ 2 ].url}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={events[ 2 ].images[ 0 ]}/>
                  </div>
                }
                title={events[ 2 ].title}
                subheader={`${events[ 2 ].date.getDay()}/${events[ 2 ].date.getMonth()}/${events[ 2 ].date.getFullYear()}`}
              />
            </Card>
          </a>
        </div>


        <div className={`${classes.size} ${classes.next}`}>
          <a className={classes.link} href={events[ 3 ].url}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={events[ 3 ].images[ 0 ]}/>
                  </div>
                }
                title={events[ 3 ].title}
                subheader={`${events[ 3 ].date.getDay()}/${events[ 3 ].date.getMonth()}/${events[ 3 ].date.getFullYear()}`}
              />
            </Card>
          </a>
        </div>

      </div>
    </div>

    <div>
      {/* nr de div igual ao nr de patrocinios*/}
      <Typography variant="h4" color="inherit">
        <b>Sponsors</b>
      </Typography>
    </div>

    <div>
      {/* "Quem somos?"*/}
    </div>
  </div>;
}

function mapStateToProps( state ) {
  return {
    events: state.events
  };
}

export default connect( mapStateToProps )( withStyles( styles )( HomePage ) );
