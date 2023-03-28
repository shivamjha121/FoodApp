import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Carousal() {
  return (
   <div>
    <Carousel fade >
     
      <Carousel.Item>
        <img style={{maxHeight:"450px",filter:"brightness(40%)",objectFit:"contain !important"}}
          className="d-block w-100 "
          src="https://source.unsplash.com/random/900×700/?salad"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:"450px",filter:"brightness(40%)",objectFit:"contain !important"}}
          className="d-block w-100"
          src="https://source.unsplash.com/random/900×700/?burger"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:"450px",filter:"brightness(40%)",objectFit:"contain !important"}}
          className="d-block w-100"
          src="https://source.unsplash.com/random/900×700/?piza"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>


  )
}

export default Carousal