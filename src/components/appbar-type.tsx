import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: false,
  };

  handleChange = ( event, value ) => {
    this.setState( { value } );

  };

  render() {
    const { classes } = this.props;

    // se nao quisermos nenhuma tab seleccionada meter value a false

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Festivals" />
          <Tab label="Concerts" />
          <Tab label="Theathers" />
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( CenteredTabs );
