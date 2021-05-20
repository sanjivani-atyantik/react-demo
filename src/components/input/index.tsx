import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
import Close from '../../resources/svg-icons/close-circle.svg';
//button css
//buttons
import Button from "../button";
import btnstyles from '../button/style.scss';
import styles from './style.scss';

export default function Input(props) {
	const {
		children,
		className,
		type,
		disabled,
		placeholdertext,
		icon,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
  	return (
	  	<div className={`${styles['form-group']}`}>
			<img src={icon} alt='search' className={`${styles.iconImg}`} />
	  		<input 
	  			type={type} 
	  			className={`${styles['form-control']} ${extraClasses}`}
	  			placeholder={placeholdertext}
	  		/>
			<div className={`${styles['btn-cancel']}`}>
				<Button
					className="btn-link btn-link-btn">
				    <img src={Close} alt="Close" />
				</Button>
			</div>
	  	</div>
  	);
}
