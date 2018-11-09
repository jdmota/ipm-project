import React from "react";
import { Event } from "src/data/types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";
import Slider from "./slider";
import TextField from "@material-ui/core/TextField";

const styles = theme => ( {
  title: {
    marginTop: 30,
    marginLeft: "75%",
    position: "static",
  },
  buttonPurchase: {
    marginLeft: 15,
    fontSize: 17,
  },
  buttonComment: {
    marginTop: 20,
    marginRight: 10
  },
  comments: {
    width: "100%",
    marginLeft: 0,
    marginTop: 5
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  description: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: "justify",
  },
  comment: {
    fontSize: 15,
    backgroundColor: "#ccccff",
    borderRadius: "3px",
    paddingLeft: "5px",
    marginTop: 5,
    paddingTop: 2
  },
  scroll: {
    marginTop: 15,
    paddingTop: 0,
    overflow: "auto",
    border: "blue"
  },
  image: {
    /* width: "95%",
    height: "95%",
    float: "left",
    position: "static",
    marginLeft: 10,*/
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  geral: {
    position: "static"
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
    flex: "1 1 0%",
    maxWidth: "100%",
    width: 900,
    height: 500,
    margin: "auto",
  },
  descriptionContiner: {
    flex: "0 1 25%",
    width: "100%",
    "@media all and (min-width: 1300px)": {
      marginLeft: 30
    },
  },
  flexContainerComment: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-around",
    margin: 10
  },
  commentContainer: {
    flex: "1 1 0%",
  },
  commentButtonContiner: {
    flex: "0 1 0%",
    paddingLeft: 20
  },
  text: {

  }
} );

function EventPage( props: { classes: any, event: Event } ) {

  const { title, description: eventDescription, date, location, type, comments, priceUnit } = props.event;
  const { classes } = props;

  return <div>

    <div className={classes.flexContainerEvent}>
      <div className={classes.imageContainer}>
        <Slider/>
      </div>

      <div className={classes.descriptionContiner}>
        <Typography variant="h4" color="inherit">
          <b>{title}</b>
          <Button className={classes.buttonPurchase} variant="contained">
            {priceUnit}€
            <AddShoppingCartIcon className={classes.rightIcon}/>
          </Button>
        </Typography>

        <Paper className={classes.scroll}>
          <Typography className={classes.description} variant="subtitle1">
            <b>Category: </b>{type}
            <br/>
            <b>Date: </b>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
            <br/>
            <b>Location: </b>{location}
            <br/>
            {eventDescription}
          </Typography>
        </Paper>
      </div>
    </div>

    <div>
      <div className={classes.flexContainerComment}>
        <div className={classes.commentContainer}>
          <TextField
            id="standard-with-placeholder"
            label="Your comment"
            placeholder="Write your thoughts here!"
            className={`${classes.textField} ${classes.comments}`}
            margin="normal">
          </TextField>
        </div>

        <div className={classes.commentButtonContiner}>
          <Button variant="contained" size="small" color="primary" className={classes.buttonComment}>
            Post
          </Button>
        </div>
      </div>

      <Typography className={classes.comment} variant="body1">
        <b>{comments[ 0 ].author.nickname}</b>
        <br/>
        <span className={classes.text}>{comments[ 0 ].text}</span>
      </Typography>

      <Typography className={classes.comment} variant="body1">
        <b>{comments[ 1 ].author.nickname}</b>
        <br/>
        <span className={classes.text}>{comments[ 1 ].text}</span>
      </Typography>
    </div>

  </div>;
}

export default withStyles( styles )( EventPage );
