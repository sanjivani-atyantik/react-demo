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
import Reward from '../../resources/svg-icons/reward.svg';

import styles from './style.scss';

export default function AvailableRewards({ children }) {
	return (
		<>
      <div className={`${styles['heading-section']}`}>
        <h2>Available Rewards</h2>
        <div className={`${styles['reward-section']}`}>
          <span className={`${styles.value}`}>329</span>
          <img src={Reward} alt="Reward" className={`${styles['reward-icon']}`} />
        </div>
      </div>
      <div className={`${styles.row}`}>
        <div className={`${styles.col}`}>
          <Product
            img={Img6}
            name='Reward'
            catName='Strawberry Banana'
            tagName='Hybrid'
            price='$40-$75'
            tagClassName="d-none"
            rewardvalue='300'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img7}
            name='Reward'
            catName='Kiva Dark Chocolate Bar'
            tagName='Indica'
            price='1/8 | $30.00'
            tagClassName="d-none"
            rewardvalue='300'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img8}
            name='Reward'
            catName='Good Flower Peach Ozz Pre-Pre'
            tagName='Sativa'
            price='1/8 | $35.00'
            tagClassName="d-none"
            rewardvalue='150'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img1}
            name='Reward'
            catName='Hybrid'
            tagName='Hybrid'
            price='$40-$75'
            tagClassName="d-none"
            rewardvalue='300'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img2}
            name='Reward'
            catName='Charge'
            tagName='Indica'
            price='1/8 | $30.00'
            tagClassName="d-none"
            rewardvalue='300'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img3}
            name='Reward'
            catName='Strawberry Banana'
            tagName='Sativa'
            price='1/8 | $35.00'
            tagClassName="d-none"
            rewardvalue='150'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img4}
            name='Reward'
            catName='Hybrid'
            tagName='Hybrid'
            price='$40-$75'
            tagClassName="d-none"
            rewardvalue='300'
          />
        </div>
        <div className={`${styles.col}`}>
          <Product
            img={Img5}
            name='Reward'
            catName='Charge'
            tagName='Indica'
            price='1/8 | $30.00'
            tagClassName="d-none"
            rewardvalue='300'
          />
        </div>
      </div>
		</>
	);
}

