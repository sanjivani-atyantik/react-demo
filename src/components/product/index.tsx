import React from 'react';
import { Link } from "react-router-dom";
import Button from "../button";
import Tag from "../tag";
import { getExtraClasses } from '../../utils/common';
//img
import Plus from '../../resources/svg-icons/plus.svg';
import Reward from '../../resources/svg-icons/reward-gray.svg';
//button css
import btnstyles from '../button/style.scss';
import tagstyles from '../tag/style.scss';
import styles from './style.scss';

export default function Product(props) {
  const {
    className,
    tagClassName,
    valueClassName,
    rewardClassName,
    disabled,
    catName,
    tagName,
    img,
    value,
    name,
    price,
    rewardvalue,
  } = props;
  let extraClasses = getExtraClasses(styles,className);
  let tagClasses = getExtraClasses(tagstyles, tagClassName);
  let valueClasses = getExtraClasses(styles, valueClassName);
  let rewardClasses = getExtraClasses(styles, rewardClassName);
	return (
		<>
      <div className={`${styles['product-block']} ${extraClasses}`}>
        <div className={`${styles['product-top']}`}>
          <Link to="/" className={`${styles['product-img']}`}>
            <img src={img} alt="Product" />
          </Link>
          <div className={`${styles['add-btn']}`}>
            <Button className="btn-link btn-link-btn btn-circle">
              <img src={Plus} alt="Add to cart" className={`${btnstyles['svg-icon']}`} />
              <span className={`${valueClasses}`}>{value}</span>
            </Button>
          </div>
        </div>
        <div className={`${styles['product-content']}`}>
          <Tag name={tagName} className={`${tagClasses}`} />
          <span className={`${styles['product-name']} h4`}>{name}</span>
          <span className={`${styles['product-cat']} h4`}>{catName}</span>
          <span className={`${styles['product-price']} h4`}>{price}</span>
          <span className={`${styles['reward-value']} h4 ${rewardClasses}`}>
            {rewardvalue}
            <img src={Reward} alt="Reward" className={`${styles['sm-icon']}`} />
          </span>
        </div>
      </div>
		</>
	);
}

