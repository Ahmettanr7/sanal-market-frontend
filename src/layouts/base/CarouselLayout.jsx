import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'

export default function CarouselLayout() {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div>
           <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height:"20rem"}}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629209230/eCommerce/kozmetik_wr7tpx.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"20rem"}}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629328788/eCommerce/co_luuq0h.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"20rem"}}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629208940/eCommerce/abur_apirxz.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
