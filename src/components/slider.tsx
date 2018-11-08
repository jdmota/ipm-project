import React, { Component } from "react";
import Slide from "./slide";
import { withStyles } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";

type State = {
  currentIndex: number,
  images: string[],
  translateValue: number
};

type Props = {

};

const styles = {
  slider: {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    height: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },

  sliderWrapper: {
    position: "relative",
    height: "100%",
    width: "100%"
  },

  slide: {
    display: "inline-block",
    height: "100%",
    width: "100%"
  },

  arrow: {
    height: "50px",
    width: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9f9f9",
    borderRadius: "50%",
    cursor: "pointer",
    // transition: "transform ease-in .1s",
    "&:hover": {
      backgroundColor: "#bcbcbc"
    }
  },

  leftArrow: {
    position: "absolute",
    top: "50%",
    left: "25px",
    zIndex: "999",
    // color: "#fff"
  },

  rightArrow: {
    position: "absolute",
    top: "50%",
    right: "25px",
    zIndex: "999",
    // color: "#fff"
  }
};

class Slider extends React.Component <Props, State> {
  constructor( props ) {
    super( props );

    this.state = {
      images: [
        "http://nosalive.com/wp-content/uploads/2016/08/nos-alive-2017-tickets.jpg",
        "http://nosalive.com/wp-content/uploads/2015/07/11-jul-og.jpg",
        "http://nosalive.com/wp-content/uploads/2018/07/poster_541x426.png",
      ],
      currentIndex: 0, /* Default image index*/
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if ( this.state.currentIndex === 0 ) { return; }

    this.setState( prevState => ( {
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + ( this.slideWidth() )

    } ) );
  }

  goToNextSlide = () => {
    if ( this.state.currentIndex === this.state.images.length - 1 ) {
      return this.setState( {
        currentIndex: 0,
        translateValue: 0
      } );
    }

    this.setState( prevState => ( {
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -( this.slideWidth() )
    } ) );
  }

  slideWidth = () => {
    return document.querySelector( ".slide" ).clientWidth;
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.slider}>

        <div className={classes.sliderWrapper}
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {
            this.state.images.map( ( image, i ) => (
              <Slide className={classes.slide} key={i} image={image} />
            ) )
          }
        </div>

          ${ this.state.currentIndex > 0 &&
          <IconButton className={`${classes.arrow} ${classes.leftArrow}`} onClick={this.goToPrevSlide}>
            <ArrowBack/>
          </IconButton> }

          ${ this.state.currentIndex < this.state.images.length - 1 &&
          <IconButton className={`${classes.arrow} ${classes.rightArrow}`} onClick={this.goToNextSlide}>
            <ArrowForward/>
          </IconButton> }
      </div>
    );
  }
}

export default withStyles( styles )( Slider );
