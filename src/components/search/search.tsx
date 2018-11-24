import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
  iconButtonBlack: {
    color: "black",
    transform: "scale(1, 1)",
    transition: "transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)"
  },
  iconButtonHidden: {
    display: "none",
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
  hide: {
    display: "none"
  },
  show: {
    display: "block"
  }
} );

function Search( props: any ) {

  const {
    classes,
    variant,
    fullMode,
    inputProps,
    onRightDrawerToggle,
    handleLeaveFullMode,
    handleCancel,
    handleRequestSearch
  } = props;
  const { value } = inputProps;
  const disabled = false;

  return <div className={classes.searchContainer} id="search">
    <IconButton
      onClick={handleLeaveFullMode}
      className={fullMode ? classes.iconButton : classes.hide}
    >
      <ArrowBackIcon className={classes.icon} />
    </IconButton>
    <Input {...inputProps} style={{ flexGrow: 1 }} />
    <IconButton
      onClick={handleCancel}
      classes={{
        root: `${variant === "black" ? classes.iconButtonBlack : classes.iconButton} ${value ? "" : classes.iconButtonHidden}`,
        disabled: classes.iconButtonDisabled
      }}
      disabled={disabled}
    >
      <ClearIcon classes={{ root: classes.icon }} />
    </IconButton>
    <IconButton
      onClick={handleRequestSearch}
      classes={{
        root: fullMode ? classes.hide : variant === "black" ? classes.iconButtonBlack : classes.iconButton,
        disabled: classes.iconButtonDisabled
      }}
      disabled={disabled}
    >
      <SearchIcon classes={{ root: classes.icon }} />
    </IconButton>
    {onRightDrawerToggle ? <IconButton
      onClick={onRightDrawerToggle}
      classes={{
        root: variant === "black" ? classes.iconButtonBlack : classes.iconButton,
        disabled: classes.iconButtonDisabled
      }}
      disabled={disabled}
    >
      <FilterIcon classes={{ root: classes.icon }} />
    </IconButton> : null}
  </div>;
}

export default withStyles( styles )( Search );
