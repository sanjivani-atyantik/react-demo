import React from 'react';
import { Link } from "react-router-dom";
import Product from "../product";
//img
import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.png';
import Img6 from './images/img6.png';
import Img7 from './images/img7.png';
import Img8 from './images/img8.png';

import styles from './style.scss';

export default function ProductSlider({ children }) {
	return (
		<>
      <div className={`${styles['heading-section']}`}>
        <h2>Beverages</h2>
        <Link 
          to="/" 
          className={`${styles.link} h5`}
        >
          See All 14
        </Link>
      </div>
      <div className={`${styles.row}`}>
        <div className={`${styles.col}`}>
          <Product
            img={Img4}
            name='Lowell Farms'
            catName='Hybrid'
            tagName='Hybrid'
            price='$40-$75'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img5}
            name='Canndescent'
            catName='Charge'
            tagName='Indica'
            price='1/8 | $30.00'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img6}
            name='Bloom Farmss'
            catName='Strawberry Banana'
            tagName='Sativa'
            price='1/8 | $35.00'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img7}
            name='Lowell Farms'
            catName='Hybrid'
            tagName='Hybrid'
            price='$40-$75'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img8}
            name='Canndescent'
            catName='Charge'
            tagName='Indica'
            price='1/8 | $30.00'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img1}
            name='Bloom Farmss'
            catName='Strawberry Banana'
            tagName='Sativa'
            price='1/8 | $35.00'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img2}
            name='Lowell Farms'
            catName='Hybrid'
            tagName='Hybrid'
            price='$40-$75'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img3}
            name='Canndescent'
            catName='Charge'
            tagName='Indica'
            price='1/8 | $30.00'
            tagClassName="d-none"
            rewardClassName="d-none"
          />
        </div>
      </div>
		</>
	);
}

