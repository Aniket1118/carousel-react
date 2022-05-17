import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/Carouseldata";

function Carousel() {
  const [currImg, setImg] = useState(0);

  function backward() {
    setImg(currImg > 0 ? currImg - 1 : images.length - 1);
  }
  function forward() {
    setImg(currImg < images.length - 1 ? currImg + 1 : 0);
    
  }

  
  const moveDot = index => {
    setImg(index)
}

  // setInterval(forward,5000)

  return (
    <div className="Carousel">
      <div
        className="innerCarousel"
        style={{ backgroundImage: `url(${images[currImg].src})` }}
      >
        <div className="left" onClick={backward}>
          {" "}
          &#x2190;{" "}
        </div>
        <div className="center"></div>
        <div className="right" onClick={forward}>
          {" "}
          &#x2192;{" "}
        </div>
        {/* <div className="last">
     <div id="1" className="dot" onClick={imageDikha} ><span></span></div>
      <div id="2" className="dot" onClick={imageDikha} >  <span ></span></div>
       <div  className="dot"> <span ></span></div>
       <div  className="dot"> <span></span></div>
        </div> */}
        <div className="container-dots" >
            {Array.from({length:4}).map((item,index) => (
                <div className="dot"
                onClick={() =>moveDot(index) }
                 ></div>
            )
            )}
        </div>
      </div>
      
     
    </div>
    
  );
}

export default Carousel;
