import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";


class PaymentPage extends React.Component<any, any> {


  render() {

    return <div style = {{ width: 24, height: 24 }}>
      <SvgIcon style = {{ width: 24, height: 24 }}><path d = "M15,5V12H9V5H15M15,3H9A2,2 0 0,0 7,5V14H17V5A2,2 0 0,0 15,3M22,10H19V13H22V10M5,10H2V13H5V10M20,15H4V21H6V17H18V21H20V15Z" /></SvgIcon>
    </div>;
  }
}

export default ( PaymentPage );
