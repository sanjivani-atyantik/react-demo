import React from 'react';
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Scrollbar } from 'swiper';

import Product from "../product";

import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.png';
import Img6 from './images/img6.png';
import Img7 from './images/img7.png';
import Img8 from './images/img8.png';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styles from './style.scss';

// install Swiper components
SwiperCore.use([Autoplay, Scrollbar]);
export default function ProductSlider({ children }) {
	return (
		<>
      <div
        className={`${styles['heading-section']}`}
      >
        <h2>Flower</h2>
        <Link to="/" className={`${styles.link} h5`}>
          See All 20
        </Link>
      </div>
      <div>
        <Swiper
          slidesPerView='auto'
          //autoplay={true}
          speed={1000}
          scrollbar={{ draggable: true }}
          className={`${styles['pad-2']}`}
        >
          <SwiperSlide>
            <Product
              img={Img1}
              value='1'
              name='Lowell Farms'
              catName='Hybrid'
              tagName='Hybrid'
              price='$40-$75'
              valueClassName="circle-value"
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img2}
              name='Canndescent'
              catName='Charge'
              tagName='Indica'
              price='1/8 | $30.00'
              tagClassName="tag-warning"
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img3}
              name='Bloom Farmss'
              catName='Strawberry Banana'
              tagName='Sativa'
              price='1/8 | $35.00'
              tagClassName="tag-light-blue"
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img4}
              name='Lowell Farms'
              catName='Hybrid'
              tagName='Hybrid'
              price='$40-$75'
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img5}
              name='Canndescent'
              catName='Charge'
              tagName='Indica'
              price='1/8 | $30.00'
              tagClassName="tag-warning"
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img6}
              name='Bloom Farmss'
              catName='Strawberry Banana'
              tagName='Sativa'
              price='1/8 | $35.00'
              tagClassName="tag-light-blue"
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img7}
              name='Lowell Farms'
              catName='Hybrid'
              tagName='Hybrid'
              price='$40-$75'
              rewardClassName="d-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              img={Img8}
              name='Canndescent'
              catName='Charge'
              tagName='Indica'
              price='1/8 | $30.00'
              tagClassName="tag-warning"
              rewardClassName="d-none"
            />
          </SwiperSlide>
        </Swiper>
      </div>
		</>
	);
}

