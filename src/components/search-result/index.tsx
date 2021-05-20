import React, { useState } from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";
import Tag from "../tag/tag-with-icon";
import Header from '../search-header';
import Product from "../product";
import Img1 from '../product-slider/images/img1.png';
import Img2 from '../product-slider/images/img2.png';
import Img3 from '../product-slider/images/img3.png';
import Img4 from '../product-slider/images/img4.png';
import Img5 from '../product-slider/images/img5.png';
import Img6 from '../product-slider/images/img6.png';
import Img7 from '../product-slider/images/img7.png';
import Img8 from '../product-slider/images/img8.png';
//button css
import btnstyles from '../button/style.scss';
import headerstyles from '../search-header/style.scss';
import styles from './style.scss';

export default function SearchResult({ children }) {
	return (
		<>
			<Header 
				headerClass="header-shadow" 
				className="min-height"
			>
				<div className={`${headerstyles['filter-btns']}`}>
					<Button className="btn-transparent active" element="a" href="/search-result/">Menu</Button>
					<Button className="btn-transparent" element="a" href="/no-result/">Rewards</Button>
					<Button className="btn-transparent" element="a" href="/">Deals</Button>
				</div>
			</Header>
			
			<div className="container">
				<div className={`${styles['tag-btns']}`}>
					<Tag name="Lowell Farms" className="tag-outline-primary" />
					<Tag name="Lowell Farms" className="tag-outline-primary" />
					<Button className="btn-link btn-underline">Clear All</Button>
				</div>
				<div className={`${styles.row}`}>
					<div className={`${styles.col}`}>
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
					</div>
					<div className={`${styles.col}`}>
						<Product
							img={Img2}
							name='Canndescent'
							catName='Charge'
							tagName='Indica'
							price='1/8 | $30.00'
							tagClassName="tag-warning"
							rewardClassName="d-none"
						/>
					</div>
					<div className={`${styles.col}`}>
						<Product
							img={Img3}
							name='Bloom Farmss'
							catName='Strawberry Banana'
							tagName='Sativa'
							price='1/8 | $35.00'
							tagClassName="tag-light-blue"
							rewardClassName="d-none"
						/>
					</div>
					<div className={`${styles.col}`}>
						<Product
							img={Img4}
							name='Lowell Farms'
							catName='Hybrid'
							tagName='Hybrid'
							price='$40-$75'
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
							tagClassName="tag-warning"
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
							tagClassName="tag-light-blue"
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
							tagClassName="tag-warning"
							rewardClassName="d-none"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

