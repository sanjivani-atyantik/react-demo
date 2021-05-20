import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import styles from './style.scss';

export default function Button(props) {
	const {
		children,
		onClick,
		className,
		element,
		href,
		type,
		disabled
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	if (element === 'a') {
		const isExternalLink = (href || '').indexOf('http') !== -1;
		if (isExternalLink) {
			return (
				<a
					className={`${styles.btn} ${extraClasses}`}
					href={href}
					onClick={onClick}
					target="_blank"
					rel="nofollow noopener noreferrer"
				>
					{children}
				</a>
			);
		}
		return (
			<Link
				className={`${styles.btn} ${extraClasses}`}
				type={type || 'button'}
				to={href}
				onClick={onClick}
			>
				{children}
			</Link>
		);
	}
  return (
	  	<button 
	  		className={`${styles.btn} ${extraClasses}`} 
	  		disabled={disabled}
		  	type={type || 'button'}
		>
	  	{children}
	  </button>
  );
}
