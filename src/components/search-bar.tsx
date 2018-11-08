import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import withStyles from "@material-ui/core/styles/withStyles";
import { Event } from "../data/types";
import { search } from "../helpers/search";
import { navigate } from "../helpers/router";

const styles = theme => ( {
  root: {
    height: 48,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.15)"
  },
  grow: {
    flexGrow: 1
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
    display: "flex"
  },
  container: {
    position: "relative",
    width: "100%"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
} );

type SearchBarProps = {
  onRequestSearch: ( value: string, suggestion: Event | null ) => void,
  classes: any,
  className: string
};

type SearchBarState = {
  focus: boolean,
  value: string,
  suggestions: any[]
};

const getSuggestionValue = ( evt: Event ) => evt.title;

const renderSuggestionsContainer = ( options: any ) => <Paper {...options.containerProps} square>{options.children}</Paper>;

function renderSuggestion( suggestion: Event, { isHighlighted }: { isHighlighted: boolean } ) {
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>{suggestion.title}</div>
    </MenuItem>
  );
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {

  private justSelectedSuggestion: boolean;

  constructor( props: SearchBarProps ) {
    super( props );
    this.state = {
      focus: false,
      value: "",
      suggestions: []
    };
    this.justSelectedSuggestion = false;
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

  handleCancel = () => {
    this.setState( { value: "" } );
  }

  handleKeyUp = ( e: any ) => {
    if ( e.charCode === 13 || e.key === "Enter" ) {
      if ( this.justSelectedSuggestion ) {
        this.justSelectedSuggestion = false;
      } else {
        this.handleRequestSearch();
      }
    }
  }

  handleChange = ( _: any, { newValue, method }: { newValue: any, method: string } ) => {
    if ( method !== "down" && method !== "up" ) {
      this.setState( {
        value: newValue
      } );
    }
  }

  handleRequestSearch = () => {
    this.props.onRequestSearch( this.state.value, null );
  }

  handleSuggestionsFetchRequested = ( { value }: { value: string } ) => {
    this.setState( {
      suggestions: search( value )
    } );
  };

  handleSuggestionsClearRequested = () => {
    this.setState( {
      suggestions: []
    } );
  };

  handleSuggestionSelected = ( _: any, { suggestion, suggestionValue }: { suggestion: Event, suggestionValue: string } ) => {
    this.props.onRequestSearch( suggestionValue, suggestion );
    this.justSelectedSuggestion = true;
  }

  renderInputComponent = ( inputProps: any ) => {

    const { value } = inputProps;
    const { classes } = this.props;
    const disabled = false;

    return <div className={classes.searchContainer}>
      <Input {...inputProps}/>
      <div className={classes.grow}></div>
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
    </div>;
  };

  render() {
    const { value } = this.state;
    const { classes, className } = this.props;

    return (
      <Paper className={`${classes.root} ${className || ""}`}>
        <Autosuggest
          focusInputOnSuggestionClick={false}
          inputProps={{
            value: value,
            onChange: this.handleChange,
            onKeyUp: this.handleKeyUp,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            className: classes.input,
            disableUnderline: true
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          suggestions={this.state.suggestions}
          getSuggestionValue={getSuggestionValue}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          onSuggestionSelected={this.handleSuggestionSelected}
          renderSuggestion={renderSuggestion}
          renderInputComponent={this.renderInputComponent}
          renderSuggestionsContainer={renderSuggestionsContainer}
        />
      </Paper>
    );
  }
}

export default withStyles( styles )( SearchBar );
