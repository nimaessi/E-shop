import React,{ useState,} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from '../styles/style.module.css';
import img12 from '../img/img12.jpg';
import img121 from '../img/img121.jpg';
import img123 from '../img/img123.jpg';
import Image from 'react-bootstrap/Image';
const Slider = () => {

    const [index, setIndex] = useState(0);
    const images = [{image : img12},{image : img121},{image : img123}];
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
    
         <Carousel className={style.darkBg} activeIndex={index} onSelect={handleSelect}>
          {
            images.map((image) =>{
              return(
                  <Carousel.Item className={style.sliderItem} key={Math.random()}>
                  <Image fluid
                    className={`d-block ${style.sliderPic} `}
                    src={image.image}
                    alt="product"
                  />
                  <Carousel.Caption>
                    <h3 className={`${style.KnewaveFont} bg-dark w-50 mx-auto`}>New collection 2023</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              )

            })
          }
        </Carousel>
      
      );

}
export default Slider;