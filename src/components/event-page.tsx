import React from "react";
import { Event } from "src/data/types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  description: {
    top: 20,
    rigth: 0,
    position: "fixed"
  }
};

/**
 * Events page
 * primeira div - slideshow
 * segunda div - descricao
 * terceira div - comentarios
 * @param props
 * @returns
 */
function EventPage( props: {event: Event} ) {

  const eventTitle = props.event.title;
  const eventDescription = props.event.description;
  const eventDate = props.event.date;
  const eventLocation = props.event.location;
  const eventComments = props.event.comments;
  const eventPrice = props.event.priceUnit;

  return <div>
    <div>
      <Typography variant="h3" color="inherit">
        {eventTitle}
      </Typography>

    </div>

    <div>
      <Button>{eventPrice}</Button>
    </div>

    <div>
      <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          "aria-label": "Description",
        }}
      />
    </div>
  </div>;
}

export default withStyles( styles )( EventPage );
