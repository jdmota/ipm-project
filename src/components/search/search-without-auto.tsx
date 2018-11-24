import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Search from "./search";

const styles = theme => ( {

} );

class SearchWihoutAutoComplete extends React.Component<any, any> {

  constructor( props ) {
    super( props );
    this.state = {
      value: ""
    };
  }

  handleCancel = () => {
    this.setState( { value: "" } );
  }

  handleKeyUp = ( e: any ) => {
    if ( e.charCode === 13 || e.key === "Enter" ) {
      this.handleRequestSearch();
    }
  }

  handleChange = ( e: any ) => {
    this.setState( {
      value: e.target.value
    } );
  }

  handleRequestSearch = () => {
    this.props.onRequestSearch( this.state.value.trim(), null );
  }

  render() {

    const { classes } = this.props;

    return <Search
      variant="black"
      inputProps={{
        value: this.state.value,
        onChange: this.handleChange,
        onKeyUp: this.handleKeyUp,
        className: classes.input,
        disableUnderline: false
      }}
      onRightDrawerToggle={this.props.onRightDrawerToggle}
      handleCancel={this.handleCancel}
      handleRequestSearch={this.handleRequestSearch}
    />;
  }

}

export default withStyles( styles )( SearchWihoutAutoComplete );
