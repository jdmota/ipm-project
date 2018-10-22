import React from "react";
import AppBar from "./app-bar";
import LeftDrawer from "./left-drawer";

class App extends React.Component {

  state = {
    leftDrawer: false
  };

  toggleLeftDrawer = ( open?: boolean ) => {
    this.setState( state => {
      return {
        leftDrawer: open == null ? !state.leftDrawer : open,
      };
    } );
  };

  render() {
    return <>
      <AppBar
        onLeftDrawerToggle={() => this.toggleLeftDrawer()}
      />
      <LeftDrawer
        open={this.state.leftDrawer}
        onOpen={() => this.toggleLeftDrawer( true )}
        onClose={() => this.toggleLeftDrawer( false )}
      />
    </>;
  }

}

export default App;
