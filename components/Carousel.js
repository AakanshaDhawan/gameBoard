import React, { useState } from "react";
import Carousel from "react-multi-carousel";


function Card(props) {
  const { link, isMoving } = props;
  const alt_text = "images";
  return (
    <div
      className="card"
      style={{
        // margin: "10px 0px",
        border: "none",
        marginTop:0,
      }}
      onClick={(e) => {
        if (isMoving) {
          e.preventDefault()
        }
      }}
    >
      {/* <img
        draggable={false}
        
        src={link}
        alt={alt_text}
      /> */}
      <img
          className="carousel-image"
          // layout="fill"
          width={1}
          height={1}
          // layout="responsive"
          src={link}
          alt={alt_text}
          draggable={false}
        />
    </div>
  );
}
export default function Carousels() {
  const [isMoving, setisMoving] = useState(false)
  const imagesArray = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image7.jpg",
    // "/images/image8.jpg",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 75,
    },
  };
  return (
    <div
      className="container-fluid"
      style={{ padding:0,left: "0", marginBottom: "30px" }}
    >
      <Carousel
        // swipeable
        // draggable
        ssr
      infinite
      // partialVisbile
      deviceType="desktop"
      itemClass="image-item"
      responsive={responsive}
      // autoPlay
      // autoPlaySpeed={1000}
        // responsive={responsive}
        // ssr
        // infinite = {true}
        // autoPlay
        // autoPlaySpeed={2000}
        // partialVisible
        // beforeChange={() => setisMoving(true)}
        // afterChange={() => setisMoving(false)}
        // containerClass="first-carousel-container"
        // deviceType="desktop"
        // itemClass="image-item"
      >
        {imagesArray.map((imagePosition, idx) => (
          <Card key={idx} isMoving={isMoving} link={imagePosition} />
        ))}
      </Carousel>
    </div>
  );
}
