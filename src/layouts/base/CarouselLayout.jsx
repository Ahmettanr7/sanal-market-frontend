import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import { Container } from '../../Styles';

export default function CarouselLayout() {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div>
          <Container initial={{ y: -700 }} animate={{ y: 0 }}>
           <Carousel className="border mt-5" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20210711/original/pngtree-nut-food-simple-black-banner-picture-image_1070844.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{position:"absolute", top:"0"}}>
        <h2 style={{color:"#A0522D", marginLeft:"50px"}}>TOPLAM <b>100 TL</b>  LİK KURUYEMİŞ ALIŞVERİŞİNE <b>JAVA</b> TÜRK KAHVESİ HEDİYE</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20210711/original/pngtree-fresh-fruit-and-vegetable-mall-poster-psd-picture-image_1126270.jpg"
          alt="Second slide"
        />

        <Carousel.Caption style={{position:"absolute", top:"30px"}}>
        <h2 style={{color:"green"}}>BİZDE BİR GÜN DEĞİL HER GÜN MANAV GÜNÜ !</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://www.tadacaksin.com/images/kampanya/banner-yeni-01-resimJS-10.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
        </div>
    )
}
