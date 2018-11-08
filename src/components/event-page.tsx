import React from "react";
import { Event } from "src/data/types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";
import Slider from "./slider";

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
    width: "95%",
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
  comment: {

  },
  scroll: {
    marginTop: 15,
    paddingTop: 0,
    overflow: "auto",
    border: "blue"
  },
  image: {
    width: "95%",
    height: "95%",
    float: "left",
    position: "static",
    marginLeft: 10,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  geral: {
    position: "static"
  },
  container: {
    display: "flex"
  },
  imageContainer: {
    width: "70%"
  },
  descriptionContiner: {
    width: "30%"
  }

} );

function EventPage( props: { classes: any, event: Event } ) {

  const { title, description: eventDescription, comments, priceUnit } = props.event;
  const { classes } = props;

  return <div className={classes.container}>

    <div className={classes.imageContainer}>
      <Slider/>
      <Input
        placeholder="Here to comment"
        className={classes.comments}
        inputProps={{
          "aria-label": "Description",
        }}
      />
      <Typography className={classes.description} variant="subtitle1">
        {comments[ 0 ].author.nickname}
      </Typography>
    </div>

    <div className={classes.descriptionContiner}>
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
