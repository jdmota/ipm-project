import React from "react";
import AppBar from "./app-bar";
import LeftDrawer from "./left-drawer";

type AppState = {
  leftDrawer: boolean
};

class App extends React.Component<{}, AppState> {

  state = {
    leftDrawer: false
  };

  toggleLeftDrawer = ( open: null | boolean ) => {
    this.setState( state => ( {
      leftDrawer: open == null ? !state.leftDrawer : open,
    } ) );
  };

  render() {
    return <>
      <AppBar
        onLeftDrawerToggle={() => this.toggleLeftDrawer( null )}
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
