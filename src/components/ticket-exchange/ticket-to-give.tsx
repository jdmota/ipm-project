import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Search from "../search/search";

const styles = theme => ( {
  ticketToGive: {

  }
} );

class TicketToGive extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {
    return <div>
      <Typography variant="h4" color="inherit">
        Ticket Exchange
      </Typography>
      <Search
        variant="black"
        inputProps={{}}
        onRightDrawerToggle={() => null}
        handleCancel={() => null}
        handleRequestSearch={() => null}
      />
    </div>;
  }

}

export default withStyles( styles )( TicketToGive );
