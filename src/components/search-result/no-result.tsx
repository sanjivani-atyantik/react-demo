import React, { useState } from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";
import Tag from "../tag/tag-with-icon";
import Header from '../search-header';
import Product from "../product";


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
					<Button className="btn-transparent" element="a" href="/search-result/">Menu</Button>
					<Button className="btn-transparent active" element="a" href="/no-result/">Rewards</Button>
					<Button className="btn-transparent" element="a" href="/">Deals</Button>
				</div>
			</Header>
			
			<div className="container">
				<div className={`${styles['tag-btns']}`}>
					<Tag name="Lowell Farms" className="tag-outline-primary" />
					<Tag name="Lowell Farms" className="tag-outline-primary" />
					<Button className="btn-link btn-underline">Clear All</Button>
				</div>
				<div className={`${styles['no-result']}`}>
					<h3 className={`${styles.title}`}>No Results Found</h3>
					<p className={`${styles.inst}`}>Maybe try a different search</p>
				</div>
			</div>
		</>
	);
}

