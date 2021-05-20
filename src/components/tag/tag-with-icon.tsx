import React from 'react';
//buttons
import Button from "../button";
import { getExtraClasses } from '../../utils/common';
import Close from '../../resources/svg-icons/cancel.svg';
//button css
import btnstyles from '../button/style.scss';
import styles from './style.scss';

export default function TagIcon(props) {
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
				<Button className="btn-link btn-link-btn">
					<img src={Close} alt="Close" className={`${btnstyles['svg-icon']}`} />
				</Button>
	      	</div>
		</>
	);
}

