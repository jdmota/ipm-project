import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = {};

class CenteredTabs extends React.Component<any, any> {
  state = {
    value: 0
  };

  handleChange = ( event, value ) => {
    this.setState( { value } );
  };

  render() {
    return (
      <Paper style={{ borderRadius: 0 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Highlights" />
          <Tab label="Festivals" />
          <Tab label="Concerts" />
          <Tab label="Theathers" />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles( styles )( CenteredTabs );
