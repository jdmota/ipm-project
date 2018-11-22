import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import SwapIcon from "@material-ui/icons/SwapHoriz";
import { Event } from "src/data/types";
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
    // width: 300,
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
  outside: {
    marginLeft: 100,
    marginRight: 40
  },
  icon: {
    color: "rgb(180, 180, 180)",
  },
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: 0,
    marginRight: 0
  }
} );


function HomePage( props: { classes: any, events: Event[] } ) {
  const { classes } = props;
  const { title, date, location, type, priceUnit } = props.events[ 0 ];

  return <div>

    <div className={classes.outside}>

      <div>
        <Typography variant="h4" color="inherit" >
          <b>Highlights</b>
        </Typography>

        {/* <div className={classes.sizeHighlight}>
        <Card className={classes.cardHighlight}>
          <CardHeader
            className={classes.forceHighlight}
            avatar={
              <div className={classes.imageHighlight}>
                <img height={110} src={"/images/NOS/nos_alive_4.jpg"}/>
              </div>
            }
            title={title}
            subheader={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
          />
        </Card>
          </div>*/}
        <div className={classes.imageContainer}>
          <Slider/>
        </div>

      </div>

      <div onClick ="location.href = '#'" style= {{ backgroundColor: "#cccccc", height: 100, width: "94%", minWidth: "94%", borderRadius: 20, marginBottom: 30, cursor: "pointer" }} >
        <div style = {{ float: "left", marginLeft: 330, marginRight: 20 }}><SwapIcon fontSize = "inherit" style={{ fontSize: 100, marginLeft: 20 }}></SwapIcon>
        </div>
        <div style = {{ paddingTop: 15 }}>
          <div><Typography variant = "display2" style = {{ fontSize: "2vw" }}><b style= {{ color: "#000000" }}>Exchange Your Tickets Here</b></Typography></div>
          <div style ={{ marginTop: 10 }}><Typography variant = "display2" style = {{ fontSize: "1vw" }}><b style= {{ color: "#000000" }}>The first platform to provide online ticket exchange!</b></Typography></div>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.mostPopularContainer}>
          <Typography variant="h4" color="inherit">
            <b>Most Popular</b>
          </Typography>

          <div className={classes.size}>
            <Card className={classes.card}>

              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={"/images/NOS/nos_alive_4.jpg"}/>
                  </div>
                }
                action={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
                title={title}
                subheader={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
              />

            </Card>
          </div>

          <div className={`${classes.size} ${classes.next}`}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={"/images/NOS/nos_alive_4.jpg"}/>
                  </div>
                }
                action={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
                title={title}
                subheader={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
              ></CardHeader>
            </Card>
          </div>
        </div>


        <div className={classes.recentlyAnnouncedContiner}>
          <Typography variant="h4" color="inherit">
            <b>Recently Announced</b>
          </Typography>

          <div className={classes.size}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={"/images/NOS/nos_alive_4.jpg"}/>
                  </div>
                }
                action={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
                title={title}
                subheader={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
              />
            </Card>
          </div>

          <div className={`${classes.size} ${classes.next}`}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.force}
                classes = {
                  { action: classes.action }
                }
                avatar={
                  <div className={classes.image}>
                    <img height={110} src={"/images/NOS/nos_alive_4.jpg"}/>
                  </div>
                }
                action={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
                title={title}
                subheader={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
              />
            </Card>
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
    </div>
  </div>;
}

function mapStateToProps( state ) {
  return {
    events: state.events
  };
}

export default connect( mapStateToProps )( withStyles( styles )( HomePage ) );
