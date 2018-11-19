import React from "react";
import { InlineDatePicker } from "material-ui-pickers";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ( {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  },
  textField: {
    flexBasis: 40
  }
} );

function DatePicker( props:any ) {
  const { classes, min, max, onMinChange, onMaxChange } = props;

  return (
    <div className="picker">
      <InlineDatePicker className={`${classes.margin} ${classes.textField}`}
        keyboard
        label="From"
        value={min}
        onChange={onMinChange}
        format="dd/MM/yyyy"
        mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
      />
      <InlineDatePicker className={`${classes.margin} ${classes.textField}`}
        keyboard
        label="To"
        value={max}
        onChange={onMaxChange}
        format="dd/MM/yyyy"
        mask={[ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ]}
      />
    </div>
  );
}

export default withStyles( styles )( DatePicker );
