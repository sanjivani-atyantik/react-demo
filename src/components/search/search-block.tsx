import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import styles from './style.scss';

export default function SearchBlock(props) {
	const {
		children,
		className,
		label,
		...otherProps
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
			<div className={`${styles['search-block']}`}>
				<div className={`${styles.row}`}>
					<span className="h4 mb-0 font-weight-normal text-light">{label}</span>
				</div>
				{children}
			</div>
		</>
	);
}

