import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    margin: 10,
  },
};

function ImageAvatars( props ) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="N A"
        src="https://www.jampakbooks.com/images/avatar.png"
        className={ classes.avatar }
        imgProps={{ style: { width: "50%", height: "50%" } }}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( ImageAvatars );
