// From https://github.com/Polymer/pwa-helpers/blob/master/src/router.ts

type Cb = ( location: Location, event: Event | null ) => void;

let callback: Cb | void;
let previousPage = "";

function historyPush( href: string ) {
  const pathname = location.pathname.replace( /\/+$/, "" ) || "/";
  if ( ![ "/sign-in", "/sign-up" ].some( p => pathname.startsWith( p ) ) ) {
    previousPage = location.href;
  }
  window.history.pushState( {}, "", href );
  console.log( "Navigating to:", href, "Previous page:", previousPage );
}

export function navigate( href: string ) {
  if ( href !== location.href ) {
    historyPush( href );
    if ( callback ) {
      callback( location, null );
    }
  }
}

export function navigateBack() {
  if ( previousPage ) {
    navigate( previousPage );
  } else {
    navigate( "/" );
  }
}

export function navigateLogout() {
  const pathname = location.pathname.replace( /\/+$/, "" ) || "/";
  if ( [ "/buy", "/ticket-exchange" ].some( p => pathname.startsWith( p ) ) ) {
    navigate( "/" );
  }
}

// Expose navigate function
window.navigate = navigate;

export function installRouter( locationUpdatedCallback: Cb ) {
  callback = locationUpdatedCallback;

  document.body.addEventListener( "click", e => {
    if ( e.defaultPrevented || e.button !== 0 ||
        e.metaKey || e.ctrlKey || e.shiftKey ) return;

    const anchor = e.composedPath().filter(
      n => ( n as HTMLElement ).tagName === "A"
    )[ 0 ] as HTMLAnchorElement | undefined;
    if ( !anchor || anchor.target ||
        anchor.hasAttribute( "download" ) ||
        anchor.getAttribute( "rel" ) === "external" ) return;

    const href = anchor.href;
    if ( !href || href.indexOf( "mailto:" ) !== -1 ) return;

    const location = window.location;
    const origin = location.origin || location.protocol + "//" + location.host;
    if ( href.indexOf( origin ) !== 0 ) return;

    e.preventDefault();
    if ( href !== location.href ) {
      historyPush( href );
      locationUpdatedCallback( location, e );
    }
  } );

  window.addEventListener( "popstate", e => locationUpdatedCallback( window.location, e ) );
  locationUpdatedCallback( window.location, null /* event */ );
}
