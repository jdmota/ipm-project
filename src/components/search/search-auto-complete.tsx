import React from "react";
import Autosuggest from "react-autosuggest";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "./search";
import { Event } from "../../data/types";
import { search } from "../../helpers/search";

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
  fullMode: boolean,
  onRequestSearch: ( value: string, suggestion: Event | null ) => void,
  classes: any,
  className: string
  onRightDrawerToggle: () => void
  handleLeaveFullMode: () => void
};

type SearchBarState = {
  focus: boolean,
  value: string,
  suggestions: any[],
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

class SearchBarWithAutoComplete extends React.Component<SearchBarProps, SearchBarState> {

  private justSelectedSuggestion: boolean;
  private input: any;

  constructor( props: SearchBarProps ) {
    super( props );
    this.state = {
      focus: false,
      value: "",
      suggestions: [],
    };
    this.justSelectedSuggestion = false;
    this.input = null;
  }

  handleFocus = () => {
    this.setState( { focus: true } );
  }

  handleBlur = event => {
    const { relatedTarget } = event;

    if ( !relatedTarget || relatedTarget.parentNode.id !== "search" ) {
      this.props.handleLeaveFullMode();
    }

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
    this.input.blur();
    this.props.onRequestSearch( this.state.value.trim(), null );
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
    this.props.onRequestSearch( suggestionValue.trim(), suggestion );
    this.justSelectedSuggestion = true;
  }

  renderInputComponent = ( inputProps: any ) => {
    return <Search
      fullMode={this.props.fullMode}
      handleLeaveFullMode={this.props.handleLeaveFullMode}
      onRightDrawerToggle={this.props.onRightDrawerToggle}
      inputProps={inputProps}
      handleCancel={this.handleCancel}
      handleRequestSearch={this.handleRequestSearch}
    />;
  }

  componentDidUpdate( prevProps ) {
    if ( this.props.fullMode !== prevProps.fullMode ) {
      if ( this.props.fullMode ) {
        this.input.focus();
      } else {
        this.input.blur();
      }
    }
  }

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
            disableUnderline: true,
            inputRef: input => { this.input = input; }
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

export default withStyles( styles )( SearchBarWithAutoComplete );
