import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
//buttons
import Button from "../button";
import BannerImg from './images/banner.png';
// Import Swiper styles
import 'swiper/swiper.scss';
import styles from './style.scss';
// install Swiper components
SwiperCore.use([Autoplay]);
export default function Banner({children}) {
	return (
		<>
			<div className={`${styles['banner-section']}`}>
				<Swiper 
					speed={1000} 
					slidesPerView={1}
					autoplay={true}
				>
					<SwiperSlide>
						<div className={`${styles['banner-img']}`} style={{ backgroundImage: `url(${BannerImg})` }} />
						<div className={`${styles['banner-content']} container`}>
							<h1 className={`${styles.title} text-white`}>Thirsty Thursdays!</h1>
							<div className={`${styles.info} text-white h3`}>
								10% off all beverages
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles['banner-img']}`} style={{ backgroundImage: `url(${BannerImg})` }} />
						<div className={`${styles['banner-content']} container`}>
							<h1 className={`${styles.title} text-white`}>Thirsty Thursdays! Thirsty Thursdays! Thirsty Thursdays!</h1>
							<div className={`${styles.info} text-white h3`}>
								20% off all flower
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles['banner-img']}`} style={{ backgroundImage: `url(${BannerImg})` }} />
						<div className={`${styles['banner-content']} container`}>
							<h1 className={`${styles.title} text-white`}>Thirsty Thursdays!</h1>
							<div className={`${styles.info} text-white h3`}>
								15% off all edibles all edibles all edibles all edibles all edibles all edibles all edibles all edibles all edibles
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="container">
					<div className={`${styles['btn-shop']}`}>
						<Button element="a" href="/">Shop now</Button>
					</div>
				</div>
			</div>
		</>
	);
}

