import React, { useState } from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";
import Quantity from "../quantity-box";
import Header from '../header';
import Tag from "../tag";
import DealsBox from '../deals/dealsbox';
import IndividualProductSlider from './individual-product-slider';

import ProductSlider from '../product-slider/product';
import Cart from '../../resources/svg-icons/cart.svg';
import LeftArrow from '../../resources/svg-icons/left-arrow.svg';
//button css
import btnstyles from '../button/style.scss';
import headerstyles from '../search-header/style.scss';
import styles from './style.scss';

export default function IndividualProduct({ children }) {
	const [ContentOpen, setContentOpen] = useState(false);
	const toggleMenu = () => {
		setContentOpen(!ContentOpen);
	};
	const [state, setState] = useState([
		{
			id: 1,
			tagname: "10% OFF",
			dealtitle: "Buy any Heavy Hitters Cartridge and get a HH Battery for a penny",
			dealinst: "Valid on Fridays from 1pm-3pm"
		},
		{
			id: 2,
			tagname: "Bogo",
			dealtitle: "Buy any Heavy Hitters Cartridge and get a HH Battery for a penny",
			dealinst: "Valid on Fridays from 2pm-4pm",
			visible: "disabled"
		},
	]);
	const ListItem = (item) => (
		<DealsBox
			key={item.id}
			id={item.id}
			tagLabel={item.tagname}
			title={item.dealtitle}
			disabled={item.visible}
			inst={item.dealinst}
		/>
	);
	return (
		<>
			<Header 
				headerClass="header-shadow"
			>
				<Button
					element="a" href="/"
					className="btn-link btn-link-btn btn-no-width-padding">
					<img src={LeftArrow} alt="LeftArrow" className={`${btnstyles['svg-sm-icon']}`} />
				</Button>
				<Button
					className="btn-rounded btn-with-icon"
				>
					<img src={Cart} className={`${btnstyles.icon}`} />
					<span className={`${btnstyles['btn-text']}`}>3</span>
				</Button>
			</Header>
			<div>
				<IndividualProductSlider />
				<div className="container">
					<div className={`${styles.section}`}>
						<div className={`${styles['space-between']}`}>
							<div>
								<h2>Hybrid</h2>
								<h4 className="text-light font-weight-normal">Lowell Farms</h4>
							</div>
							<div className={`${styles.price}`}>$34.00</div>
						</div>
						<div className={`${styles['tag-section']} `}>
							<div className={`${styles.inline}`}>
								<Tag name="Hybrid" className="small-tag" />
							</div>
							<div className={`${styles.inline}`}>
								<Tag name="THC 82.3%" className="tag-light small-tag" />
							</div>
							<div className={`${styles.inline}`}>
								<Tag name="CBD 0.1%" className="tag-light small-tag" />
							</div>
						</div>
					</div>
					<div className={`${styles.section} ${styles['py-2']}`}>
						<h3 className={`${styles.title}`}>Available Weights</h3>
						<div className={`${styles['btn-section']}`}>
							<div className={`${styles.inline}`}>
								<Button
									className="btn-outline-gray"
								>
									<span>1g</span>
									<span>$40</span>
								</Button>
							</div>
							<div className={`${styles.inline}`}>
								<Button
									className="btn-outline-gray active"
								>
									<span>3.5g</span>
									<span>$75</span>
								</Button>
							</div>
						</div>
					</div>
					<div className={`${styles.section}`}>
						<div className={`${styles['space-between']}`}>
							<h2>Deals</h2>
							<Link to="/" className={`${styles.link} h5`}>
								See All 20
	        				</Link>
						</div>
						<p className={`${styles['info-text']} h4 text-light font-weight-normal`} >
							View the deals that can be applied with this item
						</p>
						<div className={`${styles['py-2']}`}>
							{state.map(d => (
								<div key={d.id}>
									{ListItem(d)}
								</div>
							))}
						</div>
					</div>
					<div className={`${styles.section} ${styles['pad-0']}`}>
						<div className={`${styles.content} ${ContentOpen ? styles.open : ''}`}>
							<h2 
								className={`${styles['section-title']}`}
								onClick={toggleMenu}
							>
								Description
							</h2>
							<div className={`${styles.description}`}>
								<div className={`${styles['no-wrap']}`}>
									<Tag name="Hybrid" className="tag-outline-primary" />
									<Tag name="Flower" className="tag-outline-primary" />
									<Tag name="Lowell Farms" className="tag-outline-primary" />
								</div>
								<div className={`${styles.desc}`}>
								<p>1/8 ounce, top shelf flower. Curated strains by seasonal harvest.</p>
								<p className="mb-0">OUR PLEDGE</p>
								<div className={`${styles.list}`}>
									<span>we grow our flowers with only organic fertilizer</span>
									<span>we never use synthetic pesticides</span>
									<span>we pay our our farmers a proper living wage</span>
									<span>we use natural materials from seed to sale</span>
								</div>
							</div>
							</div>
						</div>
					</div>
					<div className={`${styles.section}`}>
						<h2>You Might Also Like</h2>
						<div>
							<ProductSlider />
						</div>		
					</div>
					<div className={`${styles['min-h-box']}`} />
					<div className={`${styles['fixed-bar']}`}>
						<div className={`${styles['space-between']} ${styles['fixed-btn-section']}`}>
							<div className={`${styles['flex-1']} ${styles['m-5']}`}>
								<Quantity />
							</div>
							<div className={`${styles['flex-1']} ${styles['m-5']}`}>
								<Button
									className="btn-sm-font btn-block btn-rounded active"
								>
									<span>Add to cart</span>
									<span>$34</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

