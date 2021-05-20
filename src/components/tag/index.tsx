import React from 'react';
import { getExtraClasses } from '../../utils/common';
import styles from './style.scss';

export default function Tag(props) {
	const {
		children,
		onClick,
		className,
		disabled,
		name,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	return (
		<>
			<div className={`${styles.tag} ${extraClasses}`}>
				{name}
	      	</div>
		</>
	);
}

