import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";

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

function Search( props: any ) {

  const {
    classes,
    inputProps,
    onRightAdvancedSearchDrawerToggle,
    handleCancel,
    handleRequestSearch
  } = props;
  const { value } = inputProps;
  const disabled = false;

  return <div className={classes.searchContainer}>
    <Input {...inputProps}/>
    <div className={classes.grow}></div>
    <IconButton
      onClick={handleCancel}
      classes={{
        root: `${classes.iconButton} ${value === "" ? classes.iconButtonHidden : ""}`,
        disabled: classes.iconButtonDisabled
      }}
      disabled={disabled}
    >
      <ClearIcon classes={{ root: classes.icon }} />
    </IconButton>
    <IconButton
      onClick={handleRequestSearch}
      classes={{
        root: classes.iconButton,
        disabled: classes.iconButtonDisabled
      }}
      disabled={disabled}
    >
      <SearchIcon classes={{ root: classes.icon }} />
    </IconButton>
    <IconButton
      onClick={onRightAdvancedSearchDrawerToggle}
      classes={{
        root: classes.iconButton,
        disabled: classes.iconButtonDisabled
      }}
      disabled={disabled}
    >
      <FilterIcon classes={{ root: classes.icon }} />
    </IconButton>
  </div>;
}

export default withStyles( styles )( Search );
