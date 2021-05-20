import React from 'react';
import { Link } from "react-router-dom";
import Header from '../header';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Scrollbar, Pagination } from 'swiper';

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

import ProductImage from '../../resources/images/product-pic.png';
import styles from './style.scss';


// import Swiper core and required modules
// import SwiperCore, {
// 	Pagination
// } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Test() {
	return (
		<>
			<Header>
				<Link to="/home/">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.8262 1.51621L4.33944 10L12.8262 18.4838" stroke="#016F34" stroke-width="2" stroke-linecap="round" />
					</svg>
				</Link>
				<span className={`${styles['product-badge']}`}>Bestseller</span>
			</Header>
			<div className="container">
				<img src={ProductImage} alt="Logo" className={`${styles['product-image']}`} />

				<div className="checkbox-favorite">
					<input type="checkbox" />
					<span className="chk-overlay">
						<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.1757 2.63712L12 2.79555L11.8488 2.65308C10.5379 1.47073 9.42787 0.392822 6.93106 0.399953C3.32805 0.410243 0.638934 3.69792 0.600496 7.27148C0.572449 9.9261 1.67749 12.0183 4.16895 14.6108C4.48066 14.9352 4.83063 15.2786 5.21896 15.6412L5.83025 16.1996C5.93693 16.2951 6.04602 16.3918 6.15751 16.4897L6.85529 17.0915C7.09751 17.297 7.34936 17.5073 7.61085 17.7225L8.42427 18.3828L9.29565 19.0724L10.2251 19.7915L11.2126 20.5403C11.6738 20.8867 12.3261 20.8865 12.787 20.5398L13.826 19.7514C13.9939 19.6227 14.1592 19.4955 14.3218 19.3696L15.2663 18.6307L16.1479 17.9246C16.4313 17.6948 16.7042 17.4704 16.9667 17.2514L17.7228 16.6108L18.4163 16.0027C18.9682 15.5095 19.455 15.05 19.8769 14.624C22.3238 12.1532 23.4281 9.98098 23.3995 7.27216C23.361 3.69814 20.666 0.399953 17.0628 0.399953C14.6662 0.399953 13.4305 1.53906 12.1757 2.63712Z" fill="#DEE1E3" />
						</svg>
					</span>
					<span className="chk-checked-overlay">
						<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.1757 2.63712L12 2.79555L11.8488 2.65308C10.5379 1.47073 9.42787 0.392822 6.93106 0.399953C3.32805 0.410243 0.638934 3.69792 0.600496 7.27148C0.572449 9.9261 1.67749 12.0183 4.16895 14.6108C4.48066 14.9352 4.83063 15.2786 5.21896 15.6412L5.83025 16.1996C5.93693 16.2951 6.04602 16.3918 6.15751 16.4897L6.85529 17.0915C7.09751 17.297 7.34936 17.5073 7.61085 17.7225L8.42427 18.3828L9.29565 19.0724L10.2251 19.7915L11.2126 20.5403C11.6738 20.8867 12.3261 20.8865 12.787 20.5398L13.826 19.7514C13.9939 19.6227 14.1592 19.4955 14.3218 19.3696L15.2663 18.6307L16.1479 17.9246C16.4313 17.6948 16.7042 17.4704 16.9667 17.2514L17.7228 16.6108L18.4163 16.0027C18.9682 15.5095 19.455 15.05 19.8769 14.624C22.3238 12.1532 23.4281 9.98098 23.3995 7.27216C23.361 3.69814 20.666 0.399953 17.0628 0.399953C14.6662 0.399953 13.4305 1.53906 12.1757 2.63712Z" fill="#E66A68" />
						</svg>
					</span>
				</div>
			</div>

			<div className={`container ${styles['product-content']}`}>
				<p>Tout Patisserie</p>
				<h3>Macaron Naturel Collectie 8 Stuks</h3>
				<span>0.75 kg</span>
				<h4>€11.25</h4>
			</div>

			<div className={`container ${styles['option-card']}`}>
				<select>
					<option value="Select option">Select option</option>
					<option value="option1">option1</option>
					<option value="option1">option2</option>
					<option value="option1">option3</option>
					<option value="option1">option4</option>
					<option value="option1">option5</option>
				</select>
			</div>

			<div className={`container ${styles['submit-card']}`}>
				<button>Add to Cart</button>
			</div>

			{/* <Swiper pagination={true} className="mySwiper">
				<SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
			</Swiper> */}

		</>
	);
}

