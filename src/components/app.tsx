import React from "react";
import AppBar from "../containers/app-bar";
import LeftDrawer from "./left-drawer";
import RightAvancedSearchDrawer from "../containers/right-advanced-search-drawer";
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

  toggleRightAvancedSearchDrawer = ( open: null | boolean ) => {
    this.setState( state => ( {
      rightAvancedSearchDrawer: open == null ? !state.rightAvancedSearchDrawer : open,
    } ) );
  };

  render() {
    return <>
      <AppBar
        onLeftDrawerToggle={() => this.toggleLeftDrawer( null )}
        onRightDrawerToggle={() => this.toggleRightAvancedSearchDrawer( null )}
      />
      <LeftDrawer
        open={this.state.leftDrawer}
        onOpen={() => this.toggleLeftDrawer( true )}
        onClose={() => this.toggleLeftDrawer( false )}
      />
      <RightAvancedSearchDrawer
        open={this.state.rightAvancedSearchDrawer}
        onOpen={() => this.toggleRightAvancedSearchDrawer( true )}
        onClose={() => this.toggleRightAvancedSearchDrawer( false )}
      />
      <Main />
    </>;
  }
}

export default App;
