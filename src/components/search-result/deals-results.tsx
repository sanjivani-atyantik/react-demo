import React, { useState } from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";
import Tag from "../tag/tag-with-icon";
import Header from '../search-header';
import Product from "../product";
import DealsBox from '../deals/dealsbox';

import headerstyles from '../search-header/style.scss';
import styles from './style.scss';

export default function SearchResult({ children }) {
	const [state, setState] = useState([
		{
			id: 1,
			tagname: "10% OFF",
			dealtitle: "10% off all Flower on fridays!",
			dealinst: "Valid today only"
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
				className="min-height"
			>
				<div className={`${headerstyles['filter-btns']}`}>
					<Button className="btn-transparent" element="a" href="/search-result/">Menu</Button>
					<Button className="btn-transparent" element="a" href="/no-result/">Rewards</Button>
					<Button className="btn-transparent active" element="a" href="/">Deals</Button>
				</div>
			</Header>
			
			<div className="container">
				<div className={`${styles['tag-btns']}`}>
					<Tag name="Lowell Farms" className="tag-outline-primary" />
					<Tag name="Lowell Farms" className="tag-outline-primary" />
					<Button className="btn-link btn-underline">Clear All</Button>
				</div>
				<div className={`${styles['my-2']}`}>
					{state.map(d => (
						<div key={d.id}>
							{ListItem(d)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

