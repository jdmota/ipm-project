import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/icons/CheckBox";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const styles = theme => ( {
  root: {
    display: "block",
    maxWidth: 500,
    height: 120,
    marginTop: 15,
    marginBottom: 0,
    cursor: "pointer",
    textDecoration: "none"
  },
  card: {
    maxWidth: 500,
    // height: 227
    marginTop: 10,
    marginBottom: 10,
    cursor: "pointer",
    userSelect: "none"
  },
  selected: {
    border: "3px #c6edef solid",
  },
  image: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: 110
  },
  force: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
} );

function PaperSheet( props: any ) {
  const { classes, onClick, selected } = props;
  const { title, images } = props.event;
  const { owner, date } = props.ticket;

  const defaultImage = "https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547";

  return (
    <Card className={classes.card } onClick={onClick}>
      <CardHeader
        className={ ( selected ? classes.selected : "" )}
        avatar={
          <div className={classes.image}>
            <img height={110} src={images[ 0 ] || defaultImage}/>
          </div>
        }
        title={title}
        subheader={`${owner} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
        action={
          selected ? <Checkbox /> : null
        }
      />
    </Card>
  );
}

export default withStyles( styles )( PaperSheet );
