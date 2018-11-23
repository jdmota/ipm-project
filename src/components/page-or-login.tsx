import React from "react";
import { connect } from "react-redux";
import SignInPage from "./signIn-page";

function PageOrLogin( props: any ) {
  const { reversed, children } = props;
  const { loggedInUser } = props.users;

  return <>
    {
      reversed ?
        ( loggedInUser ? <p>Already logged in!</p> : children ) :
        ( loggedInUser ? children : <SignInPage dontRedirect /> )
    }
  </>;
}

function mapStateToProps( state ) {
  return {
    users: state.users
  };
}

export default connect( mapStateToProps )( PageOrLogin );
