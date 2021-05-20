import React from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";
//img
import SearchIcon from '../../resources/svg-icons/search.svg';
//button css
import btnstyles from '../button/style.scss';

export default function Search({children}) {
	return (
		<>
			<Button
				className="btn-link input-btn"
				element="a" href="/"
			>
				<img src={SearchIcon} className={`${btnstyles.icon}`} />
				What are you looking for?
			</Button>
		</>
	);
}

