import React from "react";
import AppBar from "./app-bar";
import LeftDrawer from "./left-drawer";
import Main from "./main";

type AppState = {
  leftDrawer: boolean,
  rightAvancedSearchDrawer: boolean
};

class App extends React.Component<{}, AppState> {

  state = {
    leftDrawer: false,
    rightAvancedSearchDrawer: false
  };

  toggleLeftDrawer = ( open: null | boolean ) => {
    this.setState( state => ( {
      leftDrawer: open == null ? !state.leftDrawer : open,
    } ) );
  };

  toggleAvancedSearchDrawer = ( open: null | boolean ) => {
    this.setState( state => ( {
      rightAvancedSearchDrawer: open == null ? !state.rightAvancedSearchDrawer : open,
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
      right
      <Main />
    </>;
  }
}

export default App;
