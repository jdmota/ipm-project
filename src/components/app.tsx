import React from "react";
import AppBar from "./app-bar";
import LeftDrawer from "./left-drawer";
import RightDrawer from "./right-drawer";
import Main from "./main";

type AppState = {
  leftDrawer: boolean,
  rightDrawer: boolean
};

class App extends React.Component<{}, AppState> {

  state = {
    leftDrawer: false,
    rightDrawer: false
  };

  toggleLeftDrawer = ( open: null | boolean ) => {
    this.setState( state => ( {
      leftDrawer: open == null ? !state.leftDrawer : open,
    } ) );
  };

  toggleRightDrawer = ( open: null | boolean ) => {
    this.setState( state => ( {
      rightDrawer: open == null ? !state.rightDrawer : open,
    } ) );
  };

  render() {
    return <>
      <AppBar
        onLeftDrawerToggle={() => this.toggleLeftDrawer( null )}
        onRightDrawerToggle={() => this.toggleRightDrawer( null )}
      />
      <LeftDrawer
        open={this.state.leftDrawer}
        onOpen={() => this.toggleLeftDrawer( true )}
        onClose={() => this.toggleLeftDrawer( false )}
      />
      <RightDrawer
        open={this.state.rightDrawer}
        onOpen={() => this.toggleRightDrawer( true )}
        onClose={() => this.toggleRightDrawer( false )}
      />
      <Main
        onRightDrawerToggle={() => this.toggleRightDrawer( null )}
      />
    </>;
  }
}

export default App;
