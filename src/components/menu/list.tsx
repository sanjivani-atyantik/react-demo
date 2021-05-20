import React, { useState } from 'react';
import { getExtraClasses } from '../../utils/common';
//buttons
import Button from "../button";
import { Link } from "react-router-dom";

import modalstyles from '../modal/style.scss';


export default function List(props) {
	const {
		className,
		name,
		number,
	} = props;
	let extraClasses = getExtraClasses(modalstyles, className);
	return (
		<>
			<Link to="/" className={`${modalstyles['list-link']} ${extraClasses}`}>
				<h3 className={`${modalstyles.name} mb-0`}>{name}</h3>
				<span className={`${modalstyles.number}`}>{number}</span>
			</Link>
		</>
	);
}

