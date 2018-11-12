import React from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Event } from "../data/types";

const theme = createMuiTheme( {
  palette: {
    primary: { main: "#11cb5f" },
  },
} );

const styles = theme => ( {
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    // backgroundColor: "#a4a4a4",
    width: 200,
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
} );

function PaperSheet( props: {classes: any, event: Event, image: string} ) {
  const { classes } = props;
  const { title, description, date, location, type } = props.events;

  return (
    <div className={classes.size}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.force}
          avatar={
            <div className={classes.image}>
              <img height={110} src={ props.image }/>
            </div>
          }

          title={title}

          subheader={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
        />
      </Card>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( PaperSheet );
