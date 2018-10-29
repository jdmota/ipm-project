import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  root: {
    height: 48,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.15)"
  },
  iconButton: {
    color: "white",
    transform: "scale(1, 1)",
    transition: "transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)"
  },
  iconButtonHidden: {
    transform: "scale(0, 0)",
    "& > $icon": {
      opacity: 0
    }
  },
  iconButtonDisabled: {
    opacity: 0.38
  },
  icon: {
    transition: "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)"
  },
  input: {
    width: "100%",
    color: "white"
  },
  searchContainer: {
    margin: "auto 16px",
    width: "calc(100% - 48px - 32px)" // 48px button + 32px margin,
  }
};

type SearchBarProps = {
  onChange: ( value: string ) => void,
  onRequestSearch: ( value: string ) => void,
  classes: any,
  className: string
};

type SearchBarState = {
  focus: boolean,
  value: string
};

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor( props: SearchBarProps ) {
    super( props );
    this.state = {
      focus: false,
      value: ""
    };
  }

  handleFocus = () => {
    this.setState( { focus: true } );
  }

  handleBlur = () => {
    this.setState( { focus: false } );
    if ( this.state.value.trim().length === 0 ) {
      this.setState( { value: "" } );
    }
  }

  handleInput = ( e: any ) => {
    this.setState( { value: e.target.value } );
    if ( this.props.onChange ) {
      this.props.onChange( e.target.value );
    }
  }

  handleCancel = () => {
    this.setState( { value: "" } );
  }

  handleKeyUp = ( e: any ) => {
    if ( e.charCode === 13 || e.key === "Enter" ) {
      this.handleRequestSearch();
    }
  }

  handleRequestSearch = () => {
    if ( this.props.onRequestSearch ) {
      this.props.onRequestSearch( this.state.value );
    }
  }

  render() {
    const { value } = this.state;
    const { classes, className } = this.props;

    const disabled = false;

    return (
      <Paper className={`${classes.root} ${className || ""}`}>
        <div className={classes.searchContainer}>
          <Input
            onBlur={this.handleBlur}
            value={value}
            onChange={this.handleInput}
            onKeyUp={this.handleKeyUp}
            onFocus={this.handleFocus}
            fullWidth
            className={classes.input}
            disableUnderline
            disabled={disabled}
          />
        </div>
        <IconButton
          onClick={this.handleCancel}
          classes={{
            root: `${classes.iconButton} ${value === "" ? classes.iconButtonHidden : ""}`,
            disabled: classes.iconButtonDisabled
          }}
          disabled={disabled}
        >
          <ClearIcon classes={{ root: classes.icon }} />
        </IconButton>
        <IconButton
          onClick={this.handleRequestSearch}
          classes={{
            root: classes.iconButton,
            disabled: classes.iconButtonDisabled
          }}
          disabled={disabled}
        >
          <SearchIcon classes={{ root: classes.icon }} />
        </IconButton>
      </Paper>
    );
  }
}

export default withStyles( styles )( SearchBar );
