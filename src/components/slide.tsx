import React from "react";

const Slide = ( { className, image }: { className: string, image: string } ) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className={`${className} slide`} style={styles}></div>;
};

export default Slide;
