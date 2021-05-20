import React from 'react';
import { getExtraClasses } from '../../utils/common';


//button css
import btnstyles from '../button/style.scss';
import styles from './style.scss';

export default function Header(props) {
	const {
		children,
		className,
		headerClass,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	let headerClasses = getExtraClasses(styles, headerClass);
	return (
		<div className={`${styles['site-header']} ${extraClasses}`}>
			<div className={`${styles['fixed-header']} ${headerClasses}`}>
				<div className="container">
					<div className={`${styles['top-header']}`}>
					   {children}
					</div>
				</div>
			</div>
		</div>
	);
}

