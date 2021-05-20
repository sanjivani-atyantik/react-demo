import React, { useState } from 'react';

import { Link } from "react-router-dom";
import Header from '../search-header';
import SearchBlock from './search-block';
import styles from './style.scss';

export default function Search({ children }) {
	const [state, setState] = useState([
		{ id: 1, list: "Lowell Farms" },
		{ id: 2, list: "american" },
		{ id: 3, list: "preroll" },
	]);
	const [state1, setState1] = useState([
		{ id: 1, list: "Indica" },
		{ id: 2, list: "american" },
		{ id: 3, list: "preroll" },
		{ id: 4, list: "preroll123" },
	]);
	const ListItem = item => (
		<span 
			key={item.id}
			className={`${styles['search-text']} h3 mb-0 font-weight-normal`}>{item.list}
		</span>
	);
	return (
		<>
			<Header 
				className="header-shadow" 
			/>
			<div className={`${styles['search-container']}`}>
				<SearchBlock 
					label="Recent Searches"
				>
					{state.map(p => (
						<Link to="/" className={`${styles.row}`} key={p.id}>
							{ListItem(p)}
						</Link>
					))}
				</SearchBlock>
				<SearchBlock
					label="Popular Searches"
				>
					{state1.map(p => (
						<Link to="/" className={`${styles.row}`} key={p.id}>
							{ListItem(p)}
						</Link>
					))}
				</SearchBlock>
			</div>
		</>
	);
}

