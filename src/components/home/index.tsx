import React from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";

import Header from '../header';
import Location from '../location';
import Banner from './banner';
import Search from './search';
import CategorySlider from '../category-slider';
import ProductSlider from '../product-slider';
import ProductSlider1 from '../product-slider/second-cat';
import Notification from '../notification';
import Rewards from '../product-slider/rewards';
import Deals from '../deals';
//img
import MenuIcon from '../../resources/svg-icons/menubar.svg';
import InfoIcon from '../../resources/svg-icons/info.svg';
import Logo from '../../resources/images/logo.png';
import Cart from '../../resources/svg-icons/cart.svg';

import '../../resources/css/custom-carousel.scss';
//button css
import btnstyles from '../button/style.scss';
import headerstyles from '../header/style.scss';
import styles from './style.scss';

export default function Home({children}) {
	return (
		<>
			<Header>
				<Button className="btn-link btn-link-btn btn-no-width-padding">
					<img src={MenuIcon} alt="Menu" className={`${btnstyles['svg-icon']}`} />
				</Button>
				<Link to="/" className={`${headerstyles.logo}`}>
					<img src={Logo} alt="Logo" />
				</Link>
				<Button
					className="btn-rounded btn-with-icon"
				>
					<img src={Cart} className={`${btnstyles.icon}`} />
					<span className={`${btnstyles['btn-text']}`}>3</span>
				</Button>
			</Header>
			<Notification />
			<Location />
			<div className="banner-slider">
				<Banner />
			</div>
			<div className="container">
				<Search />
			</div>
			<div className={`${styles['section-spacing']} category-slider container`}>
				<CategorySlider />
			</div>
			<div className={`${styles['section-spacing']} product-slider container`}>
				<ProductSlider />
			</div>
			<div className={`${styles['section-spacing']} container`}>
				<ProductSlider1 />
			</div>
			<div className={`${styles['section-spacing']} container`}>
				<Rewards />
			</div>
			<div className={`${styles['section-spacing']} container`}>
				<Deals />
			</div>
			<div>
				<Button className="btn-chat btn-link-btn btn-link btn-shadow floating-icon">
					<img src={InfoIcon} alt="Info" className={`${btnstyles['svg-icon']}`} />
				</Button>
			</div>
		</>
	);
}

