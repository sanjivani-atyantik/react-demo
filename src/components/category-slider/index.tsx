import React from 'react';
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

//img
import Img1 from './images/4.png';
import Img2 from './images/3.png';
import Img3 from './images/2.png';
import Img4 from './images/1.png';

// Import Swiper styles
import 'swiper/swiper.scss';
import styles from './style.scss';

// install Swiper components
SwiperCore.use([Autoplay]);
export default function CategorySlider({children}) {
	return (
		<>
			<Swiper
      	slidesPerView='auto'
        autoplay={true}
        freeMode={true}
        speed={1000}
    	>
  			<SwiperSlide>
  				<Link to ="/" className={`${styles['category-block']}`}>
  					<span className={`${styles['category-img']}`}>
  						<img src={Img1} alt="Flower" />
  					</span>
  					<span className={`${styles['category-name']} h6`}>
  						Flower
  					</span>
  				</Link>
  			</SwiperSlide>
        <SwiperSlide>
          <Link to ="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img2} alt="Edibles" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Edibles
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to ="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img3} alt="Concentrates" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Concentrates
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to ="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img4} alt="Topicals" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Topicals
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img1} alt="Flower" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Flower
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img2} alt="Edibles" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Edibles
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img3} alt="Concentrates" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Concentrates
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/" className={`${styles['category-block']}`}>
            <span className={`${styles['category-img']}`}>
              <img src={Img4} alt="Topicals" />
            </span>
            <span className={`${styles['category-name']} h6`}>
              Topicals
            </span>
          </Link>
        </SwiperSlide>
      </Swiper>
		</>
	);
}

