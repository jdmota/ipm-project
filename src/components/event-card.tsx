import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
} );

function PaperSheet( props: any ) {
  const { classes } = props;
  const { url, title, description, type, location, date, images } = props.event;

  const defaultImage = "https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547";

  return (
    <a className={classes.root} href={url}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.force}
          avatar={
            <div className={classes.image}>
              <img height={110} src={images[ 0 ] || defaultImage}/>
            </div>
          }
          title={title}
          subheader={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
        />
      </Card>
    </a>
  );
}

export default withStyles( styles )( PaperSheet );
