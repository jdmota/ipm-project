// From https://github.com/Polymer/pwa-helpers/blob/master/src/router.ts

type Cb = ( string, event: Event | null ) => void;

let callback: Cb | void;
let previousPage = "";

export function getPathname() {
  return location.pathname.replace( /^\/ipm-project/, "" ).replace( /\/+$/, "" ) || "/";
}

function historyPush( wanted: string ) {
  const wantedPath = location.origin === "https://jdmota.github.io" ? `/ipm-project${wanted}` : wanted;

  if ( wantedPath === location.pathname ) {
    return false;
  }

  const currPath = getPathname();
  if ( ![ "/sign-in", "/sign-up" ].some( p => currPath.startsWith( p ) ) ) {
    previousPage = currPath;
  }

  window.history.pushState( {}, "", wantedPath );
  console.log( "Navigating to:", wantedPath, "Previous page:", previousPage );

  return true;
}

export function navigate( pathname: string ) {
  if ( historyPush( pathname ) && callback ) {
    callback( getPathname(), null );
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
  const pathname = getPathname();
  if ( [ "/buy", "/ticket-exchange" ].some( p => pathname.startsWith( p ) ) ) {
    navigate( "/" );
  }
}

// Expose navigate function
window.navigate = navigate;

export function installRouter( cb: Cb ) {
  callback = cb;

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
    if ( href.indexOf( location.origin || location.protocol + "//" + location.host ) !== 0 ) return;

    e.preventDefault();
    navigate( anchor.pathname );
  } );

  window.addEventListener( "popstate", e => cb( getPathname(), e ) );
  cb( getPathname(), null );
}
