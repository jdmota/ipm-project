import React, { Component } from "react";
import { Event } from "src/data/types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";

import { Column, Row } from "simple-flexbox";

const styles = theme => ( {
  title: {
    marginTop: 30,
    marginLeft: "75%",
    position: "static",
  },
  button: {
    marginLeft: 15,
    fontSize: 17,
  },
  comments: {
    width: "70%",
    marginLeft: 10,
    marginTop: 10
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  description: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: "justify",
  },
  scroll: {
    marginTop: 15,
    paddingTop: 0,
    overflow: "auto",
    border: "blue"
  },
  image: {
    width: "70%",
    height: "70%",
    float: "left",
    position: "static",
    marginLeft: 10,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  /* geralLeft: {
    position: "static",
    left: 0,
    backgroundColor: "orange",
    height: "100%",
    width: "50%",
    zIndex: "1",
    top: 0,
    overflowX: "hidden",
    paddingTop: "20px"
  },
  geralRight: {
    position: "static",
    right: 0,
    backgroundColor: "red",
    height: "100%",
    width: "50%",
    zIndex: "1",
    top: 0,
    overflowX: "hidden",
    paddingTop: "20px"
  }*/
  geral: {
    position: "static"
  },
} );

function EventPage( props: {event: Event} ) {

  const { title, description: eventDescription, date, location, comments, priceUnit } = props.event;
  const { classes } = props;

  return <div>
    <div className={classes.geral}>
      <img className={classes.image} src={ "http://nosalive.com/wp-content/uploads/2016/08/nos-alive-2017-tickets.jpg" } />

      <Input
        placeholder="Here to comment"
        className={classes.comments}
        inputProps={{
          "aria-label": "Description",
        }}
      />
    </div>

    <div className={classes.title}>
      <Typography variant="h4" color="inherit">
        {title}
        <Button className={classes.button} variant="contained">
          {priceUnit}€
          <AddShoppingCartIcon className={classes.rightIcon}/>
        </Button>
      </Typography>

      <Paper className={classes.scroll}>
        <Typography className={classes.description} variant="subtitle1">
          {eventDescription}
        </Typography>
      </Paper>
    </div>

  </div>;
}

export default withStyles( styles )( EventPage );
